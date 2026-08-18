/**
 * SUSTAINCHAIN DASHBOARD - ENHANCED LOGO PANEL BACKGROUND
 * 
 * ✅ Animated gradient background (ocean-inspired)
 * ✅ Subtle geometric pattern overlay
 * ✅ Trust indicators + badges
 * ✅ Enhanced visual hierarchy
 * ✅ Professional & modern aesthetic
 */

import React, { useState } from 'react';
import ScoringEngine from '../utils/scoring-engine';
import DataManager from '../utils/data-manager';
import { AlertCircle, CheckCircle, TrendingUp, Cloud, Database, Shield, Award } from 'lucide-react';

// ========== IMPORT DATA SOURCE LOGOS ==========
import mpedaLogo from '../assets/logos/mpeda-logo.png';
import cmfriLogo from '../assets/logos/cmfri-logo.png';
import incoisLogo from '../assets/logos/incois-logo.jpg';
import faoLogo from '../assets/logos/fao-logo.png';

// ========== IMPORT COMPLIANCE REGULATOR LOGOS ==========
import fdaLogo from '../assets/logos/FDA-Logo.png';
import fsaLogo from '../assets/logos/fsa-logo.png';
import ecLogo from '../assets/logos/ec-logo.png';
import daffLogo from '../assets/logos/daff-logo.png';

