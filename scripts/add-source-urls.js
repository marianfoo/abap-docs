#!/usr/bin/env node
// Add Source URLs to ABAP Documentation Bundles
// Adds direct URLs to individual pages within bundles for MCP server reference

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

// Extract filename from markdown section headers
function extractFilenameFromSection(sectionContent) {
  // Look for patterns like "### filename.htm" or "### filename"
  const match = sectionContent.match(/^### ([a-zA-Z0-9_.-]+\.htm?)/m);
  return match ? match[1] : null;
}

// Generate base URL for version
function getBaseUrl(version) {
  if (version === 'latest') {
    return 'https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US';
  }
  return `https://help.sap.com/doc/abapdocu_${version.replace('.', '')}_index_htm/${version}/en-US`;
}

// Add source URLs to bundle content
function addSourceUrlsToBundle(content, version, manifest) {
  const baseUrl = getBaseUrl(version);
  const lines = content.split('\n');
  const result = [];
  
  let currentSection = null;
  let sectionStartIndex = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is a section header (### filename.htm)
    if (line.startsWith('### ') && line.includes('.htm')) {
      // If we have a previous section, add URL to it
      if (currentSection && sectionStartIndex >= 0) {
        const filename = extractFilenameFromSection(currentSection);
        if (filename) {
          const sourceUrl = `${baseUrl}/${filename}`;
          
          // Insert URL reference after the section header
          result.push('');
          result.push(`**📖 Source**: [${filename}](${sourceUrl})`);
          result.push('');
        }
      }
      
      // Start new section
      currentSection = line;
      sectionStartIndex = result.length;
      result.push(line);
    } else {
      result.push(line);
      if (currentSection) {
        currentSection += '\n' + line;
      }
    }
  }
  
  // Handle the last section
  if (currentSection && sectionStartIndex >= 0) {
    const filename = extractFilenameFromSection(currentSection);
    if (filename) {
      const sourceUrl = `${baseUrl}/${filename}`;
      
      // Find where to insert the URL (after the section header)
      const insertIndex = sectionStartIndex + 1;
      result.splice(insertIndex, 0, '', `**📖 Source**: [${filename}](${sourceUrl})`, '');
    }
  }
  
  return result.join('\n');
}

// Add comprehensive source references to bundle
function addComprehensiveSourceReferences(content, version, bundleInfo) {
  const baseUrl = getBaseUrl(version);
  const lines = content.split('\n');
  
  // Find the title and add source references section
  let titleIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('# ') && !lines[i].includes('📖') && !lines[i].includes('🔗')) {
      titleIndex = i;
      break;
    }
  }
  
  if (titleIndex === -1) return content;
  
  // Extract all filenames from the content
  const filenames = [];
  const filenameRegex = /### ([a-zA-Z0-9_.-]+\.htm?)/g;
  let match;
  while ((match = filenameRegex.exec(content)) !== null) {
    if (!filenames.includes(match[1])) {
      filenames.push(match[1]);
    }
  }
  
  // Create source references section
  const sourceRefsSection = [
    '',
    '## 🔗 Source References',
    '',
    `**Base URL**: [ABAP Keyword Documentation ${version}](${baseUrl}/index.htm)`,
    '',
    '**Individual Pages in this Bundle**:',
    ...filenames.map(filename => `- [${filename}](${baseUrl}/${filename})`),
    '',
    `**Bundle Contains**: ${filenames.length} documentation pages`,
    `**Version**: ABAP ${version}`,
    `**Generated**: ${new Date().toISOString()}`,
    '',
    '---',
    ''
  ];
  
  // Insert after title and existing metadata
  let insertIndex = titleIndex + 1;
  
  // Skip existing metadata lines
  while (insertIndex < lines.length && 
         (lines[insertIndex].startsWith('**') || 
          lines[insertIndex].startsWith('Included pages:') ||
          lines[insertIndex].trim() === '')) {
    insertIndex++;
  }
  
  // Insert the source references
  lines.splice(insertIndex, 0, ...sourceRefsSection);
  
  return lines.join('\n');
}

// Add source URLs to quick reference
function addSourceUrlsToQuickRef(content, version) {
  const baseUrl = getBaseUrl(version);
  const lines = content.split('\n');
  
  // Find title and add source reference
  let titleIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('# ')) {
      titleIndex = i;
      break;
    }
  }
  
  if (titleIndex === -1) return content;
  
  // Add source reference section after title
  const sourceSection = [
    '',
    `**📖 Source Documentation**: [ABAP Keyword Documentation ${version}](${baseUrl}/index.htm)`,
    `**🔍 Search All Topics**: Use \`abap_search\` with any keyword below`,
    `**📚 Get Complete Bundles**: Use \`abap_get\` with specific bundle IDs`,
    ''
  ];
  
  lines.splice(titleIndex + 1, 0, ...sourceSection);
  
  return lines.join('\n');
}

