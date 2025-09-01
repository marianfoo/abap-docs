#!/usr/bin/env node
// ABAP Documentation Scraper
// Fetches HTML documentation from SAP ABAP Keyword Documentation

import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load as loadHtml } from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--version') { args.version = argv[++i]; continue; }
    if (a === '--limit') { args.limit = Number(argv[++i]); continue; }
    if (a === '--concurrency') { args.concurrency = Number(argv[++i]); continue; }
    if (a === '--all') { args.all = true; continue; }
    if (a === '--force') { args.force = true; continue; }
  }
  return {
    version: args.version || 'latest',
    limit: Number.isFinite(args.limit) ? args.limit : Infinity,
    concurrency: Number.isFinite(args.concurrency) ? args.concurrency : 8,
    all: Boolean(args.all),
    force: Boolean(args.force)
  };
}

function sleep(ms) { 
  return new Promise(r => setTimeout(r, ms)); 
}

async function readRoots() {
  const rootsPath = path.resolve(repoRoot, 'roots.txt');
  const content = await fsp.readFile(rootsPath, 'utf8');
  return content.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
}

function versionFromRootUrl(url) {
  const m = url.match(/\/([0-9]+\.[0-9]+)\//);
  return m ? m[1] : 'latest';
}

function normalizeUrl(u) {
  try {
    const url = new URL(u);
    url.hash = '';
    return url.toString();
  } catch {
    return u.split('#')[0];
  }
}

function isDocHtml(url, basePrefix) {
  if (!url.startsWith(basePrefix)) return false;
  return /\.htm(l)?$/i.test(url);
}

function extractLinks(html, baseUrl) {
  const $ = loadHtml(html);
  const links = new Set();
  
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href || href.startsWith('mailto:')) return;

    // Handle javascript:call_link('...') pattern
    const jsCallLink = href.match(/^javascript:call_link\('(.*?)'\)/i);
    if (jsCallLink && jsCallLink[1]) {
      try {
        const abs = new URL(jsCallLink[1], baseUrl).toString();
        links.add(normalizeUrl(abs));
      } catch {}
      return;
    }

    if (href.startsWith('javascript:')) return;

    try {
      const abs = new URL(href, baseUrl).toString();
      links.add(normalizeUrl(abs));
    } catch {}
  });
  
  return Array.from(links);
}

async function fetchWithRetry(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { 
        headers: { 'User-Agent': 'abap-docs-scraper/1.0' } 
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (err) {
      if (i === tries - 1) throw err;
      await sleep(500 * (i + 1));
    }
  }
}

function deriveBasePrefix(rootUrl) {
  const u = new URL(rootUrl);
  let prefix = u.toString();
  if (prefix.endsWith('index.htm')) {
    prefix = prefix.replace(/index\.htm$/, '');
  }
  return prefix;
}

function getOutputDirs(version) {
  const base = path.resolve(repoRoot, 'docs', version);
  const html = path.resolve(base, 'html');
  return { base, html };
}

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

