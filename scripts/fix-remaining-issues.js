#!/usr/bin/env node
// Fix Remaining Issues in ABAP Documentation
// 1. Fix remaining JavaScript links
// 2. Add explicit source links for each document section
// 3. Create focused topic bundles instead of mega bundles

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

// Generate base URL for version
function getBaseUrl(version) {
  if (version === 'latest') {
    return 'https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US';
  }
  return `https://help.sap.com/doc/abapdocu_${version.replace('.', '')}_index_htm/${version}/en-US`;
}

// Fix all JavaScript links in content
function fixAllJavaScriptLinks(content, version) {
  const baseUrl = getBaseUrl(version);
  
  // Fix javascript:call_link references
  let fixed = content.replace(
    /javascript:call_link\('([^']+)'\)/g, 
    (match, filename) => `${baseUrl}/${filename}`
  );
  
  // Fix remaining javascript:call_link with double quotes
  fixed = fixed.replace(
    /javascript:call_link\("([^"]+)"\)/g, 
    (match, filename) => `${baseUrl}/${filename}`
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
      if (filename.startsWith('http')) return match; // Already fixed
      return `[${text}](${baseUrl}/${filename})`;
    }
  );
  
  return fixed;
}

// Add explicit source link for each document section
function addExplicitSourceLinks(content, version) {
  const baseUrl = getBaseUrl(version);
  const lines = content.split('\n');
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is a section header (### filename.htm)
    if (line.startsWith('### ') && line.includes('.htm')) {
      const filename = line.replace('### ', '').trim();
      
      result.push(line);
      result.push('');
      result.push(`> **📖 Official SAP Documentation**: [${filename}](${baseUrl}/${filename})`);
      result.push(`> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.`);
      result.push('');
    } else {
      result.push(line);
    }
  }
  
  return result.join('\n');
}

// Create focused topic bundles based on keywords
function createFocusedTopicBundles(bundles, version) {
  const topicGroups = {
    'inline-declarations': {
      keywords: ['inline', 'declaration', 'data(', 'final('],
      title: 'ABAP Inline Declarations',
      description: 'Complete guide to inline declarations and data definitions'
    },
    'select-statements': {
      keywords: ['select', 'from', 'where', 'join', 'union'],
      title: 'ABAP SELECT Statements',
      description: 'Complete SELECT statement syntax and operations'
    },
    'loop-constructs': {
      keywords: ['loop', 'do', 'while', 'endloop', 'enddo', 'endwhile'],
      title: 'ABAP Loop Constructs',
      description: 'All ABAP loop types: DO, WHILE, LOOP AT'
    },
    'class-definitions': {
      keywords: ['class', 'method', 'interface', 'inheritance', 'abstract'],
      title: 'ABAP Class Definitions',
      description: 'Object-oriented programming: classes, methods, interfaces'
    },
    'internal-tables': {
      keywords: ['itab', 'internal', 'table', 'append', 'insert', 'read'],
      title: 'ABAP Internal Tables',
      description: 'Internal table operations and processing'
    },
    'exception-handling': {
      keywords: ['try', 'catch', 'exception', 'raise', 'cleanup'],
      title: 'ABAP Exception Handling',
      description: 'Exception handling with TRY/CATCH blocks'
    },
    'data-types': {
      keywords: ['type', 'types', 'structure', 'elementary', 'reference'],
      title: 'ABAP Data Types',
      description: 'Data type definitions and declarations'
    },
    'cds-annotations': {
      keywords: ['annotation', 'cds', 'view', 'entity', 'association'],
      title: 'ABAP CDS Annotations',
      description: 'Core Data Services annotations and views'
    },
    'database-operations': {
      keywords: ['insert', 'update', 'delete', 'modify', 'commit', 'rollback'],
      title: 'ABAP Database Operations',
      description: 'Database modification and transaction handling'
    },
    'field-symbols': {
      keywords: ['field-symbol', 'assign', 'unassign', 'casting'],
      title: 'ABAP Field Symbols',
      description: 'Dynamic data access with field symbols'
    }
  };
  
  const focusedBundles = {};
  
  // Group bundles by topics
  for (const [topicKey, topicConfig] of Object.entries(topicGroups)) {
    const matchingBundles = bundles.filter(bundle => {
      const titleLower = bundle.title.toLowerCase();
      return topicConfig.keywords.some(keyword => 
        titleLower.includes(keyword.toLowerCase())
      );
    });
    
    if (matchingBundles.length > 0) {
      focusedBundles[topicKey] = {
        ...topicConfig,
        bundles: matchingBundles,
        count: matchingBundles.length,
        totalFiles: matchingBundles.reduce((sum, b) => sum + (b.count || 0), 0)
      };
    }
  }
  
  return focusedBundles;
}

