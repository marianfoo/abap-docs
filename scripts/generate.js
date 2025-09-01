#!/usr/bin/env node
// ABAP Documentation Generator
// Converts HTML to Markdown, creates bundles, and applies all enhancements

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
    bundleBudget: Number.isFinite(args.bundleBudget) ? args.bundleBudget : 60000
  };
}

function getOutputDirs(version) {
  const base = path.resolve(repoRoot, 'docs', version);
  const html = path.resolve(base, 'html');
  const md = path.resolve(base, 'md');
  const bundles = path.resolve(base, 'bundles');
  const megaBundles = path.resolve(base, 'mega-bundles');
  const quickRef = path.resolve(base, 'quick-ref');
  return { base, html, md, bundles, megaBundles, quickRef };
}

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

// === HTML TO MARKDOWN CONVERSION ===

function htmlToMarkdown(html) {
  const $ = loadHtml(html);
  $('script, style, noscript, link').remove();
  
  const container = $('.all');
  const fragment = container.length ? container.html() || '' : $('body').html() || '';
  
  const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    emDelimiter: '*'
  });
  
  turndown.addRule('keepBreaks', {
    filter: ['br'],
    replacement: () => '\n'
  });
  
  return turndown.turndown(fragment);
}

async function convertHtmlToMarkdown(version, force) {
  const dirs = getOutputDirs(version);
  
  if (!fs.existsSync(dirs.html)) {
    throw new Error(`HTML directory not found: ${dirs.html}. Run scraper first.`);
  }

  // Clean MD directory if force
  if (force && fs.existsSync(dirs.md)) {
    await fsp.rm(dirs.md, { recursive: true });
  }

  await ensureDir(dirs.md);

  const htmlFiles = await fsp.readdir(dirs.html);
  const mdFiles = [];
  
  console.log(`   📄 Converting ${htmlFiles.length} HTML files to Markdown...`);
  
  for (const htmlFile of htmlFiles) {
    if (!htmlFile.endsWith('.htm') && !htmlFile.endsWith('.html')) continue;
    if (htmlFile.includes('abap_docu_tree.htm')) continue; // Skip tree files
    
    const htmlPath = path.resolve(dirs.html, htmlFile);
    const mdPath = path.resolve(dirs.md, htmlFile.replace(/\.(htm|html)$/i, '.md'));
    
    try {
      const html = await fsp.readFile(htmlPath, 'utf8');
      const markdown = htmlToMarkdown(html);
      await fsp.writeFile(mdPath, markdown, 'utf8');
      
      mdFiles.push({
        htmlFile,
        mdFile: path.relative(dirs.base, mdPath),
        file: htmlFile
      });
    } catch (err) {
      console.warn(`   ⚠️  Failed to convert ${htmlFile}: ${err.message}`);
    }
  }
  
  console.log(`   ✅ Converted ${mdFiles.length} files to Markdown`);
  return mdFiles;
}

