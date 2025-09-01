# ABAP Documentation Scraper & Generator

This project scrapes and processes SAP ABAP Keyword Documentation for all versions, optimizing it for consumption by MCP servers and LLMs.

## 🚀 Quick Start

### Prerequisites
- Node.js 22+ (uses native fetch)
- Dependencies: `npm install`

### Basic Usage

```bash
# Scrape HTML documentation
npm run scrape              # Latest version
npm run scrape:758          # Specific version (7.58)
npm run scrape:all          # All versions

# Generate Markdown, bundles, and enhancements
npm run generate            # Latest version  
npm run generate:758        # Specific version (7.58)
npm run generate:all        # All versions

# Complete pipeline (scrape + generate)
npm run pipeline            # Latest version
npm run pipeline:758        # Specific version (7.58)
npm run pipeline:all        # All versions
```

## 📁 Output Structure

```
docs/
├── latest/
├── 7.58/
├── 7.57/
└── ...
    ├── html/                    # Raw scraped HTML files
    ├── md/                      # Individual Markdown files (1-10KB each)
    ├── bundles/                 # Topic bundles (20-60KB each)
    ├── mega-bundles/            # Category mega-bundles (1-4MB each)
    ├── quick-ref/               # Quick reference sheets
    ├── tree.json                # Documentation hierarchy
    ├── _manifest.json           # Scraping metadata
    ├── bundles_index.json       # Bundle index
    ├── enhanced_bundles_index.json  # Enhanced bundle metadata
    └── optimized_index.json     # Individual files index (MCP optimized)
```

## 🎯 MCP Server Integration

The generated documentation is optimized for MCP server consumption:

### Search Strategy (Priority Order)
1. **Individual Files** (`md/` folder) - Best for specific queries
2. **Focused Bundles** (`bundles/` folder) - Good for topic exploration  
3. **Quick References** (`quick-ref/` folder) - Good for statement lookups
4. **Mega Bundles** (`mega-bundles/` folder) - Good for comprehensive study

### Key Features
- ✅ **All JavaScript links eliminated** - No `javascript:call_link()` instances
- ✅ **Source URLs embedded** - Direct links to official SAP documentation
- ✅ **Size-optimized** - Individual files 1-10KB, perfect for LLM context windows
- ✅ **Rich metadata** - Categories, difficulty levels, keywords for enhanced search
- ✅ **Multi-version support** - ABAP 7.52 through 7.58 plus latest

### Recommended Implementation
Use `optimized_index.json` for individual-files-first search strategy:

```javascript
// Priority 1: Search individual MD files for specific queries
const individualResults = searchFiles(query, optimizedIndex.individualFiles);

// Priority 2: Fall back to bundles for broader topics  
if (individualResults.length < threshold) {
  const bundleResults = searchBundles(query, optimizedIndex.bundles);
}
```

## 📊 Statistics

- **~6,000+ documentation pages** per version
- **~180 topic bundles** per version  
- **~8 category mega-bundles** per version
- **2 quick reference sheets** per version
- **Zero JavaScript links** - all converted to direct URLs

## 🔧 Advanced Options

### Scraping Options
```bash
node scripts/scrape.js --version 7.58 --limit 1000 --concurrency 4 --force
```

### Generation Options  
```bash
node scripts/generate.js --version 7.58 --bundle-budget 80000 --force
```

## 📝 Version Support

Supported ABAP versions (defined in `roots.txt`):
- Latest (current)
- 7.58, 7.57, 7.56, 7.55, 7.54, 7.53, 7.52

## 🎉 What's New

This streamlined version consolidates all functionality into just **2 scripts**:

- **`scripts/scrape.js`** - Clean, focused HTML scraping
- **`scripts/generate.js`** - Complete MD generation with all enhancements integrated

### Integrated Features in `generate.js`:
- ✅ HTML to Markdown conversion
- ✅ Tree parsing and bundle generation  
- ✅ JavaScript link fixing
- ✅ Enhanced metadata generation
- ✅ Mega-bundle creation
- ✅ Quick reference generation
- ✅ Individual file indexing
- ✅ Source URL embedding

No more complex pipeline scripts or separate enhancement steps - everything is integrated and optimized for maintainability and debugging.