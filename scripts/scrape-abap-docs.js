#!/usr/bin/env node
// ABAP docs crawler (fetch-based, Node 22)
// - Reads roots.txt for base versions
// - Seeds from index/glossary/subjects/examples pages
// - Crawls same-origin .htm files under the selected version path
// - Saves raw HTML to docs/<version>/ preserving filename

import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load as loadHtml } from 'cheerio';
import TurndownService from 'turndown';

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
    if (a === '--include-search') { args.includeSearch = true; continue; }
    if (a === '--all') { args.all = true; continue; }
    if (a === '--force') { args.force = true; continue; }
  }
  return {
    version: args.version || 'latest',
    limit: Number.isFinite(args.limit) ? args.limit : Infinity,
    concurrency: Number.isFinite(args.concurrency) ? args.concurrency : 8,
    includeSearch: Boolean(args.includeSearch),
    all: Boolean(args.all),
    force: Boolean(args.force),
    bundles: true,
  };
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function readRoots() {
  const rootsPath = path.resolve(repoRoot, 'roots.txt');
  const content = await fsp.readFile(rootsPath, 'utf8');
  const lines = content.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  return lines;
}

function versionFromRootUrl(url) {
  // e.g. https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm
  const m = url.match(/\/([0-9]+\.[0-9]+)\//);
  return m ? m[1] : 'latest';
}

function normalizeUrl(u) {
  // Remove anchors, normalize relative junk
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
  // Only crawl .htm(l)
  return /\.htm(l)?$/i.test(url);
}

function extractLinks(html, baseUrl) {
  const $ = loadHtml(html);
  const links = new Set();
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href || href.startsWith('mailto:')) return;

    // Handle javascript:call_link('...') pattern used by abap_docu_tree.htm
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
  // Also include frame URLs from tree frames if present via scripts
  // Not strictly needed because we seed tree and content pages explicitly
  return Array.from(links);
}

async function fetchWithRetry(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'abap-docs-crawler/1.0' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      return text;
    } catch (err) {
      if (i === tries - 1) throw err;
      await sleep(500 * (i + 1));
    }
  }
}

function deriveBasePrefix(rootUrl) {
  // We want the prefix up to the language folder, e.g.
  // https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/
  const u = new URL(rootUrl);
  let prefix = u.toString();
  if (prefix.endsWith('index.htm')) prefix = prefix.replace(/index\.htm$/, '');
  return prefix;
}

function outputDirsForVersion(version) {
  const base = path.resolve(repoRoot, 'docs', version);
  const html = path.resolve(base, 'html');
  return { base, html };
}

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

function filePathForUrlHtml(htmlDir, basePrefix, url) {
  // Preserve filename after basePrefix (strip query/hash)
  const relative = url.replace(basePrefix, '');
  const safeRel = relative.replace(/[?#].*$/, '');
  return path.resolve(htmlDir, safeRel);
}

async function saveHtml(filePath, html) {
  await ensureDir(path.dirname(filePath));
  await fsp.writeFile(filePath, html, 'utf8');
}

// Removed text and markdown generation - use generate-md-bundles.js instead

async function seedUrlsForRoot(rootUrl, includeSearch) {
  const seeds = new Set();
  const basePrefix = deriveBasePrefix(rootUrl);
  // Known entry documents
  const known = [
    'abenabap.htm',
    'abenabap_glossary.htm',
    'abenabap_index.htm',
    'abenabap_subjects.htm',
    'abenabap_examples.htm',
    // seed a single tree page (others are redundant)
    'abap_docu_tree.htm?file=abenabap.htm',
  ];
  if (includeSearch) known.push('search.htm');
  for (const k of known) seeds.add(new URL(k, basePrefix).toString());
  return { basePrefix, seeds: Array.from(seeds) };
}

function shouldSkipTextForUrl(url) {
  // Treat nav tree as non-content text to avoid polluting search
  return /\/abap_docu_tree\.htm(\?|$)/i.test(url);
}

async function crawlVersion(rootUrl, opts) {
  const { limit, concurrency, includeSearch, force } = opts;
  const version = versionFromRootUrl(rootUrl);
  const { basePrefix, seeds } = await seedUrlsForRoot(rootUrl, includeSearch);
  const dirs = outputDirsForVersion(version);
  await ensureDir(dirs.base);

  const manifestPath = path.resolve(dirs.base, '_manifest.json');
  if (!force && fs.existsSync(manifestPath)) {
    const existing = JSON.parse(await fsp.readFile(manifestPath, 'utf8'));
    return existing;
  }

  const queue = [...seeds];
  const seen = new Set(queue.map(normalizeUrl));
  const saved = [];
  const savedMap = [];

  async function worker() {
    while (queue.length > 0 && saved.length < limit) {
      const url = queue.shift();
      if (!url) break;
      try {
        const html = await fetchWithRetry(url);
        const links = extractLinks(html, url);
        const htmlPath = filePathForUrlHtml(dirs.html, basePrefix, url);
        await saveHtml(htmlPath, html);
        saved.push(url);
        savedMap.push({
          url,
          htmlFile: path.relative(dirs.base, htmlPath),
        });
        for (const l of links) {
          if (saved.length + queue.length >= limit) break;
          if (!isDocHtml(l, basePrefix)) continue;
          const norm = normalizeUrl(l);
          if (!seen.has(norm)) { seen.add(norm); queue.push(norm); }
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn('Fetch failed', url, String(err));
      }
      await sleep(50);
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);

  // Write simple manifest
  const manifest = {
    version,
    rootUrl,
    basePrefix,
    savedCount: saved.length,
    savedUrls: saved,
    files: savedMap,
    output: {
      htmlDir: path.relative(dirs.base, dirs.html),
    },
    timestamp: new Date().toISOString(),
  };
  await fsp.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

  return manifest;
}

// Tree and bundle generation moved to generate-md-bundles.js

async function main() {
  const args = parseArgs(process.argv);
  const roots = await readRoots();
  if (args.all) {
    const results = [];
    for (const r of roots) {
      const res = await crawlVersion(r, args);
      results.push(res);
    }
    // eslint-disable-next-line no-console
    console.log(JSON.stringify({ count: results.length, results }, null, 2));
    return;
  }
  const rootForVersion = roots.find(r => r.includes(`/${args.version}/`)) || roots[0];
  if (!rootForVersion) throw new Error('No roots found');
  const manifest = await crawlVersion(rootForVersion, args);
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(manifest, null, 2));
}

main().catch(err => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});