// === TREE PARSING AND BUNDLE GENERATION ===

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
        
        // Find the associated link
        for (; j < children.length; j++) {
          const n = children[j];
          if (!n || !n.name) continue;
          const $n = $(n);
          if (n.name === 'a') {
            const f = getHrefFile($n.attr('href'));
            if (f) { 
              title = $n.text().trim(); 
              file = f; 
              break; 
            }
          }
        }
        
        // Find subtree
        let subtreeDiv = subtreeId ? container.find(`div#${subtreeId}`).first() : null;
        if (!subtreeDiv || !subtreeDiv.length) {
          for (let k = j + 1; k < children.length; k++) {
            const sib = children[k];
            if (sib && sib.name === 'div' && $(sib).attr('id') === subtreeId) { 
              subtreeDiv = $(sib); 
              break; 
            }
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
  const root = rootAnchor.length ? { 
    title: rootAnchor.text().trim(), 
    file: getHrefFile(rootAnchor.attr('href')), 
    children: [] 
  } : null;
  
  const items = parseContainer(rootContainer);
  
  if (root) {
    return { root, items };
  }
  return { root: null, items };
}

async function generateBundles(version, mdFiles, bundleBudget, force) {
  const dirs = getOutputDirs(version);
  
  // Clean bundles directory if force
  if (force && fs.existsSync(dirs.bundles)) {
    await fsp.rm(dirs.bundles, { recursive: true });
  }
  
  await ensureDir(dirs.bundles);

  // Parse tree structure
  const treeHtmlPath = path.resolve(dirs.html, 'abap_docu_tree.htm');
  let bundles = [];
  
  if (!fs.existsSync(treeHtmlPath)) {
    console.log(`   ⚠️  Tree file not found, skipping bundle generation`);
    return bundles;
  }

  console.log(`   🌳 Parsing documentation tree and creating bundles...`);
  
  try {
    const html = await fsp.readFile(treeHtmlPath, 'utf8');
    const tree = parseTreeFromHtml(html);
    
    if (!tree) {
      console.log(`   ⚠️  Failed to parse tree structure`);
      return bundles;
    }

    // Save tree structure
    const treePath = path.resolve(dirs.base, 'tree.json');
    await fsp.writeFile(treePath, JSON.stringify(tree, null, 2));

    // Build file mapping
    const fileToMd = new Map();
    for (const f of mdFiles) {
      if (f.file && f.mdFile) {
        fileToMd.set(f.file, path.resolve(dirs.base, f.mdFile));
      }
    }

    function collectDescendantFiles(node) {
      const files = [];
      if (node.file) files.push(node.file);
      for (const c of node.children || []) {
        files.push(...collectDescendantFiles(c));
      }
      return files;
    }

    async function createBundleForNode(node, pathTitles) {
      if (!node || !node.children || node.children.length === 0) return;
      
      const descendantFiles = collectDescendantFiles(node)
        .filter(f => f && !/abap_docu_tree\.htm/i.test(f));
      
      const parts = [];
      
      for (const file of descendantFiles) {
        const mdPath = fileToMd.get(file);
        if (!mdPath) continue;
        try {
          const content = await fsp.readFile(mdPath, 'utf8');
          parts.push({ file, content });
        } catch {}
      }
      
      const totalLength = parts.reduce((sum, p) => sum + p.content.length, 0);
      
      if (totalLength <= bundleBudget && parts.length > 1) {
        // Create bundle
        const combined = parts.map(p => `\n\n### ${p.file}\n\n${p.content}\n`).join('');
        const bundleTitle = [...pathTitles, node.title || 'Section'].join(' / ');
        
        let bundleNameSafe = bundleTitle.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');
        
        // Truncate long filenames
        if (bundleNameSafe.length > 100) {
          bundleNameSafe = bundleNameSafe.substring(0, 100).replace(/-+$/, '');
        }
        
        const bundlePath = path.resolve(dirs.bundles, bundleNameSafe + '.md');
        const header = `# ${bundleTitle}\n\nIncluded pages: ${parts.length}\n`;
        
        await fsp.writeFile(bundlePath, header + combined, 'utf8');
        bundles.push({ 
          title: bundleTitle, 
          file: path.relative(dirs.base, bundlePath), 
          count: parts.length 
        });
      } else if (node.children && node.children.length) {
        // Process children recursively
        for (const child of node.children) {
          await createBundleForNode(child, [...pathTitles, node.title || '']);
        }
      }
    }

    // Generate bundles from tree
    for (const topNode of tree.items || []) {
      await createBundleForNode(topNode, [tree.root ? tree.root.title : 'ABAP - Keyword Documentation']);
    }
    
    console.log(`   ✅ Generated ${bundles.length} bundles`);
    
  } catch (err) {
    console.warn(`   ⚠️  Bundle generation failed: ${err.message}`);
  }

  return bundles;
}

// === LINK FIXING ===

function getBaseUrl(version) {
  if (version === 'latest') {
    return 'https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US';
  }
  return `https://help.sap.com/doc/abapdocu_${version.replace('.', '')}_index_htm/${version}/en-US`;
}

function fixJavaScriptLinks(content, version) {
  const baseUrl = getBaseUrl(version);
  let fixed = content;
  
  // Fix all variations of javascript:call_link
  const patterns = [
    /javascript:call_link\\\s*\(\s*['"](.*?)['"]\s*\\\)/g,  // Escaped version
    /javascript:call_link\s*\(\s*['"](.*?)['"]\s*\)/g       // Regular version
  ];
  
  patterns.forEach(pattern => {
    fixed = fixed.replace(pattern, (match, filename) => {
      const cleanFilename = filename.replace(/['"]/g, '').trim();
      return `${baseUrl}/${cleanFilename}`;
    });
  });
  
  // Fix internal table of contents links
  fixed = fixed.replace(
    /#@@ITOC@@([^@]+)@/g,
    (match, anchor) => `#${anchor.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
  );
  
  return fixed;
}

async function fixLinksInFiles(version, dirs) {
  console.log(`   🔗 Fixing JavaScript links...`);
  
  let fixedCount = 0;
  const directoriesToFix = [
    { path: dirs.md, name: 'individual files' },
    { path: dirs.bundles, name: 'bundles' }
  ];
  
  for (const { path: dirPath, name } of directoriesToFix) {
    if (!fs.existsSync(dirPath)) continue;
    
    const files = await fsp.readdir(dirPath);
    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      
      const filePath = path.resolve(dirPath, file);
      const content = await fsp.readFile(filePath, 'utf8');
      
      if (content.includes('javascript:call_link')) {
        const fixedContent = fixJavaScriptLinks(content, version);
        await fsp.writeFile(filePath, fixedContent, 'utf8');
        fixedCount++;
      }
    }
  }
  
  console.log(`   ✅ Fixed JavaScript links in ${fixedCount} files`);
  return fixedCount;
}

// === ENHANCEMENT FEATURES ===

function determineCategory(title) {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('sql') || titleLower.includes('database')) return 'database';
  if (titleLower.includes('object') || titleLower.includes('class') || titleLower.includes('interface')) return 'oop';
  if (titleLower.includes('table') || titleLower.includes('itab')) return 'data-structures';
  if (titleLower.includes('exception') || titleLower.includes('error')) return 'error-handling';
  if (titleLower.includes('ui') || titleLower.includes('screen') || titleLower.includes('dynpro')) return 'ui';
  if (titleLower.includes('cds') || titleLower.includes('annotation')) return 'cds';
  if (titleLower.includes('type') || titleLower.includes('ddic')) return 'types';
  
  return 'general';
}

function determineDifficulty(title) {
  const advanced = ['amdp', 'cds', 'annotations', 'hierarchies', 'meshes', 'channels', 'transformations'];
  const beginner = ['basic', 'simple', 'introduction', 'overview', 'getting started'];
  
  const titleLower = title.toLowerCase();
  
  if (advanced.some(term => titleLower.includes(term))) return 'advanced';
  if (beginner.some(term => titleLower.includes(term))) return 'beginner';
  return 'intermediate';
}

function enhanceBundleIndex(bundles, version) {
  const searchIndex = {
    keywords: new Set(),
    topics: new Set(),
    statements: new Set()
  };

  const enhancedBundles = bundles.map(bundle => {
    // Extract keywords from title
    const titleWords = bundle.title.toLowerCase()
      .split(/[\/\-\s\(\)]+/)
      .filter(word => word.length > 2)
      .filter(word => !['abap', 'keyword', 'documentation', 'the', 'and', 'for', 'with'].includes(word));

    // Categorize content
    const topics = [];
    const statements = [];
    
    titleWords.forEach(word => {
      searchIndex.keywords.add(word);
      
      // Identify ABAP statements
      if (['select', 'insert', 'update', 'delete', 'loop', 'do', 'while', 'if', 'case', 'try', 'catch'].includes(word)) {
        statements.push(word);
        searchIndex.statements.add(word);
      }
      
      // Identify major topics
      if (['sql', 'cds', 'oop', 'objects', 'tables', 'types', 'exceptions', 'classes'].includes(word)) {
        topics.push(word);
        searchIndex.topics.add(word);
      }
    });

    return {
      ...bundle,
      keywords: titleWords,
      topics,
      statements,
      searchText: bundle.title.toLowerCase(),
      difficulty: determineDifficulty(bundle.title),
      category: determineCategory(bundle.title)
    };
  });

  return {
    metadata: {
      version,
      bundleCount: bundles.length,
      generatedAt: new Date().toISOString(),
      keywords: Array.from(searchIndex.keywords).sort(),
      topics: Array.from(searchIndex.topics).sort(),
      statements: Array.from(searchIndex.statements).sort()
    },
    bundles: enhancedBundles
  };
}

async function createMegaBundles(version, enhancedIndex) {
  const dirs = getOutputDirs(version);
  await ensureDir(dirs.megaBundles);
  
  console.log(`   🚀 Creating mega bundles...`);
  
  // Group bundles by category
  const categories = {};
  enhancedIndex.bundles.forEach(bundle => {
    const category = bundle.category;
    if (!categories[category]) categories[category] = [];
    categories[category].push(bundle);
  });
  
  const megaBundles = [];
  
  for (const [category, bundles] of Object.entries(categories)) {
    if (bundles.length < 3) continue; // Skip categories with too few bundles
    
    const megaBundleContent = [];
    megaBundleContent.push(`# ABAP ${category.toUpperCase()} - Complete Reference (${version})`);
    megaBundleContent.push(`\n**Generated**: ${new Date().toISOString()}`);
    megaBundleContent.push(`**Bundles Combined**: ${bundles.length}`);
    megaBundleContent.push(`**Category**: ${category}`);
    megaBundleContent.push('\n---\n');
    
    let totalFiles = 0;
    
    for (const bundle of bundles) {
      const bundlePath = path.resolve(dirs.bundles, bundle.file.replace('bundles/', ''));
      
      try {
        const content = await fsp.readFile(bundlePath, 'utf8');
        const fixedContent = fixJavaScriptLinks(content, version);
        
        megaBundleContent.push(`\n## ${bundle.title}\n`);
        megaBundleContent.push(`**Files**: ${bundle.count} | **Difficulty**: ${bundle.difficulty}\n`);
        megaBundleContent.push(fixedContent);
        megaBundleContent.push('\n---\n');
        
        totalFiles += bundle.count;
      } catch (err) {
        console.warn(`   ⚠️  Failed to read bundle ${bundle.file}: ${err.message}`);
      }
    }
    
    const megaBundleFilename = `abap-${category}-complete.md`;
    const megaBundlePath = path.resolve(dirs.megaBundles, megaBundleFilename);
    
    await fsp.writeFile(megaBundlePath, megaBundleContent.join('\n'), 'utf8');
    
    megaBundles.push({
      title: `ABAP ${category.toUpperCase()} - Complete Reference`,
      file: `mega-bundles/${megaBundleFilename}`,
      category,
      bundleCount: bundles.length,
      totalFiles,
      keywords: [...new Set(bundles.flatMap(b => b.keywords))],
      difficulty: 'comprehensive'
    });
  }
  
  console.log(`   ✅ Created ${megaBundles.length} mega bundles`);
  return megaBundles;
}

async function createQuickReferences(version, enhancedIndex) {
  const dirs = getOutputDirs(version);
  await ensureDir(dirs.quickRef);
  
  console.log(`   📋 Creating quick references...`);
  
  const baseUrl = getBaseUrl(version);
  
  // ABAP Statements Quick Reference
  const statements = enhancedIndex.metadata.statements;
  const statementsRef = [
    '# ABAP Statements Quick Reference',
    `\n**Version**: ${version}`,
    `**Generated**: ${new Date().toISOString()}`,
    `**📖 Source Documentation**: [ABAP Keyword Documentation ${version}](${baseUrl}/index.htm)`,
    '\n## Core Statements\n',
    ...statements.map(stmt => `- **${stmt.toUpperCase()}** - [Search for details](abap_search?query=${stmt})`),
    '\n## Categories\n',
    '### Data Processing',
    '- SELECT, INSERT, UPDATE, DELETE - Database operations',
    '- READ TABLE, LOOP AT - Internal table operations',
    '- MOVE, ASSIGN - Data assignments',
    '\n### Control Flow',
    '- IF/ENDIF, CASE/ENDCASE - Conditional logic',
    '- DO/ENDDO, WHILE/ENDWHILE - Loops',
    '- TRY/CATCH - Exception handling',
    '\n### Object-Oriented',
    '- CLASS/ENDCLASS - Class definitions',
    '- METHOD/ENDMETHOD - Method implementations',
    '- CREATE OBJECT - Object instantiation'
  ];
  
  await fsp.writeFile(
    path.resolve(dirs.quickRef, 'abap-statements-quick-ref.md'),
    statementsRef.join('\n'),
    'utf8'
  );
  
  // Topic Index
  const topicsRef = [
    '# ABAP Topics Index',
    `\n**Version**: ${version}`,
    `**Generated**: ${new Date().toISOString()}`,
    `**📖 Source Documentation**: [ABAP Keyword Documentation ${version}](${baseUrl}/index.htm)`,
    '\n## Major Topics\n',
    ...enhancedIndex.metadata.topics.map(topic => 
      `- **${topic.toUpperCase()}** - [Search bundles](abap_search?query=${topic})`
    ),
    '\n## By Difficulty\n',
    '### Beginner',
    ...enhancedIndex.bundles
      .filter(b => b.difficulty === 'beginner')
      .slice(0, 10)
      .map(b => `- ${b.title}`),
    '\n### Advanced',
    ...enhancedIndex.bundles
      .filter(b => b.difficulty === 'advanced')
      .slice(0, 10)
      .map(b => `- ${b.title}`)
  ];
  
  await fsp.writeFile(
    path.resolve(dirs.quickRef, 'abap-topics-index.md'),
    topicsRef.join('\n'),
    'utf8'
  );
  
  const quickRefs = [
    {
      title: 'ABAP Statements Quick Reference',
      file: 'quick-ref/abap-statements-quick-ref.md',
      type: 'quick-reference',
      keywords: statements
    },
    {
      title: 'ABAP Topics Index',
      file: 'quick-ref/abap-topics-index.md',
      type: 'index',
      keywords: enhancedIndex.metadata.topics
    }
  ];
  
  console.log(`   ✅ Created ${quickRefs.length} quick references`);
  return quickRefs;
}

async function createIndividualFileIndex(version) {
  const dirs = getOutputDirs(version);
  
  if (!fs.existsSync(dirs.md)) {
    return [];
  }
  
  const mdFiles = await fsp.readdir(dirs.md);
  const individualFiles = [];
  
  for (const file of mdFiles) {
    if (!file.endsWith('.md')) continue;
    
    const filePath = path.resolve(dirs.md, file);
    const stats = await fsp.stat(filePath);
    const content = await fsp.readFile(filePath, 'utf8');
    
    // Extract title from content
    const titleMatch = content.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : file.replace('.md', '');
    
    // Extract keywords from filename and title
    const keywords = [
      ...file.replace('.md', '').split(/[_-]/).filter(k => k.length > 2),
      ...title.toLowerCase().split(/\s+/).filter(k => k.length > 2)
    ];
    
    // Determine topic category
    let category = 'general';
    const titleLower = title.toLowerCase();
    if (titleLower.includes('select') || titleLower.includes('database')) category = 'database';
    else if (titleLower.includes('class') || titleLower.includes('method')) category = 'oop';
    else if (titleLower.includes('loop') || titleLower.includes('do') || titleLower.includes('while')) category = 'control-flow';
    else if (titleLower.includes('type') || titleLower.includes('data')) category = 'data-types';
    else if (titleLower.includes('exception') || titleLower.includes('try')) category = 'exception-handling';
    else if (titleLower.includes('cds') || titleLower.includes('annotation')) category = 'cds';
    
    individualFiles.push({
      file: `md/${file}`,
      title,
      size: stats.size,
      category,
      keywords: [...new Set(keywords)],
      difficulty: stats.size > 10000 ? 'advanced' : stats.size > 5000 ? 'intermediate' : 'beginner',
      searchText: `${title} ${file}`.toLowerCase()
    });
  }
  
  return individualFiles.sort((a, b) => a.title.localeCompare(b.title));
}

// === MAIN GENERATION FUNCTION ===

async function generateVersion(version, opts) {
  const { force, bundleBudget } = opts;
  const dirs = getOutputDirs(version);
  
  console.log(`🔄 Generating documentation for version ${version}...`);
  
  if (!fs.existsSync(dirs.html)) {
    throw new Error(`HTML directory not found: ${dirs.html}. Run scraper first.`);
  }

  // Step 1: Convert HTML to Markdown
  const mdFiles = await convertHtmlToMarkdown(version, force);
  
  // Step 2: Generate bundles from tree structure
  const bundles = await generateBundles(version, mdFiles, bundleBudget, force);
  
  // Step 3: Fix JavaScript links in all files
  await fixLinksInFiles(version, dirs);
  
  // Step 4: Create enhanced bundle index
  const enhancedIndex = enhanceBundleIndex(bundles, version);
  
  // Step 5: Create mega bundles
  const megaBundles = await createMegaBundles(version, enhancedIndex);
  
  // Step 6: Create quick references
  const quickRefs = await createQuickReferences(version, enhancedIndex);
  
  // Step 7: Create individual file index for optimal LLM consumption
  const individualFiles = await createIndividualFileIndex(version);
  
  // Write all indexes
  await fsp.writeFile(
    path.resolve(dirs.base, 'bundles_index.json'),
    JSON.stringify({ bundles }, null, 2)
  );
  
  const enhancedBundleIndex = {
    ...enhancedIndex,
    megaBundles,
    quickReferences: quickRefs
  };
  
  await fsp.writeFile(
    path.resolve(dirs.base, 'enhanced_bundles_index.json'),
    JSON.stringify(enhancedBundleIndex, null, 2)
  );
  
  const optimizedIndex = {
    metadata: {
      version,
      generatedAt: new Date().toISOString(),
      individualFiles: individualFiles.length,
      bundles: bundles.length,
      megaBundles: megaBundles.length,
      quickRefs: quickRefs.length,
      optimization: 'individual-files-first'
    },
    individualFiles,
    bundles: enhancedIndex.bundles,
    megaBundles,
    quickReferences: quickRefs,
    searchStrategy: {
      priority1: 'individual-files',
      priority2: 'focused-bundles', 
      priority3: 'quick-references',
      priority4: 'mega-bundles'
    }
  };
  
  await fsp.writeFile(
    path.resolve(dirs.base, 'optimized_index.json'),
    JSON.stringify(optimizedIndex, null, 2)
  );
  
  // Update manifest
  const manifestPath = path.resolve(dirs.base, '_manifest.json');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(await fsp.readFile(manifestPath, 'utf8'));
    
    // Update file mappings
    if (manifest.files) {
      manifest.files = manifest.files.map(f => {
        const mdFile = mdFiles.find(md => md.htmlFile === f.htmlFile);
        return {
          url: f.url,
          htmlFile: f.htmlFile,
          mdFile: mdFile ? mdFile.mdFile : undefined
        };
      });
    }
    
    manifest.generatedAt = new Date().toISOString();
    manifest.output = {
      ...manifest.output,
      mdDir: path.relative(dirs.base, dirs.md),
      bundlesDir: path.relative(dirs.base, dirs.bundles),
      megaBundlesDir: path.relative(dirs.base, dirs.megaBundles),
      quickRefDir: path.relative(dirs.base, dirs.quickRef)
    };
    
    await fsp.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  }
  
  return {
    version,
    mdCount: mdFiles.length,
    bundleCount: bundles.length,
    megaBundleCount: megaBundles.length,
    quickRefCount: quickRefs.length,
    individualFiles: individualFiles.length,
    baseUrl: getBaseUrl(version)
  };
}

async function main() {
  const args = parseArgs(process.argv);
  
  if (args.all) {
    console.log(`🚀 Generating all ABAP documentation versions...`);
    
    const rootsPath = path.resolve(repoRoot, 'roots.txt');
    const content = await fsp.readFile(rootsPath, 'utf8');
    const roots = content.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    
    const results = [];
    
    for (const rootUrl of roots) {
      const versionMatch = rootUrl.match(/\/([0-9]+\.[0-9]+)\//);
      const version = versionMatch ? versionMatch[1] : 'latest';
      
      try {
        const result = await generateVersion(version, args);
        results.push(result);
        console.log(`✅ ${version}: ${result.mdCount} MD files, ${result.bundleCount} bundles, ${result.megaBundleCount} mega-bundles`);
      } catch (err) {
        console.error(`❌ ${version}: ${err.message}`);
      }
    }
    
    console.log(`\n📊 Generation Summary:`);
    console.log(`   Versions processed: ${results.length}`);
    console.log(`   Total MD files: ${results.reduce((sum, r) => sum + r.mdCount, 0)}`);
    console.log(`   Total bundles: ${results.reduce((sum, r) => sum + r.bundleCount, 0)}`);
    console.log(`   Total mega-bundles: ${results.reduce((sum, r) => sum + r.megaBundleCount, 0)}`);
    
    return results;
  }
  
  // Single version
  try {
    const result = await generateVersion(args.version, args);
    console.log(`\n✅ Generation completed for version ${result.version}:`);
    console.log(`   📄 ${result.mdCount} Markdown files`);
    console.log(`   📦 ${result.bundleCount} bundles`);
    console.log(`   🚀 ${result.megaBundleCount} mega-bundles`);
    console.log(`   📋 ${result.quickRefCount} quick references`);
    console.log(`   📋 ${result.individualFiles} individual files indexed`);
    console.log(`   🌐 Base URL: ${result.baseUrl}`);
    console.log(`   📂 Output: docs/${result.version}/`);
  } catch (err) {
    console.error(`❌ Generation failed: ${err.message}`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error(`💥 Generation failed: ${err.message}`);
  console.error(err.stack);
  process.exit(1);
});