export default function Dashboard() {
  // ========== STATE ==========
  const [formData, setFormData] = useState({
    vesselName: '',
    rcmcIssueDate: '',
    rcmcExpiryDate: '',
    catchDate: '',
    region: 'arabian_sea',
    latitude: 16.2,
    longitude: 71.4,
    destination: 'eu',
    documents: {
      landingCertificate: false,
      healthCertificate: false,
      processingFacilityCert: false,
      vesselRegistration: false,
      catchOriginDoc: false
    }
  });

  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [scoreResult, setScoreResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState('');
  const [argoSource, setArgoSource] = useState('');

  // ARGO Float data with real metrics
  const argoFloatsData = [
    {
      id: 'argo-1',
      name: 'ARGO-1',
      position: 'Arabian Sea North',
      lat: 20.5,
      lon: 65.2,
      temp: '28.3°C',
      salinity: '36.2 psu',
      oxygen: '4.8 ml/L',
      lastUpdate: 'Aug 15, 09:00 UTC',
      status: 'Active'
    },
    {
      id: 'argo-2',
      name: 'ARGO-2',
      position: 'Arabian Sea Central',
      lat: 18.8,
      lon: 68.5,
      temp: '29.1°C',
      salinity: '36.5 psu',
      oxygen: '4.2 ml/L',
      lastUpdate: 'Aug 15, 08:30 UTC',
      status: 'Active'
    },
    {
      id: 'argo-3',
      name: 'ARGO-3',
      position: 'Bay of Bengal North',
      lat: 19.2,
      lon: 85.8,
      temp: '27.9°C',
      salinity: '33.8 psu',
      oxygen: '5.1 ml/L',
      lastUpdate: 'Aug 15, 07:45 UTC',
      status: 'Active'
    },
    {
      id: 'argo-4',
      name: 'ARGO-4',
      position: 'Bay of Bengal Central',
      lat: 17.5,
      lon: 87.3,
      temp: '28.6°C',
      salinity: '34.2 psu',
      oxygen: '4.9 ml/L',
      lastUpdate: 'Aug 15, 08:15 UTC',
      status: 'Active'
    },
    {
      id: 'argo-5',
      name: 'ARGO-5',
      position: 'Bay of Bengal South',
      lat: 15.8,
      lon: 88.9,
      temp: '29.3°C',
      salinity: '34.5 psu',
      oxygen: '4.6 ml/L',
      lastUpdate: 'Aug 15, 09:30 UTC',
      status: 'Active'
    },
    {
      id: 'argo-6',
      name: 'ARGO-6',
      position: 'Arabian Sea South',
      lat: 14.2,
      lon: 71.8,
      temp: '28.9°C',
      salinity: '35.8 psu',
      oxygen: '4.4 ml/L',
      lastUpdate: 'Aug 15, 08:00 UTC',
      status: 'Active'
    }
  ];

  // Fishing port data with INR & USD
  const portsData = [
    {
      id: 'kochi',
      name: 'Kochi',
      state: 'Kerala',
      annualLanding: '456,000 MT',
      mainSpecies: 'Sardines, Tuna, Mackerel',
      exports: '$890M/year',
      exportsUSD: '$890M',
      exportsINR: '₹7,380 Cr',
      certifications: 'MPEDA, ISO 22005'
    },
    {
      id: 'mumbai',
      name: 'Mumbai',
      state: 'Maharashtra',
      annualLanding: '234,000 MT',
      mainSpecies: 'Pomfret, Grouper, Squid',
      exports: '$560M/year',
      exportsUSD: '$560M',
      exportsINR: '₹4,650 Cr',
      certifications: 'MPEDA, RCMC, FDA approved'
    },
    {
      id: 'kakinada',
      name: 'Kakinada',
      state: 'Andhra Pradesh',
      annualLanding: '412,000 MT',
      mainSpecies: 'Shrimp, Prawns, Cephalopods',
      exports: '$850M/year',
      exportsUSD: '$850M',
      exportsINR: '₹7,055 Cr',
      certifications: 'MPEDA, EC approved, FAO IUU compliant'
    },
    {
      id: 'chennai',
      name: 'Chennai',
      state: 'Tamil Nadu',
      annualLanding: '312,000 MT',
      mainSpecies: 'Shrimp, Grouper, Catfish',
      exports: '$645M/year',
      exportsUSD: '$645M',
      exportsINR: '₹5,360 Cr',
      certifications: 'MPEDA, FSA approved'
    },
    {
      id: 'tvl',
      name: 'Thiruvananthapuram',
      state: 'Kerala',
      annualLanding: '128,000 MT',
      mainSpecies: 'Sardines, Mackerel, Tuna',
      exports: '$245M/year',
      exportsUSD: '$245M',
      exportsINR: '₹2,035 Cr',
      certifications: 'MPEDA, ISO 22005'
    },
    {
      id: 'mangalore',
      name: 'Mangalore',
      state: 'Karnataka',
      annualLanding: '98,000 MT',
      mainSpecies: 'Tuna, Mackerel, Skipjack',
      exports: '$145M/year',
      exportsUSD: '$145M',
      exportsINR: '₹1,205 Cr',
      certifications: 'MPEDA, ISO 22005'
    },
    {
      id: 'veraval',
      name: 'Veraval',
      state: 'Gujarat',
      annualLanding: '75,000 MT',
      mainSpecies: 'Sardine, Anchovy, Mackerel',
      exports: '$89M/year',
      exportsUSD: '$89M',
      exportsINR: '₹740 Cr',
      certifications: 'MPEDA, RCMC'
    }
  ];

  // Tooltip component
  const Tooltip = ({ type, data }) => {
    if (!data) return null;

    if (type === 'argo') {
      return (
        <div className="absolute bg-white rounded-lg shadow-lg p-3 z-50 w-72 text-sm border border-cyan-200">
          <div className="font-bold text-cyan-900 mb-2">{data.name}</div>
          <div className="space-y-1 text-gray-700">
            <div><span className="font-semibold">Position:</span> {data.position}</div>
            <div><span className="font-semibold">Latitude:</span> {data.lat}°</div>
            <div><span className="font-semibold">Longitude:</span> {data.lon}°</div>
            <div className="border-t pt-2 mt-2">
              <div><span className="font-semibold text-orange-600">🌡️ Temperature:</span> {data.temp}</div>
              <div><span className="font-semibold text-blue-600">🌊 Salinity:</span> {data.salinity}</div>
              <div><span className="font-semibold text-green-600">💨 Oxygen:</span> {data.oxygen}</div>
            </div>
            <div className="border-t pt-2 mt-2 text-xs">
              <div><span className="font-semibold">Last Update:</span> {data.lastUpdate}</div>
              <div><span className="font-semibold">Status:</span> <span className="text-green-600">●</span> {data.status}</div>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'port') {
      return (
        <div className="absolute bg-white rounded-lg shadow-lg p-3 z-50 w-80 text-sm border border-green-200">
          <div className="font-bold text-green-900 mb-2">{data.name}, {data.state}</div>
          <div className="space-y-1 text-gray-700">
            <div><span className="font-semibold">📊 Annual Landing:</span> {data.annualLanding}</div>
            <div><span className="font-semibold">🐟 Main Species:</span> {data.mainSpecies}</div>
            <div className="border-t pt-2 mt-2">
              <div><span className="font-semibold text-green-600">💰 Annual Exports:</span></div>
              <div className="ml-4 text-xs space-y-1">
                <div><span className="font-semibold">USD:</span> {data.exportsUSD}</div>
                <div><span className="font-semibold">INR:</span> {data.exportsINR}</div>
              </div>
            </div>
            <div className="border-t pt-2 mt-2">
              <div><span className="font-semibold">✓ Certifications:</span> {data.certifications}</div>
            </div>
          </div>
        </div>
      );
    }
  };

  const scoringEngine = new ScoringEngine();
  const dataManager = new DataManager();

  // ========== DATA SOURCES ==========
  const dataSources = [
    {
      name: 'MPEDA',
      fullName: 'Marine Products Export Development Authority',
      tagline: 'Core Regulator',
      logo: mpedaLogo,
      fallback: '🏢 MPEDA',
      url: 'https://www.mpeda.gov.in'
    },
    {
      name: 'CMFRI',
      fullName: 'Central Marine Fisheries Research Institute',
      tagline: 'Stock Data Provider',
      logo: cmfriLogo,
      fallback: '📬 CMFRI',
      url: 'https://www.cmfri.org.in'
    },
    {
      name: 'INCOIS',
      fullName: 'Indian National Centre for Ocean Information Services',
      tagline: 'Ocean Data Provider',
      logo: incoisLogo,
      fallback: '🌊 INCOIS',
      url: 'https://www.incois.gov.in'
    },
    {
      name: 'FAO',
      fullName: 'Food and Agriculture Organization (UN)',
      tagline: 'International Standard',
      logo: faoLogo,
      fallback: '🌍 FAO',
      url: 'https://www.fao.org'
    }
  ];

  // ========== COMPLIANCE REGULATORS ==========
  const complianceRegulators = [
    {
      name: 'FDA',
      fullName: 'Food & Drug Administration (USA)',
      tagline: 'Prior Notice, SIMP, HACCP',
      logo: fdaLogo,
      fallback: '🇺🇸 FDA',
      url: 'https://www.fda.gov'
    },
    {
      name: 'FSA',
      fullName: 'Food Standards Authority (UK)',
      tagline: 'Fish Trace Ship, Traceability',
      logo: fsaLogo,
      fallback: '🇬🇧 FSA',
      url: 'https://www.food.gov.uk'
    },
    {
      name: 'EC',
      fullName: 'European Commission (EU)',
      tagline: 'CATCH, ISO 22005, PSMA',
      logo: ecLogo,
      fallback: '🇪🇺 EC',
      url: 'https://commission.europa.eu'
    },
    {
      name: 'DAFF',
      fullName: 'Dept of Agriculture (Australia)',
      tagline: 'BICON, Cold Chain, Vessel Reg',
      logo: daffLogo,
      fallback: '🇦🇺 DAFF',
      url: 'https://www.agriculture.gov.au'
    }
  ];

  // ========== DEMO SCENARIOS ==========
  const demoScenarios = [
    {
      name: 'Good Export (Expected: 82)',
      data: {
        vesselName: 'Oceanic Exports Ltd',
        rcmcIssueDate: '2025-08-15',
        rcmcExpiryDate: '2026-10-14',
        catchDate: '2026-08-10',
        region: 'arabian_sea',
        latitude: 16.2,
        longitude: 71.4,
        destination: 'eu',
        priorNotice: true,
        healthCert: true,
        antibiotic_testing: true,
        traceability: true,
        catch_certificate: true,
        vessel_imo: false,
        fao_iuu_check: true,
        iso_22005_traceability: true,
        documents: {
          landingCertificate: true,
          healthCertificate: false,
          processingFacilityCert: true,
          vesselRegistration: true,
          catchOriginDoc: true
        }
      }
    },
    {
      name: 'IUU Blacklist (Expected: 0 - BLOCKED)',
      data: {
        vesselName: 'Illegal Trawler 1',
        rcmcIssueDate: '2025-08-15',
        rcmcExpiryDate: '2027-08-15',
        catchDate: '2026-08-10',
        region: 'arabian_sea',
        latitude: 16.2,
        longitude: 71.4,
        destination: 'eu',
        documents: {
          landingCertificate: true,
          healthCertificate: true,
          processingFacilityCert: true,
          vesselRegistration: true,
          catchOriginDoc: true
        }
      }
    },
    {
      name: 'Monsoon Ban (Expected: 0 - BLOCKED)',
      data: {
        vesselName: 'Arabian Sea Traders',
        rcmcIssueDate: '2025-08-15',
        rcmcExpiryDate: '2027-08-15',
        catchDate: '2026-06-15',
        region: 'arabian_sea',
        latitude: 16.2,
        longitude: 71.4,
        destination: 'eu',
        documents: {
          landingCertificate: true,
          healthCertificate: true,
          processingFacilityCert: true,
          vesselRegistration: true,
          catchOriginDoc: true
        }
      }
    },
    {
      name: 'Hold Status (Expected: 55)',
      data: {
        vesselName: 'Mid Quality Exports',
        rcmcIssueDate: '2025-08-15',
        rcmcExpiryDate: '2026-09-01',
        catchDate: '2026-08-12',
        region: 'bay_of_bengal',
        latitude: 14.5,
        longitude: 88.2,
        destination: 'usa',
        priorNotice: false,
        healthCert: false,
        antibiotic_testing: false,
        traceability: false,
        documents: {
          landingCertificate: false,
          healthCertificate: false,
          processingFacilityCert: false,
          vesselRegistration: true,
          catchOriginDoc: false
        }
      }
    },
    {
      name: 'Australia Export (Expected: 100)',
      data: {
        vesselName: 'Equatorial Fisheries',
        rcmcIssueDate: '2025-08-15',
        rcmcExpiryDate: '2027-08-15',
        catchDate: '2026-08-12',
        region: 'arabian_sea',
        latitude: 0.5,
        longitude: 80.0,
        destination: 'australia',
        bicon_permit: true,
        vessel_approved_register: true,
        health_cert_au: true,
        cold_chain_verified: true,
        documents: {
          landingCertificate: true,
          healthCertificate: true,
          processingFacilityCert: true,
          vesselRegistration: true,
          catchOriginDoc: true
        }
      }
    }
  ];

  // ========== HANDLERS ==========
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDocumentToggle = (docName) => {
    setFormData(prev => ({
      ...prev,
      documents: { ...prev.documents, [docName]: !prev.documents[docName] }
    }));
  };

  // ========== CALCULATE SCORE ==========
  const calculateScore = async () => {
    setLoading(true);
    try {
      const ocean = await dataManager.getOceanHealthData(
        formData.region,
        '2026-08-01T00:00:00Z',
        '2026-08-15T23:59:59Z'
      );

      const argoApiUsed = dataManager.argoApiUsed === true;
      const argoSourceLabel = argoApiUsed ? '🌐 LIVE (Argovis API)' : '📦 FALLBACK (Demo Data)';
      setArgoSource(argoSourceLabel);

      setDataSource(dataManager.dataSource);

      const result = scoringEngine.calculateScore(formData);

      console.clear();
      console.log('');
      console.log('╔════════════════════════════════════════════════════════════╗');
      console.log('║         SUSTAINCHAIN DEBUG: BREAKDOWN STRUCTURE            ║');
      console.log('╚════════════════════════════════════════════════════════════╝');
      console.log('📊 FINAL SCORE:', result.finalScore);
      console.log('📊 STATUS:', result.status);
      console.log('🌊 ARGO DATA SOURCE:', argoSourceLabel);
      console.log('');

      setScoreResult(result);
    } catch (error) {
      console.error('❌ ERROR:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const loadDemoScenario = (scenario) => {
    setFormData(prev => ({ ...prev, ...scenario.data }));
  };

  // ========== RENDER ANIMATED LOGO CARD ==========
  const renderAnimatedLogoCard = (org, idx, animationType = 'float') => {
    const animationStyles = {
      float: {
        animation: `float 3s ease-in-out infinite`,
        animationDelay: `${idx * 0.1}s`
      },
      bounce: {
        animation: `bounce 2s ease-in-out infinite`,
        animationDelay: `${idx * 0.15}s`
      },
      pulse: {
        animation: `pulse 2s ease-in-out infinite`,
        animationDelay: `${idx * 0.2}s`
      },
      slide: {
        animation: `slideIn 0.6s ease-out`,
        animationDelay: `${idx * 0.1}s`,
        animationFillMode: 'both'
      }
    };

    return (
      <div
        key={idx}
        className="flex flex-col items-center group"
        style={animationStyles[animationType]}
      >
        {/* Logo Card */}
        <a
          href={org.url}
          target="_blank"
          rel="noopener noreferrer"
          title={org.fullName}
          className="flex items-center justify-center h-20 w-20 bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100 hover:border-indigo-400 hover:scale-110"
        >
          <img
            src={org.logo}
            alt={org.name}
            className="h-16 max-w-[75px] object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div
            style={{ display: 'none' }}
            className="flex items-center justify-center text-xs font-semibold text-gray-700"
          >
            {org.fallback}
          </div>
        </a>

        {/* Organization Name & Tagline */}
        <div className="text-center mt-2">
          <p className="font-semibold text-gray-900 text-xs">{org.name}</p>
          <p className="text-xs text-gray-500 mt-1">{org.tagline}</p>
        </div>

        {/* Tooltip */}
        <div className="absolute top-full mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none z-10 shadow-lg">
          {org.fullName}
        </div>
      </div>
    );
  };

  // ========== RENDER ENHANCED LOGO SECTION ==========
  const renderSideBySideLogoSections = () => {
    return (
      <>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }

          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }

          /* Ocean background with India map */
          .logo-panel-bg {
            position: relative;
            background: linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 50%, #ecfdf5 100%);
            overflow: hidden;
            border-bottom: 1px solid #cbd5e1;
          }

          /* India map SVG background */
          .india-map-bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            opacity: 0.6;
            z-index: 1;
            pointer-events: none;
          }

          .logo-panel-content {
            position: relative;
            z-index: 2;
          }

          .section-left {
            animation: slideInLeft 0.7s ease-out;
          }

          .section-right {
            animation: slideInRight 0.7s ease-out;
          }

          /* Minimalist typography hierarchy */
          .panel-label {
            display: inline-block;
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 1rem;
            padding: 0.375rem 0.875rem;
            border-radius: 9999px;
            background: transparent;
            border: 1px solid currentColor;
          }

          .section-left .panel-label {
            color: #0369a1;
            border-color: #0369a1;
          }

          .section-right .panel-label {
            color: #059669;
            border-color: #059669;
          }

          .panel-title {
            font-size: 1.875rem;
            font-weight: 600;
            color: #0f172a;
            margin-bottom: 0.75rem;
            letter-spacing: -0.02em;
          }

          .panel-subtitle {
            font-size: 0.9375rem;
            color: #475569;
            line-height: 1.6;
            margin-bottom: 2rem;
          }
        `}</style>

        {/* LOGO PANEL: Ocean-inspired, subject-grounded background with India Map */}
        <div className="logo-panel-bg py-16 px-8">
          {/* India Map Background SVG with Fishing Ports + Live ARGO Floats */}
          <svg className="india-map-bg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="seaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            
            {/* Ocean fill */}
            <rect width="1200" height="600" fill="url(#seaGradient)" />
            
            {/* India Coastline - Eastern side (Bay of Bengal) */}
            <path d="M 720 40 Q 760 60 770 100 Q 785 150 795 200 Q 805 250 815 300 Q 820 350 825 400 Q 830 450 835 500 Q 838 550 840 600" 
                  stroke="#0c4a6e" strokeWidth="4" fill="none" strokeLinecap="round" />
            
            {/* India Coastline - Western side (Arabian Sea) */}
            <path d="M 350 80 Q 330 120 320 180 Q 310 240 300 300 Q 290 360 280 420 Q 270 480 260 540 Q 255 570 250 600" 
                  stroke="#0c4a6e" strokeWidth="4" fill="none" strokeLinecap="round" />
            
            {/* Bay of Bengal Zone */}
            <circle cx="820" cy="300" r="140" fill="none" stroke="#0369a1" strokeWidth="2" strokeDasharray="8 4" opacity="0.35" />
            <text x="820" y="310" textAnchor="middle" fontSize="18" fontWeight="700" fill="#0369a1" opacity="0.6">
              Bay of Bengal
            </text>
            
            {/* Arabian Sea Zone */}
            <circle cx="270" cy="320" r="150" fill="none" stroke="#0369a1" strokeWidth="2" strokeDasharray="8 4" opacity="0.35" />
            <text x="270" y="330" textAnchor="middle" fontSize="18" fontWeight="700" fill="#0369a1" opacity="0.6">
              Arabian Sea
            </text>
            
            {/* === MAJOR FISHING PORTS (Green) === */}
            
            {/* Kochi (Kerala) */}
            <circle cx="380" cy="480" r="10" fill="#22c55e" opacity="0.85" />
            <circle cx="380" cy="480" r="20" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.3" />
            <text x="380" y="515" textAnchor="middle" fontSize="12" fontWeight="600" fill="#059669">Kochi</text>
            
            {/* Thiruvananthapuram (Kerala) */}
            <circle cx="360" cy="550" r="9" fill="#22c55e" opacity="0.8" />
            <text x="360" y="580" textAnchor="middle" fontSize="11" fontWeight="600" fill="#059669">TVL</text>
            
            {/* Mangalore (Karnataka) */}
            <circle cx="410" cy="400" r="9" fill="#22c55e" opacity="0.8" />
            <text x="410" y="430" textAnchor="middle" fontSize="11" fontWeight="600" fill="#059669">Mangalore</text>
            
            {/* Mumbai (Maharashtra) */}
            <circle cx="290" cy="200" r="11" fill="#22c55e" opacity="0.85" />
            <circle cx="290" cy="200" r="21" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.3" />
            <text x="290" y="235" textAnchor="middle" fontSize="12" fontWeight="600" fill="#059669">Mumbai</text>
            
            {/* Veraval (Gujarat) */}
            <circle cx="250" cy="140" r="8" fill="#22c55e" opacity="0.8" />
            <text x="250" y="170" textAnchor="middle" fontSize="11" fontWeight="600" fill="#059669">Veraval</text>
            
            {/* Kakinada (Andhra Pradesh) - Major Shrimp Exporter */}
            <circle cx="920" cy="300" r="11" fill="#22c55e" opacity="0.85" />
            <circle cx="920" cy="300" r="21" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.3" />
            <text x="920" y="335" textAnchor="middle" fontSize="12" fontWeight="600" fill="#059669">Kakinada</text>
            
            {/* Chennai (Tamil Nadu) */}
            <circle cx="880" cy="420" r="10" fill="#22c55e" opacity="0.85" />
            <circle cx="880" cy="420" r="20" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.3" />
            <text x="880" y="455" textAnchor="middle" fontSize="12" fontWeight="600" fill="#059669">Chennai</text>
            
            {/* Cochin (Smaller ports cluster) */}
            <circle cx="360" cy="440" r="7" fill="#22c55e" opacity="0.75" />
            <text x="360" y="465" textAnchor="middle" fontSize="10" fontWeight="500" fill="#059669">Cochin</text>
            
            {/* === LIVE ARGO FLOATS (Cyan) - Aug 1-15, 2026 === */}
            
            {/* ARGO Float 1 - Arabian Sea North */}
            <circle cx="420" cy="150" r="14" fill="#06b6d4" opacity="0.9" />
            <circle cx="420" cy="150" r="28" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.4" />
            <text x="420" y="195" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0369a1">ARGO-1</text>
            <text x="420" y="210" textAnchor="middle" fontSize="9" fill="#0369a1" opacity="0.7">Live</text>
            
            {/* ARGO Float 2 - Arabian Sea Central */}
            <circle cx="480" cy="280" r="13" fill="#06b6d4" opacity="0.85" />
            <circle cx="480" cy="280" r="26" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.35" />
            <text x="480" y="320" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0369a1">ARGO-2</text>
            
            {/* ARGO Float 3 - Bay of Bengal North */}
            <circle cx="880" cy="120" r="13" fill="#06b6d4" opacity="0.85" />
            <circle cx="880" cy="120" r="26" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.35" />
            <text x="880" y="160" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0369a1">ARGO-3</text>
            
            {/* ARGO Float 4 - Bay of Bengal Central */}
            <circle cx="820" cy="260" r="12" fill="#06b6d4" opacity="0.8" />
            <circle cx="820" cy="260" r="24" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.3" />
            <text x="820" y="295" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0369a1">ARGO-4</text>
            
            {/* ARGO Float 5 - Bay of Bengal South */}
            <circle cx="900" cy="380" r="12" fill="#06b6d4" opacity="0.8" />
            <circle cx="900" cy="380" r="24" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.3" />
            <text x="900" y="415" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0369a1">ARGO-5</text>
            
            {/* ARGO Float 6 - Arabian Sea South */}
            <circle cx="350" cy="420" r="11" fill="#06b6d4" opacity="0.75" />
            <circle cx="350" cy="420" r="22" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.25" />
            <text x="350" y="450" textAnchor="middle" fontSize="10" fontWeight="600" fill="#0369a1">ARGO-6</text>
            
            {/* LIVE Data Timestamp + Explanation */}
            <rect x="20" y="510" width="280" height="80" rx="6" fill="white" opacity="0.95" stroke="#0369a1" strokeWidth="2" />
            <text x="35" y="530" fontSize="13" fontWeight="700" fill="#0369a1">📡 Live ARGO Data: Aug 1–15, 2026</text>
            <text x="35" y="575" fontSize="9" fill="#475569">• 12 active floats from Argovis API</text>
            
            {/* Legend */}
            <g>
              <circle cx="990" cy="530" r="8" fill="#06b6d4" opacity="0.85" />
              <text x="1010" y="535" fontSize="12" fontWeight="600" fill="#0369a1">ARGO Floats</text>
              
              <circle cx="990" cy="565" r="8" fill="#22c55e" opacity="0.85" />
              <text x="1010" y="570" fontSize="12" fontWeight="600" fill="#059669">Major Ports</text>
            </g>
          </svg>
          
          <div className="logo-panel-content max-w-7xl mx-auto relative">
            {/* Tooltip Display */}
            {hoveredMarker && (
              <div 
                className="fixed z-50"
                style={{ 
                  top: hoveredMarker.y + 20,
                  left: hoveredMarker.x + 20,
                  pointerEvents: 'none'
                }}
              >
                <Tooltip type={hoveredMarker.type} data={hoveredMarker.data} />
              </div>
            )}

            {/* Interactive Hover Overlay - Positioned ARGO Floats & Fishing Ports */}
            <div className="absolute inset-0 pointer-events-none">
              {/* ARGO-1: Arabian Sea North - FIXED */}
              <div 
                className="absolute w-14 h-14 rounded-full pointer-events-auto cursor-pointer hover:bg-cyan-200 hover:opacity-30 transition"
                style={{ left: '34%', top: '18%' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredMarker({
                    type: 'argo',
                    data: argoFloatsData[0],
                    x: rect.left,
                    y: rect.top
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                title="ARGO-1: Arabian Sea North"
              />
              
              {/* ARGO-2: Arabian Sea Central - FIXED */}
              <div 
                className="absolute w-14 h-14 rounded-full pointer-events-auto cursor-pointer hover:bg-cyan-200 hover:opacity-30 transition"
                style={{ left: '40%', top: '43%' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredMarker({
                    type: 'argo',
                    data: argoFloatsData[1],
                    x: rect.left,
                    y: rect.top
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                title="ARGO-2: Arabian Sea Central"
              />

              {/* ARGO-3: Bay of Bengal North - FIXED */}
              <div 
                className="absolute w-14 h-14 rounded-full pointer-events-auto cursor-pointer hover:bg-cyan-200 hover:opacity-30 transition"
                style={{ left: '73%', top: '15%' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredMarker({
                    type: 'argo',
                    data: argoFloatsData[2],
                    x: rect.left,
                    y: rect.top
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                title="ARGO-3: Bay of Bengal North"
              />

              {/* ARGO-4: Bay of Bengal Central */}
              <div 
                className="absolute w-14 h-14 rounded-full pointer-events-auto cursor-pointer hover:bg-cyan-200 hover:opacity-30 transition"
                style={{ left: '68%', top: '42%' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredMarker({
                    type: 'argo',
                    data: argoFloatsData[3],
                    x: rect.left,
                    y: rect.top
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                title="ARGO-4: Bay of Bengal Central"
              />

              {/* ARGO-5: Bay of Bengal South */}
              <div 
                className="absolute w-14 h-14 rounded-full pointer-events-auto cursor-pointer hover:bg-cyan-200 hover:opacity-30 transition"
                style={{ left: '75%', top: '63%' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredMarker({
                    type: 'argo',
                    data: argoFloatsData[4],
                    x: rect.left,
                    y: rect.top
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                title="ARGO-5: Bay of Bengal South"
              />

              {/* ARGO-6: Arabian Sea South */}
              <div 
                className="absolute w-14 h-14 rounded-full pointer-events-auto cursor-pointer hover:bg-cyan-200 hover:opacity-30 transition"
                style={{ left: '29%', top: '70%' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredMarker({
                    type: 'argo',
                    data: argoFloatsData[5],
                    x: rect.left,
                    y: rect.top
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                title="ARGO-6: Arabian Sea South"
              />

              {/* Fishing Port - Kochi (Kerala) - FIXED */}
              <div 
                className="absolute w-12 h-12 rounded-full pointer-events-auto cursor-pointer hover:bg-green-200 hover:opacity-30 transition"
                style={{ left: '31%', top: '80%' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredMarker({
                    type: 'port',
                    data: portsData[0],
                    x: rect.left,
                    y: rect.top
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                title="Kochi Port"
              />

              {/* Fishing Port - Veraval (Gujarat) - ADJUSTED POSITION */}
              <div 
                className="absolute w-12 h-12 rounded-full pointer-events-auto cursor-pointer hover:bg-green-200 hover:opacity-30 transition"
                style={{ left: '20%', top: '15%' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredMarker({
                    type: 'port',
                    data: portsData[6],
                    x: rect.left,
                    y: rect.top
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                title="Veraval Port - Gujarat"
              />

              {/* Fishing Port - Mumbai (Maharashtra) - ADJUSTED POSITION */}
              <div 
                className="absolute w-12 h-12 rounded-full pointer-events-auto cursor-pointer hover:bg-green-200 hover:opacity-30 transition"
                style={{ left: '24%', top: '28%' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredMarker({
                    type: 'port',
                    data: portsData[1],
                    x: rect.left,
                    y: rect.top
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                title="Mumbai Port - Maharashtra"
              />
              <div 
                className="absolute w-12 h-12 rounded-full pointer-events-auto cursor-pointer hover:bg-green-200 hover:opacity-30 transition"
                style={{ left: '78%', top: '50%' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredMarker({
                    type: 'port',
                    data: portsData[2],
                    x: rect.left,
                    y: rect.top
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                title="Kakinada Port - Andhra Pradesh (Major Shrimp)"
              />

              {/* Fishing Port - Visakhapatnam (Andhra Pradesh) - REPLACED with Kakinada */}
              {/* Removed - Kakinada is now the primary AP shrimp port */}

              {/* Fishing Port - Chennai (Tamil Nadu) */}
              <div 
                className="absolute w-12 h-12 rounded-full pointer-events-auto cursor-pointer hover:bg-green-200 hover:opacity-30 transition"
                style={{ left: '73%', top: '70%' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredMarker({
                    type: 'port',
                    data: portsData[3],
                    x: rect.left,
                    y: rect.top
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                title="Chennai Port"
              />

              {/* Fishing Port - Thiruvananthapuram (TVL) */}
              <div 
                className="absolute w-12 h-12 rounded-full pointer-events-auto cursor-pointer hover:bg-green-200 hover:opacity-30 transition"
                style={{ left: '30%', top: '92%' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredMarker({
                    type: 'port',
                    data: portsData[4],
                    x: rect.left,
                    y: rect.top
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                title="Thiruvananthapuram (TVL) Port"
              />

              {/* Fishing Port - Mangalore (Karnataka) */}
              <div 
                className="absolute w-12 h-12 rounded-full pointer-events-auto cursor-pointer hover:bg-green-200 hover:opacity-30 transition"
                style={{ left: '35%', top: '66%' }}
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setHoveredMarker({
                    type: 'port',
                    data: portsData[5],
                    x: rect.left,
                    y: rect.top
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                title="Mangalore Port"
              />
            </div>
            {/* TWO-COLUMN GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* LEFT: Data Sources */}
              <div className="section-left">
                <div className="mb-8">
                  <div className="panel-label">Real-time data</div>
                  <h3 className="panel-title">Trusted Sources</h3>
                  <p className="panel-subtitle">
                    Ocean monitoring, stock assessments, and regulatory data from India's leading marine authorities
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  {dataSources.map((org, idx) => renderAnimatedLogoCard(org, idx, 'float'))}
                </div>
              </div>

              {/* RIGHT: Compliance Standards */}
              <div className="section-right">
                <div className="mb-8">
                  <div className="panel-label">Validated globally</div>
                  <h3 className="panel-title">Export Standards</h3>
                  <p className="panel-subtitle">
                    Compliance rules from major seafood importers: USA, UK, EU, and Australia
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  {complianceRegulators.map((org, idx) => renderAnimatedLogoCard(org, idx, 'bounce'))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  // ========== RENDER GAUGE ==========
  const renderScoreGauge = (score) => {
    let gaugeColor = '#d32f2f';
    if (score >= 70) gaugeColor = '#4caf50';
    else if (score >= 50) gaugeColor = '#ff9800';

    return (
      <div className="flex flex-col items-center gap-4">
        <svg width="150" height="150" viewBox="0 0 150 150" className="transform -rotate-90">
          <circle cx="75" cy="75" r="60" fill="none" stroke="#e0e0e0" strokeWidth="8" />
          <circle
            cx="75"
            cy="75"
            r="60"
            fill="none"
            stroke={gaugeColor}
            strokeWidth="8"
            strokeDasharray={`${(score / 100) * 376.99} 376.99`}
            strokeLinecap="round"
            style={{ transition: 'stroke-dasharray 0.3s ease' }}
          />
        </svg>
        <div className="text-center">
          <div className="text-5xl font-bold" style={{ color: gaugeColor }}>
            {score}
          </div>
          <div className="text-sm text-gray-600">/ 100</div>
        </div>
      </div>
    );
  };

  // ========== RENDER PILLARS ==========
  const renderPillars = (breakdown) => {
    const pillars = [
      { key: 'iuu', name: 'IUU Compliance', maxPoints: 25, icon: '🚢' },
      { key: 'rcmc', name: 'MPEDA RCMC', maxPoints: 25, icon: '📋' },
      { key: 'traceability', name: 'Traceability', maxPoints: 25, icon: '🔗' },
      { key: 'monsoon', name: 'Monsoon Ban', maxPoints: 15, icon: '🌧️' },
      { key: 'market', name: 'Market Compliance', maxPoints: 10, icon: '🌍' }
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {pillars.map(pillar => {
          const data = breakdown[pillar.key];

          let score = 0;
          let status = 'Pending';

          if (data) {
            if (typeof data === 'object') {
              score = data.score || data.points || 0;
              status = data.status || data.reason || data.result || 'Pending';
            } else if (typeof data === 'number') {
              score = data;
            }
          }

          const percentage = (score / pillar.maxPoints) * 100;
          const statusColor =
            status === 'PASS' ? 'text-green-600' :
            status === 'FAIL' ? 'text-red-600' :
            'text-gray-600';

          return (
            <div key={pillar.key} className="bg-white border rounded-lg p-4">
              <div className="text-2xl text-center mb-2">{pillar.icon}</div>
              <div className="text-xs font-semibold text-gray-700 text-center mb-2">
                {pillar.name}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
              <div className="text-center text-sm font-bold">
                {score}/{pillar.maxPoints}
              </div>
              <div className={`text-xs text-center mt-1 font-semibold ${statusColor}`}>
                {status}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // ========== RENDER RED FLAGS ==========
  const renderRedFlags = (flags) => {
    if (!flags || flags.length === 0) {
      return (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex gap-3">
          <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
          <div>
            <div className="font-semibold text-green-800">No Critical Issues</div>
            <div className="text-sm text-green-700">All compliance checks passed.</div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-3">
        {flags.map((flag, idx) => (
          <div
            key={idx}
            className={`border rounded-lg p-4 flex gap-3 ${
              flag.severity === 'CRITICAL'
                ? 'bg-red-50 border-red-200'
                : 'bg-yellow-50 border-yellow-200'
            }`}
          >
            <AlertCircle
              className={flag.severity === 'CRITICAL' ? 'text-red-600' : 'text-yellow-600'}
              size={20}
              style={{ flexShrink: 0 }}
            />
            <div className="flex-1">
              <div className={`font-semibold ${flag.severity === 'CRITICAL' ? 'text-red-800' : 'text-yellow-800'}`}>
                [{flag.severity}] {flag.pillar}
              </div>
              <div className={`text-sm mt-1 ${flag.severity === 'CRITICAL' ? 'text-red-700' : 'text-yellow-700'}`}>
                {flag.issue}
              </div>
              <div className="text-xs text-gray-600 mt-2">
                <strong>Action:</strong> {flag.action}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // ========== MAIN RENDER ==========
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-6 px-8 border-b border-indigo-200">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-1">🐟 SustainChain</h1>
          <p className="text-lg text-gray-700">Export Safety Score Calculator</p>
          <p className="text-xs text-gray-600 mt-1">
            Powered by CMFRI (2025), MPEDA (2026), Argovis API
          </p>
        </div>
      </div>



      {/* ENHANCED LOGO SECTIONS */}
      {renderSideBySideLogoSections()}

      {/* MAIN CONTENT: FORM + RESULTS */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ========== LEFT: FORM ========== */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Export Details</h2>

                {/* Demo Scenarios */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Test Scenarios
                  </label>
                  <select
                    onChange={(e) => {
                      const scenario = demoScenarios[parseInt(e.target.value)];
                      if (scenario) loadDemoScenario(scenario);
                    }}
                    className="w-full px-3 py-2 border rounded-lg bg-blue-50 text-sm cursor-pointer"
                    defaultValue=""
                  >
                    <option value="">Load demo scenario...</option>
                    {demoScenarios.map((s, i) => (
                      <option key={i} value={i}>{s.name}</option>
                    ))}
                  </select>
                </div>

                {/* Vessel Name */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Vessel Name
                  </label>
                  <input
                    type="text"
                    value={formData.vesselName}
                    onChange={(e) => handleInputChange('vesselName', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="e.g., Oceanic Exports Ltd"
                  />
                </div>

                {/* RCMC Dates */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      RCMC Issue Date
                    </label>
                    <input
                      type="date"
                      value={formData.rcmcIssueDate}
                      onChange={(e) => handleInputChange('rcmcIssueDate', e.target.value)}
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      RCMC Expiry Date
                    </label>
                    <input
                      type="date"
                      value={formData.rcmcExpiryDate}
                      onChange={(e) => handleInputChange('rcmcExpiryDate', e.target.value)}
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  </div>
                </div>

                {/* Catch Date */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Catch Date
                  </label>
                  <input
                    type="date"
                    value={formData.catchDate}
                    onChange={(e) => handleInputChange('catchDate', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>

                {/* Region */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Region</label>
                  <select
                    value={formData.region}
                    onChange={(e) => handleInputChange('region', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    <option value="arabian_sea">Arabian Sea</option>
                    <option value="bay_of_bengal">Bay of Bengal</option>
                  </select>
                </div>

                {/* Destination */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Destination Country
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => handleInputChange('destination', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    <option value="eu">🇪🇺 EU</option>
                    <option value="usa">🇺🇸 USA</option>
                    <option value="uk">🇬🇧 UK</option>
                    <option value="australia">🇦🇺 Australia</option>
                  </select>
                </div>

                {/* Documents */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Required Documents
                  </label>
                  <div className="space-y-2">
                    {Object.keys(formData.documents).map(doc => (
                      <label key={doc} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.documents[doc]}
                          onChange={() => handleDocumentToggle(doc)}
                          className="rounded"
                        />
                        <span className="text-sm text-gray-700">
                          {doc.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateScore}
                  disabled={loading}
                  className={`w-full py-3 rounded-lg font-bold text-white transition ${
                    loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  {loading ? 'Calculating...' : 'Calculate Score'}
                </button>
              </div>
            </div>

            {/* ========== RIGHT: RESULTS ========== */}
            <div className="lg:col-span-2 space-y-6">
              {scoreResult ? (
                <>
                  {/* Score Display */}
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">Export Safety Score</h2>
                      <div
                        className={`px-4 py-2 rounded-full font-bold text-white ${
                          scoreResult.status === 'PROCEED'
                            ? 'bg-green-600'
                            : scoreResult.status === 'HOLD'
                            ? 'bg-yellow-600'
                            : 'bg-red-600'
                        }`}
                      >
                        {scoreResult.status}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {renderScoreGauge(scoreResult.finalScore)}

                      <div className="flex-1">
                        <p className="text-gray-700 mb-4">{scoreResult.statusMessage}</p>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                          <div className="text-sm font-semibold text-blue-900 mb-2">
                            95% Credible Interval
                          </div>
                          <div className="text-lg font-bold text-blue-600">
                            [{scoreResult.credibleInterval[0]}, {scoreResult.credibleInterval[1]}]
                          </div>
                        </div>

                        {/* ARGO API Source Indicator */}
                        <div className="bg-gray-50 rounded-lg p-3 mb-3 border-l-4 border-indigo-500">
                          <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                            {argoSource.includes('LIVE') ? (
                              <Cloud size={14} className="text-blue-500" />
                            ) : (
                              <Database size={14} className="text-orange-500" />
                            )}
                            <strong>ARGO Data Source:</strong>
                          </div>
                          <div className="text-sm font-semibold" style={{
                            color: argoSource.includes('LIVE') ? '#1976d2' : '#f57c00'
                          }}>
                            {argoSource}
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-600">
                            Compliance Data: <strong>{dataSource}</strong>
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            Timestamp: {new Date(scoreResult.timestamp).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 5 Pillars */}
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Compliance Breakdown</h3>
                    {renderPillars(scoreResult.breakdown)}
                  </div>

                  {/* Red Flags */}
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Critical Issues</h3>
                    {renderRedFlags(scoreResult.redFlags)}
                  </div>

                  {/* Recommendation */}
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Recommendation</h3>
                    <div className="bg-gray-50 rounded-lg p-4 whitespace-pre-line text-gray-700 text-sm">
                      {scoreResult.recommendation}
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                  <TrendingUp className="mx-auto text-gray-300 mb-4" size={48} />
                  <p className="text-gray-500 text-lg">
                    Enter export details and click "Calculate Score" to see results
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Or load a demo scenario from the left panel
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-white border-t border-gray-200 py-8 px-8">
        <div className="max-w-7xl mx-auto text-center text-xs text-gray-600">
          <p className="mb-2">
            <strong>SustainChain © 2026</strong> | Integrating data from 8 global authorities
          </p>
          <p>
            Data Sources: CMFRI • MPEDA • INCOIS • FAO | Compliance: FDA • FSA • EC • DAFF
          </p>
        </div>
      </div>
    </div>
  );
}