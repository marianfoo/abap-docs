#!/usr/bin/env node
// Generate Markdown files and bundles from existing HTML files
// Separate from scraping to allow independent regeneration

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
    if (a === '--all') { args.all = true; continue; }
    if (a === '--force') { args.force = true; continue; }
    if (a === '--bundle-budget') { args.bundleBudget = Number(argv[++i]); continue; }
  }
  return {
    version: args.version || '7.58',
    all: Boolean(args.all),
    force: Boolean(args.force),
    bundleBudget: Number.isFinite(args.bundleBudget) ? args.bundleBudget : 60000,
  };
}

function outputDirsForVersion(version) {
  const base = path.resolve(repoRoot, 'docs', version);
  const html = path.resolve(base, 'html');
  const md = path.resolve(base, 'md');
  const bundles = path.resolve(base, 'bundles');
  return { base, html, md, bundles };
}

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

function htmlToMarkdown(html) {
  const $ = loadHtml(html);
  $('script, style, noscript, link').remove();
  const container = $('.all');
  const fragment = container.length ? container.html() || '' : $('body').html() || '';
  const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    emDelimiter: '*',
  });
  turndown.addRule('keepBreaks', {
    filter: ['br'],
    replacement: () => '\n'
  });
  return turndown.turndown(fragment);
}

async function saveMarkdown(filePath, markdown) {
  await ensureDir(path.dirname(filePath));
  await fsp.writeFile(filePath, markdown, 'utf8');
}

function parseTreeFromHtml(html) {
  const $ = loadHtml(html);
  const rootContainer = $('body > div').first();
  if (!rootContainer.length) return null;

  function getHrefFile(href) {
    const m = href && href.match(/javascript:call_link\('(.*?)'\)/i);
    return m ? m[1] : null;
  }

  function parseContainer(container) {
    const nodes = [];
    const children = container.contents().toArray();
    for (let i = 0; i < children.length; i++) {
      const el = children[i];
      if (!el || !el.name) continue;
      const $el = $(el);
      if (el.name === 'a' && ($el.attr('href') || '').startsWith("javascript:change")) {
        const changeHref = $el.attr('href') || '';
        const idMatch = changeHref.match(/change\(\s*'([^']+)'/);
        const subtreeId = idMatch ? idMatch[1] : null;
        let j = i + 1;
        let title = null;
        let file = null;
        for (; j < children.length; j++) {
          const n = children[j];
          if (!n || !n.name) continue;
          const $n = $(n);
          if (n.name === 'a') {
            const f = getHrefFile($n.attr('href'));
            if (f) { title = $n.text().trim(); file = f; break; }
          }
        }
        let subtreeDiv = subtreeId ? container.find(`div#${subtreeId}`).first() : null;
        if (!subtreeDiv || !subtreeDiv.length) {
          for (let k = j + 1; k < children.length; k++) {
            const sib = children[k];
            if (sib && sib.name === 'div' && $(sib).attr('id') === subtreeId) { subtreeDiv = $(sib); break; }
          }
        }
        const node = { title, file, children: [] };
        if (subtreeDiv && subtreeDiv.length) {
          node.children = parseContainer(subtreeDiv);
        }
        nodes.push(node);
        continue;
      }
      if (el.name === 'a') {
        const f = getHrefFile($el.attr('href'));
        if (f) {
          nodes.push({ title: $el.text().trim(), file: f, children: [] });
        }
      }
    }
    return nodes;
  }

  const rootAnchor = rootContainer.children('a[href^="javascript:call_link("]').first();
  const root = rootAnchor.length ? { title: rootAnchor.text().trim(), file: getHrefFile(rootAnchor.attr('href')), children: [] } : null;
  const items = parseContainer(rootContainer);
  if (root) {
    return { root, items };
  }
  return { root: null, items };
}