function getHtmlFilePath(htmlDir, basePrefix, url) {
  const relative = url.replace(basePrefix, '');
  const safeRel = relative.replace(/[?#].*$/, '');
  return path.resolve(htmlDir, safeRel);
}

async function saveHtml(filePath, html) {
  await ensureDir(path.dirname(filePath));
  await fsp.writeFile(filePath, html, 'utf8');
}

async function getSeedUrls(rootUrl) {
  const basePrefix = deriveBasePrefix(rootUrl);
  const seeds = new Set();
  
  // Known entry documents
  const knownFiles = [
    'abenabap.htm',
    'abenabap_glossary.htm', 
    'abenabap_index.htm',
    'abenabap_subjects.htm',
    'abenabap_examples.htm',
    'abap_docu_tree.htm?file=abenabap.htm'
  ];
  
  for (const file of knownFiles) {
    seeds.add(new URL(file, basePrefix).toString());
  }
  
  return { basePrefix, seeds: Array.from(seeds) };
}

async function scrapeVersion(rootUrl, opts) {
  const { limit, concurrency, force } = opts;
  const version = versionFromRootUrl(rootUrl);
  const { basePrefix, seeds } = await getSeedUrls(rootUrl);
  const dirs = getOutputDirs(version);
  
  console.log(`🔄 Scraping ABAP documentation for version ${version}...`);
  console.log(`   Root URL: ${rootUrl}`);
  console.log(`   Base prefix: ${basePrefix}`);
  
  await ensureDir(dirs.base);

  // Check if already scraped
  const manifestPath = path.resolve(dirs.base, '_manifest.json');
  if (!force && fs.existsSync(manifestPath)) {
    const existing = JSON.parse(await fsp.readFile(manifestPath, 'utf8'));
    console.log(`   ⏭️  Already scraped: ${existing.savedCount} files`);
    return existing;
  }

  // Clean HTML directory if force
  if (force && fs.existsSync(dirs.html)) {
    await fsp.rm(dirs.html, { recursive: true });
  }

  const queue = [...seeds];
  const seen = new Set(queue.map(normalizeUrl));
  const saved = [];
  const savedFiles = [];

  async function worker() {
    while (queue.length > 0 && saved.length < limit) {
      const url = queue.shift();
      if (!url) break;
      
      try {
        const html = await fetchWithRetry(url);
        const links = extractLinks(html, url);
        const htmlPath = getHtmlFilePath(dirs.html, basePrefix, url);
        
        await saveHtml(htmlPath, html);
        saved.push(url);
        savedFiles.push({
          url,
          htmlFile: path.relative(dirs.base, htmlPath)
        });
        
        // Add new links to queue
        for (const link of links) {
          if (saved.length + queue.length >= limit) break;
          if (!isDocHtml(link, basePrefix)) continue;
          
          const norm = normalizeUrl(link);
          if (!seen.has(norm)) {
            seen.add(norm);
            queue.push(norm);
          }
        }
        
        // Progress update
        if (saved.length % 100 === 0) {
          console.log(`   Progress: ${saved.length} files scraped`);
        }
        
      } catch (err) {
        console.warn(`   ⚠️  Failed to fetch ${url}: ${err.message}`);
      }
      
      await sleep(50); // Rate limiting
    }
  }

  // Run workers concurrently
  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);

  // Create manifest
  const manifest = {
    version,
    rootUrl,
    basePrefix,
    savedCount: saved.length,
    savedUrls: saved,
    files: savedFiles,
    output: {
      htmlDir: path.relative(dirs.base, dirs.html)
    },
    scrapedAt: new Date().toISOString()
  };
  
  await fsp.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`   ✅ Scraped ${saved.length} files for version ${version}`);
  return manifest;
}

async function main() {
  const args = parseArgs(process.argv);
  const roots = await readRoots();
  
  if (args.all) {
    console.log(`🚀 Scraping all ABAP documentation versions...`);
    const results = [];
    
    for (const rootUrl of roots) {
      try {
        const result = await scrapeVersion(rootUrl, args);
        results.push(result);
      } catch (err) {
        const version = versionFromRootUrl(rootUrl);
        console.error(`❌ Failed to scrape ${version}: ${err.message}`);
      }
    }
    
    console.log(`\n📊 Scraping Summary:`);
    console.log(`   Versions processed: ${results.length}`);
    console.log(`   Total files: ${results.reduce((sum, r) => sum + r.savedCount, 0)}`);
    
    return results;
  }
  
  // Single version
  const rootForVersion = roots.find(r => r.includes(`/${args.version}/`)) || roots[0];
  if (!rootForVersion) {
    throw new Error(`No root URL found for version ${args.version}`);
  }
  
  const result = await scrapeVersion(rootForVersion, args);
  console.log(`\n✅ Scraping completed for version ${result.version}`);
  console.log(`   Files scraped: ${result.savedCount}`);
  console.log(`   Output directory: docs/${result.version}/html/`);
  
  return result;
}

main().catch(err => {
  console.error(`💥 Scraping failed: ${err.message}`);
  console.error(err.stack);
  process.exit(1);
});
