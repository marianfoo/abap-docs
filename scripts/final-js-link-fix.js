#!/usr/bin/env node
// Final comprehensive JavaScript link fix
// This script will ensure ALL JavaScript links are converted to proper URLs

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

// Comprehensive JavaScript link fixing
function fixAllJavaScriptLinks(content, version) {
  const baseUrl = getBaseUrl(version);
  let fixed = content;
  
  // Fix all variations of javascript:call_link
  const jsLinkPatterns = [
    /javascript:call_link\('([^']+)'\)/g,
    /javascript:call_link\("([^"]+)"\)/g,
    /javascript:call_link\(\'([^\']+)\'\)/g,
    /javascript:call_link\(\"([^\"]+)\"\)/g
  ];
  
  jsLinkPatterns.forEach(pattern => {
    fixed = fixed.replace(pattern, (match, filename) => {
      return `${baseUrl}/${filename}`;
    });
  });
  
  // Fix glossary entries with title attributes
  fixed = fixed.replace(
    /\[([^\]]+)\]\(javascript:call_link\('([^']+)'\)\s+"([^"]+)"\)/g,
    (match, text, filename, title) => {
      return `[${text}](${baseUrl}/${filename} "${title}")`;
    }
  );
  
  // Fix remaining internal table of contents links
  fixed = fixed.replace(
    /#@@ITOC@@([^@]+)@/g,
    (match, anchor) => `#${anchor.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
  );
  
  // Fix any remaining relative .htm links
  fixed = fixed.replace(
    /\[([^\]]+)\]\(([^)]+\.htm)\)/g,
    (match, text, filename) => {
      if (filename.startsWith('http') || filename.startsWith('#')) return match;
      return `[${text}](${baseUrl}/${filename})`;
    }
  );
  
  return fixed;
}

// Process all files in a directory
async function processDirectory(dirPath, version, fileExtension = '.md') {
  if (!fs.existsSync(dirPath)) return 0;
  
  const files = await fsp.readdir(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    if (!file.endsWith(fileExtension)) continue;
    
    const filePath = path.resolve(dirPath, file);
    const content = await fsp.readFile(filePath, 'utf8');
    
    if (content.includes('javascript:call_link')) {
      const fixedContent = fixAllJavaScriptLinks(content, version);
      await fsp.writeFile(filePath, fixedContent, 'utf8');
      fixedCount++;
    }
  }
  
  return fixedCount;
}

// Process a single version
async function processVersion(version) {
  console.log(`🔧 Final JavaScript link fix for version ${version}...`);
  
  const dirs = {
    base: path.resolve(repoRoot, 'docs', version),
    bundles: path.resolve(repoRoot, 'docs', version, 'bundles'),
    md: path.resolve(repoRoot, 'docs', version, 'md'),
    megaBundles: path.resolve(repoRoot, 'docs', version, 'mega-bundles'),
    quickRef: path.resolve(repoRoot, 'docs', version, 'quick-ref')
  };
  
  if (!fs.existsSync(dirs.base)) {
    throw new Error(`Version ${version} not found.`);
  }
  
  let totalFixed = 0;
  
  // Process all directories
  const directoriesToProcess = [
    { path: dirs.bundles, name: 'bundles' },
    { path: dirs.md, name: 'individual files' },
    { path: dirs.megaBundles, name: 'mega bundles' },
    { path: dirs.quickRef, name: 'quick references' }
  ];
  
  for (const { path: dirPath, name } of directoriesToProcess) {
    const fixed = await processDirectory(dirPath, version);
    if (fixed > 0) {
      console.log(`   📄 Fixed ${fixed} files in ${name}`);
      totalFixed += fixed;
    }
  }
  
  // Verify no JavaScript links remain
  const verificationResults = [];
  for (const { path: dirPath, name } of directoriesToProcess) {
    if (fs.existsSync(dirPath)) {
      const files = await fsp.readdir(dirPath);
      for (const file of files) {
        if (!file.endsWith('.md')) continue;
        
        const filePath = path.resolve(dirPath, file);
        const content = await fsp.readFile(filePath, 'utf8');
        const jsLinkCount = (content.match(/javascript:call_link/g) || []).length;
        
        if (jsLinkCount > 0) {
          verificationResults.push({ file: `${name}/${file}`, count: jsLinkCount });
        }
      }
    }
  }
  
  return {
    version,
    totalFixed,
    remainingJSLinks: verificationResults,
    baseUrl: getBaseUrl(version),
    verified: verificationResults.length === 0
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
        
        if (result.verified) {
          console.log(`✅ ${version}: ${result.totalFixed} files fixed, ALL JavaScript links removed`);
        } else {
          console.log(`⚠️  ${version}: ${result.totalFixed} files fixed, ${result.remainingJSLinks.length} files still have JS links`);
          result.remainingJSLinks.forEach(({ file, count }) => {
            console.log(`     - ${file}: ${count} remaining links`);
          });
        }
      } catch (err) {
        console.error(`❌ ${version}: ${err.message}`);
      }
    }
    
    const allVerified = results.every(r => r.verified);
    console.log(`\n📊 Final verification: ${allVerified ? '✅ ALL' : '⚠️  SOME'} JavaScript links removed`);
    console.log(`📄 Total files fixed: ${results.reduce((sum, r) => sum + r.totalFixed, 0)}`);
    return;
  }
  
  try {
    const result = await processVersion(args.version);
    console.log(`✅ Final fix completed for version ${result.version}:`);
    console.log(`   📄 ${result.totalFixed} files fixed`);
    console.log(`   🔗 JavaScript links verified: ${result.verified ? 'ALL REMOVED' : 'SOME REMAINING'}`);
    
    if (!result.verified) {
      console.log(`   ⚠️  Files with remaining JS links:`);
      result.remainingJSLinks.forEach(({ file, count }) => {
        console.log(`      - ${file}: ${count} links`);
      });
    }
    
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