async function generateMdFromHtml(version, opts) {
  const { force, bundleBudget } = opts;
  const dirs = outputDirsForVersion(version);
  
  if (!fs.existsSync(dirs.html)) {
    throw new Error(`HTML directory not found: ${dirs.html}. Run scraper first.`);
  }

  // Clean existing md and bundles if force
  if (force) {
    if (fs.existsSync(dirs.md)) await fsp.rm(dirs.md, { recursive: true });
    if (fs.existsSync(dirs.bundles)) await fsp.rm(dirs.bundles, { recursive: true });
  }

  await ensureDir(dirs.md);
  await ensureDir(dirs.bundles);

  // Generate individual MD files from HTML
  const htmlFiles = await fsp.readdir(dirs.html);
  const mdFiles = [];
  
  for (const htmlFile of htmlFiles) {
    if (!htmlFile.endsWith('.htm') && !htmlFile.endsWith('.html')) continue;
    if (htmlFile.includes('abap_docu_tree.htm')) continue; // Skip tree files
    
    const htmlPath = path.resolve(dirs.html, htmlFile);
    const mdPath = path.resolve(dirs.md, htmlFile.replace(/\.(htm|html)$/i, '.md'));
    
    try {
      const html = await fsp.readFile(htmlPath, 'utf8');
      const md = htmlToMarkdown(html);
      await saveMarkdown(mdPath, md);
      mdFiles.push({
        htmlFile,
        mdFile: path.relative(dirs.base, mdPath),
        file: htmlFile
      });
    } catch (err) {
      console.warn(`Failed to convert ${htmlFile}:`, err.message);
    }
  }

  // Generate tree and bundles
  const treeHtmlPath = path.resolve(dirs.html, 'abap_docu_tree.htm');
  let bundles = [];
  
  if (fs.existsSync(treeHtmlPath)) {
    try {
      const html = await fsp.readFile(treeHtmlPath, 'utf8');
      const tree = parseTreeFromHtml(html);
      
      if (tree) {
        const treePath = path.resolve(dirs.base, 'tree.json');
        await fsp.writeFile(treePath, JSON.stringify(tree, null, 2));

        // Build map from file -> md path
        const fileToMd = new Map();
        for (const f of mdFiles) {
          if (f.file && f.mdFile) {
            fileToMd.set(f.file, path.resolve(dirs.base, f.mdFile));
          }
        }

        function collectDescendantFiles(node) {
          const files = [];
          if (node.file) files.push(node.file);
          for (const c of node.children || []) files.push(...collectDescendantFiles(c));
          return files;
        }

        async function createBundleForNode(node, pathTitles) {
          if (!node || !node.children || node.children.length === 0) return;
          
          const desc = collectDescendantFiles(node)
            .filter(f => f && !/abap_docu_tree\.htm/i.test(f));
          let combined = '';
          const parts = [];
          
          for (const file of desc) {
            const mdPath = fileToMd.get(file);
            if (!mdPath) continue;
            try {
              const content = await fsp.readFile(mdPath, 'utf8');
              parts.push({ file, content });
            } catch {}
          }
          
          const totalLen = parts.reduce((s, p) => s + p.content.length, 0);
          if (totalLen <= bundleBudget && parts.length > 1) { // Only bundle if multiple files
            combined = parts.map(p => `\n\n### ${p.file}\n\n${p.content}\n`).join('');
            const bundleTitle = [...pathTitles, node.title || 'Section'].join(' / ');
            let bundleNameSafe = bundleTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            
            // Truncate long filenames to avoid filesystem issues (max 100 chars + .md = 103)
            if (bundleNameSafe.length > 100) {
              bundleNameSafe = bundleNameSafe.substring(0, 100).replace(/-+$/, '');
            }
            
            const outPath = path.resolve(dirs.bundles, bundleNameSafe + '.md');
            await ensureDir(path.dirname(outPath));
            const header = `# ${bundleTitle}\n\nIncluded pages: ${parts.length}\n`;
            await fsp.writeFile(outPath, header + combined, 'utf8');
            bundles.push({ title: bundleTitle, file: path.relative(dirs.base, outPath), count: parts.length });
          } else if (node.children && node.children.length) {
            for (const child of node.children) {
              await createBundleForNode(child, [...pathTitles, node.title || '']);
            }
          }
        }

        for (const top of tree.items || []) {
          await createBundleForNode(top, [tree.root ? tree.root.title : 'ABAP - Keyword Documentation']);
        }
      }
    } catch (err) {
      console.warn('Tree/bundles generation failed:', err.message);
    }
  }

  // Write bundle index
  const bundleIndexPath = path.resolve(dirs.base, 'bundles_index.json');
  await fsp.writeFile(bundleIndexPath, JSON.stringify({ bundles }, null, 2));

  // Update manifest to remove text references
  const manifestPath = path.resolve(dirs.base, '_manifest.json');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(await fsp.readFile(manifestPath, 'utf8'));
    if (manifest.files) {
      manifest.files = manifest.files.map(f => ({
        url: f.url,
        htmlFile: f.htmlFile,
        mdFile: f.mdFile
      }));
    }
    if (manifest.output) {
      delete manifest.output.textDir;
    }
    manifest.generatedAt = new Date().toISOString();
    await fsp.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  }

  return {
    version,
    mdCount: mdFiles.length,
    bundleCount: bundles.length,
    dirs
  };
}

async function main() {
  const args = parseArgs(process.argv);
  
  if (args.all) {
    const rootsPath = path.resolve(repoRoot, 'roots.txt');
    const content = await fsp.readFile(rootsPath, 'utf8');
    const roots = content.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    
    const results = [];
    for (const rootUrl of roots) {
      const versionMatch = rootUrl.match(/\/([0-9]+\.[0-9]+)\//);
      const version = versionMatch ? versionMatch[1] : 'latest';
      
      try {
        const result = await generateMdFromHtml(version, args);
        results.push(result);
        console.log(`✅ ${version}: ${result.mdCount} MD files, ${result.bundleCount} bundles`);
      } catch (err) {
        console.error(`❌ ${version}: ${err.message}`);
      }
    }
    
    console.log(`\n📊 Summary: ${results.length} versions processed`);
    return;
  }
  
  try {
    const result = await generateMdFromHtml(args.version, args);
    console.log(`✅ Generated for ${result.version}:`);
    console.log(`   📄 ${result.mdCount} MD files`);
    console.log(`   📦 ${result.bundleCount} bundles`);
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
