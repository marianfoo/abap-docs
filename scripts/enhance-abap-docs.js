#!/usr/bin/env node
// Enhanced ABAP Documentation Processing
// Fixes duplicate search results, broken links, and improves MCP consumption

import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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
  }
  return {
    version: args.version || '7.58',
    all: Boolean(args.all),
    force: Boolean(args.force),
  };
}

// Enhanced bundle index with search optimization
function createEnhancedBundleIndex(bundles, version) {
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

function determineDifficulty(title) {
  const advanced = ['amdp', 'cds', 'annotations', 'hierarchies', 'meshes', 'channels', 'transformations'];
  const beginner = ['basic', 'simple', 'introduction', 'overview', 'getting started'];
  
  const titleLower = title.toLowerCase();
  
  if (advanced.some(term => titleLower.includes(term))) return 'advanced';
  if (beginner.some(term => titleLower.includes(term))) return 'beginner';
  return 'intermediate';
}

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

// Fix broken links in markdown content
function fixMarkdownLinks(content, version) {
  let fixed = content;
  
  // Fix JavaScript call_link references
  fixed = fixed.replace(
    /javascript:call_link\('([^']+)'\)/g, 
    (match, filename) => {
      const baseUrl = `https://help.sap.com/doc/abapdocu_${version === 'latest' ? 'latest_index_htm/latest' : version + '_index_htm/' + version}/en-US`;
      return `${baseUrl}/${filename}`;
    }
  );
  
  // Fix internal table of contents links
  fixed = fixed.replace(
    /#@@ITOC@@([^@]+)@/g,
    (match, anchor) => `#${anchor.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
  );
  
  // Fix relative links to other bundles
  fixed = fixed.replace(
    /\[([^\]]+)\]\(([^)]+\.htm)\)/g,
    (match, text, filename) => {
      const baseUrl = `https://help.sap.com/doc/abapdocu_${version === 'latest' ? 'latest_index_htm/latest' : version + '_index_htm/' + version}/en-US`;
      return `[${text}](${baseUrl}/${filename})`;
    }
  );
  
  return fixed;
}

// Create topic-specific mega bundles for comprehensive coverage
async function createMegaBundles(version, enhancedIndex) {
  const dirs = {
    base: path.resolve(repoRoot, 'docs', version),
    bundles: path.resolve(repoRoot, 'docs', version, 'bundles'),
    megaBundles: path.resolve(repoRoot, 'docs', version, 'mega-bundles')
  };
  
  await fsp.mkdir(dirs.megaBundles, { recursive: true });
  
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
        const fixedContent = fixMarkdownLinks(content, version);
        
        megaBundleContent.push(`\n## ${bundle.title}\n`);
        megaBundleContent.push(`**Files**: ${bundle.count} | **Difficulty**: ${bundle.difficulty}\n`);
        megaBundleContent.push(fixedContent);
        megaBundleContent.push('\n---\n');
        
        totalFiles += bundle.count;
      } catch (err) {
        console.warn(`Failed to read bundle ${bundle.file}:`, err.message);
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
  
  return megaBundles;
}

// Create quick reference sheets
async function createQuickReferences(version, enhancedIndex) {
  const dirs = {
    base: path.resolve(repoRoot, 'docs', version),
    quickRef: path.resolve(repoRoot, 'docs', version, 'quick-ref')
  };
  
  await fsp.mkdir(dirs.quickRef, { recursive: true });
  
  // ABAP Statements Quick Reference
  const statements = enhancedIndex.metadata.statements;
  const statementsRef = [
    '# ABAP Statements Quick Reference',
    `\n**Version**: ${version}`,
    `**Generated**: ${new Date().toISOString()}`,
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
  
  return [
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
}

async function enhanceVersion(version) {
  console.log(`🔧 Enhancing ABAP docs for version ${version}...`);
  
  const dirs = {
    base: path.resolve(repoRoot, 'docs', version),
    bundles: path.resolve(repoRoot, 'docs', version, 'bundles')
  };
  
  if (!fs.existsSync(dirs.base)) {
    throw new Error(`Version ${version} not found. Run scraper first.`);
  }
  
  // Read existing bundle index
  const bundleIndexPath = path.resolve(dirs.base, 'bundles_index.json');
  if (!fs.existsSync(bundleIndexPath)) {
    throw new Error(`Bundle index not found for ${version}. Run generate-md-bundles.js first.`);
  }
  
  const bundleIndex = JSON.parse(await fsp.readFile(bundleIndexPath, 'utf8'));
  
  // Create enhanced index with search optimization
  const enhancedIndex = createEnhancedBundleIndex(bundleIndex.bundles, version);
  
  // Fix links in all bundle files
  let fixedFiles = 0;
  for (const bundle of enhancedIndex.bundles) {
    const bundlePath = path.resolve(dirs.bundles, bundle.file.replace('bundles/', ''));
    
    try {
      const content = await fsp.readFile(bundlePath, 'utf8');
      const fixedContent = fixMarkdownLinks(content, version);
      
      if (content !== fixedContent) {
        await fsp.writeFile(bundlePath, fixedContent, 'utf8');
        fixedFiles++;
      }
    } catch (err) {
      console.warn(`Failed to fix links in ${bundle.file}:`, err.message);
    }
  }
  
  // Create mega bundles
  const megaBundles = await createMegaBundles(version, enhancedIndex);
  
  // Create quick references
  const quickRefs = await createQuickReferences(version, enhancedIndex);
  
  // Write enhanced bundle index
  const enhancedBundleIndex = {
    ...enhancedIndex,
    megaBundles,
    quickReferences: quickRefs,
    stats: {
      bundlesFixed: fixedFiles,
      megaBundlesCreated: megaBundles.length,
      quickRefsCreated: quickRefs.length
    }
  };
  
  await fsp.writeFile(
    path.resolve(dirs.base, 'enhanced_bundles_index.json'),
    JSON.stringify(enhancedBundleIndex, null, 2),
    'utf8'
  );
  
  return {
    version,
    bundleCount: enhancedIndex.bundles.length,
    megaBundleCount: megaBundles.length,
    quickRefCount: quickRefs.length,
    linksFixed: fixedFiles,
    categories: [...new Set(enhancedIndex.bundles.map(b => b.category))].sort()
  };
}

async function main() {
  const args = parseArgs(process.argv);
  
  if (args.all) {
    const versions = ['latest', '7.58', '7.57', '7.56', '7.55', '7.54', '7.53', '7.52'];
    const results = [];
    
    for (const version of versions) {
      try {
        const result = await enhanceVersion(version);
        results.push(result);
        console.log(`✅ ${version}: ${result.bundleCount} bundles, ${result.megaBundleCount} mega-bundles, ${result.linksFixed} links fixed`);
      } catch (err) {
        console.error(`❌ ${version}: ${err.message}`);
      }
    }
    
    console.log(`\n📊 Enhanced ${results.length} versions`);
    return;
  }
  
  try {
    const result = await enhanceVersion(args.version);
    console.log(`✅ Enhanced version ${result.version}:`);
    console.log(`   📦 ${result.bundleCount} bundles enhanced`);
    console.log(`   🚀 ${result.megaBundleCount} mega-bundles created`);
    console.log(`   📋 ${result.quickRefCount} quick references created`);
    console.log(`   🔗 ${result.linksFixed} files with links fixed`);
    console.log(`   📂 Categories: ${result.categories.join(', ')}`);
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
