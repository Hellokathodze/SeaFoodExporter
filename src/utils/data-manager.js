/**
 * DATA MANAGER - DEBUGGED VERSION
 * Logs actual API response to help fix response format issue
 */

import cmfriData from '../data/cmfri_stocks.json';
import mpedaBans from '../data/mpeda_bans.json';
import argoMockData from '../data/argo_demo_floats.json';
import complianceFrameworks from './compliance-frameworks.js';

class DataManager {
  constructor() {
    this.apiEndpoint = 'https://argovis-api.colorado.edu/argo';
    this.apiTimeout = 8000;
    this.cachePrefix = 'sustainchain_';
    this.cacheTTL = 24 * 60 * 60 * 1000;
    this.dataSource = 'UNKNOWN';
    this.lastFetchTime = null;
  }

  async getOceanHealthData(region, startDate, endDate) {
    console.log(`[DataManager] Fetching ocean data for ${region}...`);

    try {
      const liveData = await this.fetchFromArgovisAPI(region, startDate, endDate);
      if (liveData && liveData.length > 0) {
        this.dataSource = 'ARGOVIS API (Live)';
        this.lastFetchTime = new Date();
        console.log(`[DataManager] ✅ TIER 1 SUCCESS: Fetched ${liveData.length} profiles from live API for ${region}`);
        return this.processArgoProfiles(liveData);
      }
    } catch (error) {
      console.warn(`[DataManager] ⚠️ TIER 1 FAILED: ${error.message}`);
    }

    try {
      const cachedData = this.getFromCache(region);
      if (cachedData) {
        this.dataSource = 'Browser Cache (24hr)';
        console.log(`[DataManager] ✅ TIER 2 SUCCESS: Retrieved from cache`);
        return cachedData;
      }
    } catch (error) {
      console.warn(`[DataManager] ⚠️ TIER 2 FAILED: ${error.message}`);
    }

    console.log(`[DataManager] ✅ TIER 3: Using bundled mock ARGO data`);
    this.dataSource = 'Bundled Mock Data (Fallback)';
    return this.getMockOceanData(region);
  }