// Add source URLs to mega bundle
function addSourceUrlsToMegaBundle(content, version, category) {
  const baseUrl = getBaseUrl(version);
  const lines = content.split('\n');
  
  // Find title
  let titleIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('# ABAP ')) {
      titleIndex = i;
      break;
    }
  }
  
  if (titleIndex === -1) return content;
  
  // Add comprehensive source reference
  const sourceSection = [
    '',
    '## 🔗 Complete Source Documentation',
    '',
    `**📖 Official Documentation**: [ABAP Keyword Documentation ${version}](${baseUrl}/index.htm)`,
    `**🏷️ Category**: ${category.toUpperCase()}`,
    `**🔍 Search Specific Topics**: Use \`abap_search query:"${category}"\` for focused results`,
    `**📄 Individual Pages**: All source URLs included in each section below`,
    '',
    '### 🎯 Quick Navigation',
    '- **Search for specific statements**: `abap_search query:"SELECT"` or `abap_search query:"LOOP"`',
    '- **Get individual bundles**: Use `abap_get` with specific bundle doc_id',
    '- **Browse by difficulty**: Look for **Difficulty** markers in each section',
    '',
    '---',
    ''
  ];
  
  // Insert after existing metadata
  let insertIndex = titleIndex + 1;
  while (insertIndex < lines.length && 
         (lines[insertIndex].startsWith('**') || 
          lines[insertIndex].trim() === '' ||
          lines[insertIndex].startsWith('---'))) {
    insertIndex++;
  }
  
  lines.splice(insertIndex, 0, ...sourceSection);
  
  return lines.join('\n');
}

// Process a single version
async function processVersion(version) {
  console.log(`🔗 Adding source URLs to version ${version}...`);
  
  const dirs = {
    base: path.resolve(repoRoot, 'docs', version),
    bundles: path.resolve(repoRoot, 'docs', version, 'bundles'),
    megaBundles: path.resolve(repoRoot, 'docs', version, 'mega-bundles'),
    quickRef: path.resolve(repoRoot, 'docs', version, 'quick-ref')
  };
  
  if (!fs.existsSync(dirs.base)) {
    throw new Error(`Version ${version} not found.`);
  }
  
  // Load manifest for URL mapping
  const manifestPath = path.resolve(dirs.base, '_manifest.json');
  let manifest = {};
  if (fs.existsSync(manifestPath)) {
    manifest = JSON.parse(await fsp.readFile(manifestPath, 'utf8'));
  }
  
  let processedFiles = 0;
  
  // Process regular bundles
  if (fs.existsSync(dirs.bundles)) {
    const bundleFiles = await fsp.readdir(dirs.bundles);
    
    for (const file of bundleFiles) {
      if (!file.endsWith('.md')) continue;
      
      const filePath = path.resolve(dirs.bundles, file);
      const content = await fsp.readFile(filePath, 'utf8');
      
      // Skip if already has source references
      if (content.includes('🔗 Source References') || content.includes('📖 Source')) {
        continue;
      }
      
      const enhancedContent = addComprehensiveSourceReferences(
        addSourceUrlsToBundle(content, version, manifest),
        version,
        { file }
      );
      
      await fsp.writeFile(filePath, enhancedContent, 'utf8');
      processedFiles++;
    }
  }
  
  // Process mega bundles
  if (fs.existsSync(dirs.megaBundles)) {
    const megaBundleFiles = await fsp.readdir(dirs.megaBundles);
    
    for (const file of megaBundleFiles) {
      if (!file.endsWith('.md')) continue;
      
      const filePath = path.resolve(dirs.megaBundles, file);
      const content = await fsp.readFile(filePath, 'utf8');
      
      // Skip if already has source references
      if (content.includes('🔗 Complete Source Documentation')) {
        continue;
      }
      
      // Extract category from filename
      const category = file.replace('abap-', '').replace('-complete.md', '');
      
      const enhancedContent = addSourceUrlsToMegaBundle(
        addSourceUrlsToBundle(content, version, manifest),
        version,
        category
      );
      
      await fsp.writeFile(filePath, enhancedContent, 'utf8');
      processedFiles++;
    }
  }
  
  // Process quick references
  if (fs.existsSync(dirs.quickRef)) {
    const quickRefFiles = await fsp.readdir(dirs.quickRef);
    
    for (const file of quickRefFiles) {
      if (!file.endsWith('.md')) continue;
      
      const filePath = path.resolve(dirs.quickRef, file);
      const content = await fsp.readFile(filePath, 'utf8');
      
      // Skip if already has source references
      if (content.includes('📖 Source Documentation')) {
        continue;
      }
      
      const enhancedContent = addSourceUrlsToQuickRef(content, version);
      
      await fsp.writeFile(filePath, enhancedContent, 'utf8');
      processedFiles++;
    }
  }
  
  return {
    version,
    processedFiles,
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
        console.log(`✅ ${version}: ${result.processedFiles} files enhanced with source URLs`);
      } catch (err) {
        console.error(`❌ ${version}: ${err.message}`);
      }
    }
    
    console.log(`\n📊 Added source URLs to ${results.length} versions`);
    console.log(`📄 Total files enhanced: ${results.reduce((sum, r) => sum + r.processedFiles, 0)}`);
    return;
  }
  
  try {
    const result = await processVersion(args.version);
    console.log(`✅ Enhanced version ${result.version}:`);
    console.log(`   📄 ${result.processedFiles} files with source URLs added`);
    console.log(`   🔗 Base URL: ${result.baseUrl}`);
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
