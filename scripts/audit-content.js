/**
 * Content Audit Crawler Script for Hidden Trails
 * 
 * This script crawls the website and checks for:
 * - Pages with word count < 400 (thin content)
 * - Pages with "coming soon", "under construction", or "placeholder" text
 * - Pages that should not display ads based on content quality
 * 
 * Usage: node scripts/audit-content.js
 */

const https = require('https');
const http = require('http');

const SITE_URL = process.env.SITE_URL || 'https://hiddentrails.netlify.app';
const MIN_WORD_COUNT = 400;
const THIN_CONTENT_THRESHOLD = 800;

// Pages to check
const PAGES_TO_AUDIT = [
  '/',
  '/about',
  '/contact',
  '/advertise',
  '/privacy',
  '/terms',
  '/dmca',
  // Location pages - will be dynamically added
];

// Suspicious keywords that indicate thin/placeholder content
const SUSPICIOUS_KEYWORDS = [
  'coming soon',
  'under construction',
  'placeholder',
  'lorem ipsum',
  'sample text',
  'test content',
  'work in progress',
  'wip',
  'todo',
  'tbd',
  'to be determined',
];

/**
 * Fetch page content
 */
function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, (res) => {
      // Check HTTP status code
      if (res.statusCode < 200 || res.statusCode >= 400) {
        reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
        return;
      }

      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Extract text content from HTML
 */
function extractTextFromHTML(html) {
  // Remove script and style tags
  let text = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  
  // Remove HTML tags
  text = text.replace(/<[^>]+>/g, ' ');
  
  // Decode HTML entities
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  
  // Remove extra whitespace
  text = text.replace(/\s+/g, ' ').trim();
  
  return text;
}

/**
 * Count words in text
 */
function countWords(text) {
  const words = text.split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

/**
 * Check for suspicious keywords
 */
function checkSuspiciousContent(text) {
  const lowerText = text.toLowerCase();
  const found = [];
  
  for (const keyword of SUSPICIOUS_KEYWORDS) {
    if (lowerText.includes(keyword)) {
      found.push(keyword);
    }
  }
  
  return found;
}

/**
 * Audit a single page
 */
async function auditPage(pagePath) {
  const url = `${SITE_URL}${pagePath}`;
  
  try {
    console.log(`\n🔍 Auditing: ${url}`);
    
    const html = await fetchPage(url);
    const text = extractTextFromHTML(html);
    const wordCount = countWords(text);
    const suspiciousKeywords = checkSuspiciousContent(text);
    
    // Determine status
    let status = 'PASS';
    let issues = [];
    
    if (wordCount < MIN_WORD_COUNT) {
      status = 'FAIL';
      issues.push(`Word count too low: ${wordCount} (minimum ${MIN_WORD_COUNT})`);
    } else if (wordCount < THIN_CONTENT_THRESHOLD) {
      status = 'WARNING';
      issues.push(`Word count below recommended: ${wordCount} (recommended ${THIN_CONTENT_THRESHOLD})`);
    }
    
    if (suspiciousKeywords.length > 0) {
      status = 'FAIL';
      issues.push(`Found suspicious keywords: ${suspiciousKeywords.join(', ')}`);
    }
    
    // Check for ad elements
    const hasAds = html.includes('adsbygoogle') || html.includes('data-ad-slot');
    
    return {
      url,
      pagePath,
      wordCount,
      status,
      issues,
      hasAds,
      suspiciousKeywords,
    };
  } catch (error) {
    console.error(`❌ Error auditing ${url}:`, error.message);
    return {
      url,
      pagePath,
      wordCount: 0,
      status: 'ERROR',
      issues: [error.message],
      hasAds: false,
      suspiciousKeywords: [],
    };
  }
}

/**
 * Get location pages from locations.json
 */
function getLocationPages() {
  try {
    const fs = require('fs');
    const path = require('path');
    const locationsPath = path.join(__dirname, '..', 'data', 'locations.json');
    const locations = JSON.parse(fs.readFileSync(locationsPath, 'utf8'));
    
    return locations.locations.map(loc => `/location/${loc.id}`);
  } catch (error) {
    console.error('⚠️  Could not load locations.json:', error.message);
    return [];
  }
}

/**
 * Generate report
 */
function generateReport(results) {
  console.log('\n' + '='.repeat(80));
  console.log('📊 CONTENT AUDIT REPORT');
  console.log('='.repeat(80));
  
  const failed = results.filter(r => r.status === 'FAIL');
  const warnings = results.filter(r => r.status === 'WARNING');
  const passed = results.filter(r => r.status === 'PASS');
  const errors = results.filter(r => r.status === 'ERROR');
  
  console.log(`\n✅ Passed: ${passed.length}`);
  console.log(`⚠️  Warnings: ${warnings.length}`);
  console.log(`❌ Failed: ${failed.length}`);
  console.log(`💥 Errors: ${errors.length}`);
  console.log(`📄 Total Pages: ${results.length}`);
  
  // Failed pages
  if (failed.length > 0) {
    console.log('\n' + '-'.repeat(80));
    console.log('❌ FAILED PAGES (CRITICAL - Must Fix Before AdSense Approval)');
    console.log('-'.repeat(80));
    
    failed.forEach(result => {
      console.log(`\n📄 ${result.pagePath}`);
      console.log(`   URL: ${result.url}`);
      console.log(`   Word Count: ${result.wordCount}`);
      console.log(`   Has Ads: ${result.hasAds ? 'YES ⚠️' : 'NO'}`);
      console.log(`   Issues:`);
      result.issues.forEach(issue => {
        console.log(`      - ${issue}`);
      });
      if (result.hasAds && result.wordCount < MIN_WORD_COUNT) {
        console.log(`   🚨 ACTION REQUIRED: Remove ads or add ${MIN_WORD_COUNT - result.wordCount}+ words`);
      }
    });
  }
  
  // Warning pages
  if (warnings.length > 0) {
    console.log('\n' + '-'.repeat(80));
    console.log('⚠️  WARNING PAGES (Should Improve for Better AdSense Performance)');
    console.log('-'.repeat(80));
    
    warnings.forEach(result => {
      console.log(`\n📄 ${result.pagePath}`);
      console.log(`   Word Count: ${result.wordCount} (recommended: ${THIN_CONTENT_THRESHOLD}+)`);
      console.log(`   Has Ads: ${result.hasAds ? 'YES' : 'NO'}`);
      console.log(`   Recommendation: Add ${THIN_CONTENT_THRESHOLD - result.wordCount}+ words`);
    });
  }
  
  // Summary with recommendations
  console.log('\n' + '='.repeat(80));
  console.log('📋 RECOMMENDATIONS');
  console.log('='.repeat(80));
  
  if (failed.length > 0) {
    console.log('\n1. IMMEDIATE ACTION REQUIRED:');
    failed.forEach(result => {
      if (result.hasAds && result.wordCount < MIN_WORD_COUNT) {
        console.log(`   - ${result.pagePath}: Remove ads OR add ${MIN_WORD_COUNT - result.wordCount}+ words`);
      } else if (result.wordCount < MIN_WORD_COUNT) {
        console.log(`   - ${result.pagePath}: Add ${MIN_WORD_COUNT - result.wordCount}+ words before enabling ads`);
      }
      if (result.suspiciousKeywords.length > 0) {
        console.log(`   - ${result.pagePath}: Remove placeholder text: ${result.suspiciousKeywords.join(', ')}`);
      }
    });
  }
  
  if (warnings.length > 0) {
    console.log('\n2. RECOMMENDED IMPROVEMENTS:');
    warnings.forEach(result => {
      console.log(`   - ${result.pagePath}: Expand content to ${THIN_CONTENT_THRESHOLD}+ words`);
    });
  }
  
  if (failed.length === 0 && warnings.length === 0) {
    console.log('\n✅ All pages meet AdSense content quality guidelines!');
    console.log('   Your site is ready for AdSense review.');
  }
  
  console.log('\n' + '='.repeat(80));
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting Content Audit...');
  console.log(`   Site: ${SITE_URL}`);
  console.log(`   Min Word Count: ${MIN_WORD_COUNT}`);
  console.log(`   Recommended Word Count: ${THIN_CONTENT_THRESHOLD}`);
  
  // Get all pages to audit
  const locationPages = getLocationPages();
  const allPages = [...PAGES_TO_AUDIT, ...locationPages];
  
  console.log(`\n📄 Found ${allPages.length} pages to audit`);
  
  // Audit all pages
  const results = [];
  for (const page of allPages) {
    const result = await auditPage(page);
    results.push(result);
    
    // Add small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Generate report
  generateReport(results);
  
  // Exit with appropriate code
  const failed = results.filter(r => r.status === 'FAIL');
  process.exit(failed.length > 0 ? 1 : 0);
}

// Run the audit
main().catch(error => {
  console.error('💥 Fatal error:', error);
  process.exit(1);
});