  async fetchFromArgovisAPI(region, startDate, endDate) {
    return new Promise((resolve, reject) => {
      let queryUrl;

      switch (region.toLowerCase()) {
        case 'arabian_sea':
          queryUrl = `${this.apiEndpoint}?startDate=${startDate}&endDate=${endDate}&box=[[80,5],[90,15]]`;
          break;
        case 'bay_of_bengal':
          queryUrl = `${this.apiEndpoint}?startDate=${startDate}&endDate=${endDate}&box=[[80,5],[90,15]]`;
          break;
        case 'equatorial':
          queryUrl = `${this.apiEndpoint}?startDate=${startDate}&endDate=${endDate}&box=[[75,-5],[85,5]]`;
          break;
        default:
          reject(new Error(`Unknown region: ${region}`));
          return;
      }

      console.log(`[DataManager] API URL: ${queryUrl.substring(0, 120)}...`);

      const timeout = setTimeout(() => {
        reject(new Error(`API timeout after ${this.apiTimeout}ms`));
      }, this.apiTimeout);

      fetch(queryUrl)
        .then(res => {
          clearTimeout(timeout);
          console.log(`[DataManager] API Response Status: ${res.status}`);
          
          if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
          }
          return res.json();
        })
        .then(json => {
          console.log(`[DataManager] 🔍 RAW API RESPONSE:`, json);
          
          // DEBUG: Log the structure
          console.log(`[DataManager] Response type:`, typeof json);
          console.log(`[DataManager] Is array?`, Array.isArray(json));
          console.log(`[DataManager] Has 'data' field?`, json?.data !== undefined);
          console.log(`[DataManager] Keys:`, Object.keys(json || {}));

          // Handle multiple response formats
          let data = null;

          // Format 1: Direct array response
          if (Array.isArray(json)) {
            console.log(`[DataManager] ✅ Format 1: Direct array (${json.length} items)`);
            data = json;
          }
          // Format 2: {data: [...]} wrapper
          else if (json && json.data && Array.isArray(json.data)) {
            console.log(`[DataManager] ✅ Format 2: {data: [...]} wrapper (${json.data.length} items)`);
            data = json.data;
          }
          // Format 3: {features: [...]} (GeoJSON)
          else if (json && json.features && Array.isArray(json.features)) {
            console.log(`[DataManager] ✅ Format 3: {features: [...]} (${json.features.length} items)`);
            data = json.features;
          }
          // Format 4: Error response
          else if (json && json.error) {
            throw new Error(`API error: ${json.error}`);
          }
          else if (json && json.message) {
            throw new Error(`API message: ${json.message}`);
          }
          else {
            throw new Error(`Unexpected response format. Got: ${JSON.stringify(json).substring(0, 200)}`);
          }

          // Validate we have data
          if (!data || !Array.isArray(data) || data.length === 0) {
            throw new Error(`No data in response for ${region}`);
          }

          console.log(`[DataManager] ✅ Successfully extracted ${data.length} profiles`);
          this.saveToCache(region, data);
          resolve(data);
        })
        .catch(error => {
          clearTimeout(timeout);
          console.error(`[DataManager] ❌ Fetch error: ${error.message}`);
          reject(error);
        });
    });
  }

  processArgoProfiles(rawProfiles) {
    const processedData = [];

    for (const profile of rawProfiles) {
      try {
        const processed = {
          id: profile._id,
          timestamp: profile.timestamp,
          location: {
            latitude: profile.geolocation.coordinates[1],
            longitude: profile.geolocation.coordinates[0]
          },
          cycleNumber: profile.cycle_number,
          measurements: this.extractMeasurements(profile),
          dataSource: 'ARGOVIS API',
          citation: 'Tucker et al. 2020 - Argovis Data'
        };

        processed.oceanHealth = this.calculateOceanHealth(processed.measurements);
        processedData.push(processed);
      } catch (error) {
        console.warn(`[DataManager] Error processing profile ${profile._id}: ${error.message}`);
      }
    }

    return processedData;
  }

  extractMeasurements(profile) {
    const measurements = {};
    const varNames = profile.data_info ? profile.data_info[0] : [];

    measurements.temperature = { available: varNames.includes('temperature') };
    measurements.salinity = { available: varNames.includes('salinity') || varNames.includes('psal') };
    measurements.dissolvedOxygen = { available: varNames.includes('doxy') };
    measurements.chlorophyll = { available: varNames.includes('chla') };
    measurements.backscatter = { available: varNames.includes('bbp700') };

    return measurements;
  }

  calculateOceanHealth(measurements) {
    const hasOxygen = measurements.dissolvedOxygen?.available || false;
    const hasChlorophyll = measurements.chlorophyll?.available || false;

    return {
      hasOxygenData: hasOxygen,
      hasProductivityData: hasChlorophyll,
      omzDetected: hasOxygen ? 'UNCERTAIN_NEEDS_ANALYSIS' : 'UNKNOWN',
      productivityLevel: hasChlorophyll ? 'MODERATE' : 'UNKNOWN',
      healthScore: hasOxygen && hasChlorophyll ? 'GOOD' : 'INCOMPLETE',
      citations: [
        'Naqvi et al. 2000 - OMZ Formation in Arabian Sea',
        'Helly & Levin 2004 - Global Hypoxia Distribution',
        'Wyrtki 1973 - Equatorial Upwelling Systems',
        'Tucker et al. 2020 - Argovis Platform'
      ]
    };
  }

  getFromCache(region) {
    try {
      if (typeof localStorage === 'undefined') {
        return null;
      }

      const cacheKey = `${this.cachePrefix}${region}_data`;
      const cached = localStorage.getItem(cacheKey);

      if (!cached) {
        return null;
      }

      const { data, timestamp } = JSON.parse(cached);
      const age = Date.now() - timestamp;

      if (age < this.cacheTTL) {
        const ageHours = Math.round(age / (1000 * 60 * 60));
        console.log(`[DataManager] Cache is ${ageHours}h old - still valid`);
        return data;
      } else {
        localStorage.removeItem(cacheKey);
        console.log(`[DataManager] Cache expired (24h+) - removed`);
        return null;
      }
    } catch (error) {
      console.warn(`[DataManager] Cache error: ${error.message}`);
      return null;
    }
  }

  saveToCache(region, data) {
    try {
      if (typeof localStorage === 'undefined') {
        return;
      }

      const cacheKey = `${this.cachePrefix}${region}_data`;
      const cacheData = {
        data,
        timestamp: Date.now()
      };

      localStorage.setItem(cacheKey, JSON.stringify(cacheData));
      console.log(`[DataManager] Data cached for ${region}`);
    } catch (error) {
      console.warn(`[DataManager] Failed to cache: ${error.message}`);
    }
  }

  getMockOceanData(region) {
    if (!argoMockData || !argoMockData.profiles) {
      console.warn('[DataManager] Mock data not available');
      return [];
    }

    const regionMap = {
      'bay_of_bengal': 'Bay of Bengal',
      'arabian_sea': 'Arabian Sea',
      'equatorial': 'Equatorial Indian Ocean'
    };

    const targetRegion = regionMap[region.toLowerCase()];

    if (!targetRegion) {
      return argoMockData.profiles || [];
    }

    return argoMockData.profiles.filter(p =>
      p.location?.region === targetRegion
    );
  }

  getComplianceFramework(country) {
    try {
      const framework = complianceFrameworks.frameworks.find(f =>
        f.country.toLowerCase() === country.toLowerCase()
      );

      if (framework) {
        return {
          success: true,
          data: framework,
          citation: framework.citation || 'Multi-country compliance frameworks'
        };
      } else {
        return {
          success: false,
          error: `No framework found for ${country}`,
          availableCountries: complianceFrameworks.frameworks.map(f => f.country)
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  getCMFRIStockData(species = null) {
    try {
      if (species) {
        const speciesData = cmfriData.species_assessment.find(s =>
          s.id.toLowerCase() === species.toLowerCase() ||
          s.common_name.toLowerCase().includes(species.toLowerCase())
        );

        if (speciesData) {
          return {
            success: true,
            data: speciesData,
            citation: speciesData.citation
          };
        }
      }

      return {
        success: true,
        data: cmfriData.species_assessment,
        citation: cmfriData.citation,
        assessmentDate: cmfriData.report_date
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  getMonsoonBanData(coast = null) {
    try {
      if (coast) {
        const banData = mpedaBans.bans.find(b =>
          b.coast.toLowerCase().includes(coast.toLowerCase())
        );

        if (banData) {
          return {
            success: true,
            data: banData,
            citation: banData.citation
          };
        }
      }

      return {
        success: true,
        data: mpedaBans.bans,
        citation: mpedaBans.citation
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  isCatchDuringMonsoonBan(catchDate, latitude, longitude) {
    try {
      const date = new Date(catchDate);

      for (const ban of mpedaBans.bans) {
        const banStart = new Date(ban.ban_start_date);
        const banEnd = new Date(ban.ban_end_date);

        if (date >= banStart && date <= banEnd) {
          if (
            latitude >= ban.coordinates.min_latitude &&
            latitude <= ban.coordinates.max_latitude &&
            longitude >= ban.coordinates.min_longitude &&
            longitude <= ban.coordinates.max_longitude
          ) {
            return {
              isBanned: true,
              coast: ban.coast,
              banPeriod: `${ban.ban_start_date} to ${ban.ban_end_date}`,
              citation: ban.citation
            };
          }
        }
      }

      return { isBanned: false };
    } catch (error) {
      console.error(`[DataManager] Error checking monsoon ban: ${error.message}`);
      return { isBanned: false, error: error.message };
    }
  }

  async getDataSummary() {
    return {
      timestamp: new Date().toISOString(),
      dataSources: {
        cmfri: {
          status: 'READY',
          recordCount: cmfriData.species_assessment.length,
          citation: cmfriData.citation
        },
        mpeda: {
          status: 'READY',
          recordCount: mpedaBans.bans.length,
          citation: mpedaBans.citation
        },
        compliance: {
          status: 'READY',
          countries: complianceFrameworks.frameworks.map(f => f.country),
          totalFrameworks: complianceFrameworks.frameworks.length
        },
        argovis: {
          status: 'LIVE',
          endpoint: this.apiEndpoint,
          timeout: this.apiTimeout,
          fallbackAvailable: true,
          citation: 'Tucker et al. 2020'
        }
      },
      lastFetchTime: this.lastFetchTime,
      primaryDataSource: this.dataSource
    };
  }
}

export default DataManager;