// Create individual file index for optimal LLM consumption
async function createIndividualFileIndex(version) {
  const dirs = {
    base: path.resolve(repoRoot, 'docs', version),
    md: path.resolve(repoRoot, 'docs', version, 'md')
  };
  
  if (!fs.existsSync(dirs.md)) {
    console.warn(`MD directory not found for version ${version}`);
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

// Process a single version
async function processVersion(version) {
  console.log(`🔧 Fixing remaining issues for version ${version}...`);
  
  const dirs = {
    base: path.resolve(repoRoot, 'docs', version),
    bundles: path.resolve(repoRoot, 'docs', version, 'bundles'),
    md: path.resolve(repoRoot, 'docs', version, 'md'),
    megaBundles: path.resolve(repoRoot, 'docs', version, 'mega-bundles'),
    quickRef: path.resolve(repoRoot, 'docs', version, 'quick-ref'),
    focusedBundles: path.resolve(repoRoot, 'docs', version, 'focused-bundles')
  };
  
  if (!fs.existsSync(dirs.base)) {
    throw new Error(`Version ${version} not found.`);
  }
  
  let processedFiles = 0;
  let fixedJSLinks = 0;
  
  // 1. Fix JavaScript links in all bundle files
  if (fs.existsSync(dirs.bundles)) {
    const bundleFiles = await fsp.readdir(dirs.bundles);
    
    for (const file of bundleFiles) {
      if (!file.endsWith('.md')) continue;
      
      const filePath = path.resolve(dirs.bundles, file);
      const content = await fsp.readFile(filePath, 'utf8');
      
      // Check if content has JavaScript links
      if (content.includes('javascript:call_link')) {
        const fixedContent = addExplicitSourceLinks(
          fixAllJavaScriptLinks(content, version),
          version
        );
        
        await fsp.writeFile(filePath, fixedContent, 'utf8');
        fixedJSLinks++;
      }
      
      processedFiles++;
    }
  }
  
  // 2. Fix JavaScript links in mega bundles
  if (fs.existsSync(dirs.megaBundles)) {
    const megaBundleFiles = await fsp.readdir(dirs.megaBundles);
    
    for (const file of megaBundleFiles) {
      if (!file.endsWith('.md')) continue;
      
      const filePath = path.resolve(dirs.megaBundles, file);
      const content = await fsp.readFile(filePath, 'utf8');
      
      if (content.includes('javascript:call_link')) {
        const fixedContent = addExplicitSourceLinks(
          fixAllJavaScriptLinks(content, version),
          version
        );
        
        await fsp.writeFile(filePath, fixedContent, 'utf8');
        fixedJSLinks++;
      }
    }
  }
  
  // 3. Fix JavaScript links in individual MD files
  if (fs.existsSync(dirs.md)) {
    const mdFiles = await fsp.readdir(dirs.md);
    
    for (const file of mdFiles) {
      if (!file.endsWith('.md')) continue;
      
      const filePath = path.resolve(dirs.md, file);
      const content = await fsp.readFile(filePath, 'utf8');
      
      if (content.includes('javascript:call_link')) {
        const fixedContent = fixAllJavaScriptLinks(content, version);
        await fsp.writeFile(filePath, fixedContent, 'utf8');
        fixedJSLinks++;
      }
    }
  }
  
  // 4. Create individual file index for optimal LLM consumption
  const individualFiles = await createIndividualFileIndex(version);
  
  // 5. Load existing enhanced index
  const enhancedIndexPath = path.resolve(dirs.base, 'enhanced_bundles_index.json');
  let enhancedIndex = { bundles: [] };
  if (fs.existsSync(enhancedIndexPath)) {
    enhancedIndex = JSON.parse(await fsp.readFile(enhancedIndexPath, 'utf8'));
  }
  
  // 6. Create focused topic bundles
  const focusedTopics = createFocusedTopicBundles(enhancedIndex.bundles || [], version);
  
  // 7. Create optimized index for MCP server
  const optimizedIndex = {
    metadata: {
      version,
      generatedAt: new Date().toISOString(),
      individualFiles: individualFiles.length,
      focusedTopics: Object.keys(focusedTopics).length,
      optimization: 'individual-files-first'
    },
    individualFiles,
    focusedTopics,
    searchStrategy: {
      priority1: 'individual-files',
      priority2: 'focused-bundles', 
      priority3: 'quick-references',
      priority4: 'mega-bundles'
    },
    recommendations: {
      forSpecificQueries: 'Use individual files (1-10KB each)',
      forBroadTopics: 'Use focused topic bundles (20-50KB each)',
      forComprehensiveStudy: 'Use mega bundles (1-4MB each)',
      forQuickLookup: 'Use quick references'
    }
  };
  
  // Write optimized index
  await fsp.writeFile(
    path.resolve(dirs.base, 'optimized_index.json'),
    JSON.stringify(optimizedIndex, null, 2),
    'utf8'
  );
  
  return {
    version,
    processedFiles,
    fixedJSLinks,
    individualFiles: individualFiles.length,
    focusedTopics: Object.keys(focusedTopics).length,
    baseUrl: getBaseUrl(version)
  };
}

async function main() {
  const args = parseArgs(process.argv);
  
  if (args.all) {
    const versions = ['latest', '7.58', '7.57', '7.56', '7.55', '7.54', '7.53', '7.52'];
    const results = [];
    
    for (const version of versions) {
      try {
        const result = await processVersion(version);
        results.push(result);
        console.log(`✅ ${version}: ${result.processedFiles} files processed, ${result.fixedJSLinks} JS links fixed, ${result.individualFiles} individual files indexed`);
      } catch (err) {
        console.error(`❌ ${version}: ${err.message}`);
      }
    }
    
    console.log(`\n📊 Fixed issues across ${results.length} versions`);
    console.log(`📄 Total files processed: ${results.reduce((sum, r) => sum + r.processedFiles, 0)}`);
    console.log(`🔗 Total JS links fixed: ${results.reduce((sum, r) => sum + r.fixedJSLinks, 0)}`);
    console.log(`📋 Total individual files: ${results.reduce((sum, r) => sum + r.individualFiles, 0)}`);
    return;
  }
  
  try {
    const result = await processVersion(args.version);
    console.log(`✅ Fixed issues for version ${result.version}:`);
    console.log(`   📄 ${result.processedFiles} files processed`);
    console.log(`   🔗 ${result.fixedJSLinks} JavaScript links fixed`);
    console.log(`   📋 ${result.individualFiles} individual files indexed`);
    console.log(`   🎯 ${result.focusedTopics} focused topics created`);
    console.log(`   🌐 Base URL: ${result.baseUrl}`);
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
