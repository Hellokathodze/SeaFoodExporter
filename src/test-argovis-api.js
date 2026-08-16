/**
 * ARGOVIS API TEST SCRIPT
 * Tests all 3 demo WMO floats for SustainChain
 * Run with: node test-argovis-api.js
 */

const https = require('https');

// 3 Demo floats for your scoring engine
const demoFloats = [
  { wmo: 1900121, region: 'Bay of Bengal', lat: 14.5, lon: 88.2 },
  { wmo: 1900122, region: 'Arabian Sea', lat: 16.2, lon: 71.4 },
  { wmo: 1900123, region: 'Equatorial', lat: 0.5, lon: 80.0 }
];

// Test URLs - Using CORRECT Argovis API parameters
// Valid params: startDate, endDate, polygon, box, data, compression, presRange
// Coordinates MUST be [longitude, latitude]
const tests = [
  {
    name: 'Bay of Bengal Region (polygon) - Last 15 days',
    url: 'https://argovis-api.colorado.edu/argo?startDate=2026-08-01T00:00:00Z&endDate=2026-08-15T23:59:59Z&polygon=[[80,5],[90,5],[90,22],[80,22],[80,5]]'
  },
  {
    name: 'Arabian Sea Region (polygon) - Last 15 days',
    url: 'https://argovis-api.colorado.edu/argo?startDate=2026-08-01T00:00:00Z&endDate=2026-08-15T23:59:59Z&polygon=[[68,8],[75,8],[75,20],[68,20],[68,8]]'
  },
  {
    name: 'Equatorial Region (box) - Last 15 days',
    url: 'https://argovis-api.colorado.edu/argo?startDate=2026-08-01T00:00:00Z&endDate=2026-08-15T23:59:59Z&box=[[75,-5],[85,5]]'
  },
  {
    name: 'Bay of Bengal with data filter - Last 7 days',
    url: 'https://argovis-api.colorado.edu/argo?startDate=2026-08-08T00:00:00Z&endDate=2026-08-15T23:59:59Z&polygon=[[80,5],[90,5],[90,22],[80,22],[80,5]]&data=TEMP,PSAL,DOXY'
  },
  {
    name: 'Arabian Sea minimal data - Last 7 days',
    url: 'https://argovis-api.colorado.edu/argo?startDate=2026-08-08T00:00:00Z&endDate=2026-08-15T23:59:59Z&polygon=[[68,8],[75,8],[75,20],[68,20],[68,8]]&compression=minimal'
  }
];

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m'
};

async function fetchAPI(url) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Request timeout (5 seconds)'));
    }, 5000);

    https.get(url, (res) => {
      clearTimeout(timeout);
      let data = '';

      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            data: json,
            rawBody: data
          });
        } catch (e) {
          // If response is not JSON, still return it
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            rawBody: data,
            data: null,
            parseError: e.message
          });
        }
      });
    }).on('error', (err) => {
      clearTimeout(timeout);
      reject(err);
    });
  });
}

async function runTests() {
  console.log(`\n${colors.bright}${colors.blue}🧪 ARGOVIS API TEST SUITE${colors.reset}\n`);
  console.log(`Testing ${tests.length} queries...\n`);

  let passed = 0;
  let failed = 0;

  for (const test of tests) {
    try {
      console.log(`${colors.yellow}Testing: ${test.name}${colors.reset}`);
      console.log(`URL: ${test.url}`);
      const result = await fetchAPI(test.url);
      
      if (result.statusCode === 200) {
        const returnCount = result.data.returns || result.data.data?.length || 0;
        
        if (returnCount > 0) {
          console.log(`${colors.green}✅ PASS${colors.reset} - Returned ${returnCount} record(s)`);
          
          // Show first record details
          if (result.data.data && result.data.data[0]) {
            const firstRecord = result.data.data[0];
            console.log(`   WMO: ${firstRecord.wmo_id}, Date: ${firstRecord.date}`);
            if (firstRecord.measurements) {
              const vars = firstRecord.measurements.map(m => m.var_name).join(', ');
              console.log(`   Variables: ${vars}`);
            }
          }
          passed++;
        } else {
          console.log(`${colors.red}❌ FAIL${colors.reset} - No data returned (float may be inactive)`);
          failed++;
        }
      } else {
        console.log(`${colors.red}❌ FAIL${colors.reset} - Status ${result.statusCode}`);
        if (result.rawBody) {
          console.log(`Response: ${result.rawBody.substring(0, 200)}`);
        }
        failed++;
      }
    } catch (error) {
      console.log(`${colors.red}❌ ERROR${colors.reset} - ${error.message}`);
      failed++;
    }
    console.log('');
  }

  // Summary
  console.log(`${colors.bright}${colors.blue}📊 TEST SUMMARY${colors.reset}`);
  console.log(`${colors.green}Passed: ${passed}${colors.reset}`);
  console.log(`${colors.red}Failed: ${failed}${colors.reset}`);
  console.log(`Total: ${tests.length}\n`);

  if (failed === 0) {
    console.log(`${colors.green}${colors.bright}🎉 ALL TESTS PASSED! API IS READY${colors.reset}\n`);
  } else {
    console.log(`${colors.yellow}${colors.bright}⚠️ SOME TESTS FAILED - Check floats or use fallback mock data${colors.reset}\n`);
  }
}

// Run tests
runTests().catch(console.error);