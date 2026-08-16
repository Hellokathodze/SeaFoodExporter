/**
 * COMPLIANCE FRAMEWORKS - Country-specific export requirements
 * 
 * CITATIONS:
 * - USA: NOAA SIMP, FDA 21 CFR 110, FDA Food Traceability Rule (Jan 20, 2026)
 * - UK: Fish Trace Ship (Jan 8, 2026), FSA Regulations 2014
 * - EU: CATCH System (Jan 9, 2026), EC Reg. 1379/2013, PSMA Reg. 944/2007
 * - Australia: BICON System (July 26, 2026), DAFF Regulations
 * - India: MPEDA (May 28, 2026), DADF Order 2017
 */

export default {
  frameworks: [
    {
      country: 'USA',
      weight: 35,
      requirements: {
        priorNotice: '5-day advance notice required',
        healthCertificate: '30-day valid health certificate',
        antibiotic_testing: 'Antibiotic residue testing mandatory',
        traceability: 'Full catch traceability (FDA Food Traceability Rule Jan 20, 2026)'
      },
      citation: 'NOAA SIMP; FDA 21 CFR 110; FDA Food Traceability Rule (Jan 20, 2026)',
      criticalDocs: ['priorNotice', 'healthCert', 'antibiotic_testing', 'traceability'],
      processingTime: '5-10 business days'
    },
    {
      country: 'UK',
      weight: 35,
      requirements: {
        fish_trace_ship: 'Fish Trace Ship registration (mandatory since Jan 8, 2026)',
        vessel_registered: 'Vessel must be registered with MMO',
        fresh_fish_validity: 'Fresh fish valid for 10 days'
      },
      citation: 'Fish Trace Ship (Jan 8, 2026); FSA Regulations 2014; MMO June 16, 2026',
      criticalDocs: ['fish_trace_ship', 'vessel_registered'],
      processingTime: '3-7 business days'
    },
    {
      country: 'EU',
      weight: 40,
      requirements: {
        catch_certificate: 'CATCH certificate (mandatory since Jan 9, 2026)',
        vessel_imo: 'IMO number required',
        fao_iuu_check: 'FAO IUU check mandatory',
        iso_22005_traceability: 'ISO 22005:2007 traceability'
      },
      citation: 'CATCH System (Jan 9, 2026); EC Reg. 1379/2013; Implementing Reg. 2018/1135',
      criticalDocs: ['catch_certificate', 'vessel_imo', 'fao_iuu_check', 'iso_22005_traceability'],
      processingTime: '5-15 business days'
    },
    {
      country: 'Australia',
      weight: 40,
      requirements: {
        bicon_permit: 'BICON pre-approval permit required (20-40 days)',
        vessel_approved_register: 'Vessel must be on DAFF Approved Register',
        health_cert_au: 'Australia-specific health certificate',
        cold_chain_verified: 'Cold chain verification mandatory'
      },
      citation: 'BICON System (July 26, 2026); DAFF Regulations; AFMA',
      criticalDocs: ['bicon_permit', 'vessel_approved_register', 'health_cert_au', 'cold_chain_verified'],
      processingTime: '20-40 business days (BICON)'
    },
    {
      country: 'India',
      weight: 30,
      requirements: {
        rcmc_valid: 'RCMC certificate valid (365 days, $200 renewal)',
        health_cert: 'CIFT/CMFRI health certificate',
        monsoon_compliance: 'MPEDA monsoon ban compliance',
        stock_assessment: 'CMFRI stock assessment compliance'
      },
      citation: 'MPEDA (May 28, 2026); DADF Order 2017; CMFRI 2025',
      criticalDocs: ['rcmc_valid', 'health_cert'],
      processingTime: '2-5 business days (domestic)'
    }
  ],

  scoringMatrix: {
    pillar1_iuu: {
      name: 'IUU Compliance',
      points: 25,
      datasource: 'FAO Global Record',
      citation: 'FAO Global Record (https://www.fao.org/global-record/)'
    },
    pillar2_rcmc: {
      name: 'MPEDA RCMC',
      points: 25,
      datasource: 'MPEDA Certificate',
      citation: 'MPEDA (May 28, 2026); DADF Order 2017'
    },
    pillar3_traceability: {
      name: 'Catch Traceability',
      points: 25,
      datasource: 'Documentation Check',
      citation: 'FDA 21 CFR 110; ISO 22005:2007; BICON; Fish Trace Ship'
    },
    pillar4_monsoon: {
      name: 'Monsoon Compliance',
      points: 15,
      datasource: 'MPEDA Ban Dates',
      citation: 'MPEDA (May 28, 2026); Monsoon Fishing Regulation Act'
    },
    pillar5_market: {
      name: 'Market Compliance',
      points: 10,
      datasource: 'Country-Specific',
      citation: 'Multi-country regulatory frameworks (2026)'
    }
  },

  statusThresholds: {
    proceed: { min: 70, label: 'PROCEED', color: '#4caf50' },
    hold: { min: 50, max: 69, label: 'HOLD', color: '#ff9800' },
    blocked: { max: 49, label: 'BLOCKED', color: '#d32f2f' }
  }
};