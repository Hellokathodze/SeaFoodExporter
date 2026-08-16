# 📖 SustainChain User Guide

**Export Safety Score Calculator for Sustainable Indian Fisheries**

**Version:** 1.0  
**Last Updated:** August 16, 2026  
**For:** MarisMind Team (SIH25040)

---

## 📋 Table of Contents

1. [What is SustainChain?](#what-is-sustainchain)
2. [Quick Start (5 Minutes)](#quick-start)
3. [Installation](#installation)
4. [How to Use the Platform](#how-to-use)
5. [Understanding Your Score](#understanding-scores)
6. [Test Scenarios](#test-scenarios)
7. [Interpreting Results](#interpreting-results)
8. [FAQ & Troubleshooting](#faq)
9. [Technical Details](#technical)

---

## 🎯 What is SustainChain?

### **The Problem It Solves**

```
BEFORE SustainChain:
  Exporter waits: 2-3 weeks for export approval
  Regulator reviews: 50+ documents manually
  Outcome: Uncertain, inconsistent decisions
  Risk: Fish spoils, money lost

AFTER SustainChain:
  Exporter gets: Export safety score in 30 seconds
  System checks: All compliance rules automatically
  Outcome: Clear PROCEED/HOLD/BLOCK decision
  Benefit: Fast, fair, data-driven
```

### **How It Works**

```
STEP 1: You enter export details
  ├─ Vessel name & registration
  ├─ Catch date & location
  ├─ Fish species & destination
  └─ Documentation status

        ↓↓↓

STEP 2: System analyzes using 5 pillars
  ├─ IUU Compliance (FAO blacklist check)
  ├─ MPEDA RCMC (vessel registration status)
  ├─ Catch Traceability (documentation check)
  ├─ Monsoon Ban Compliance (seasonal rules)
  └─ Market Compliance (destination-specific rules)

        ↓↓↓

STEP 3: You get export decision
  ├─ GREEN (PROCEED): Score ≥75 → Export approved
  ├─ YELLOW (HOLD): Score 50-74 → Manual review needed
  └─ RED (BLOCK): Score <50 → Export denied
```

---

## ⚡ Quick Start (5 Minutes)

### **Goal:** Get your first export score in 5 minutes

### **Step 1: Open the Platform**

```bash
# On your computer, open terminal/command prompt
cd C:\Users\[YOUR-NAME]\Desktop\SustainChain

# Start the application
npm run dev

# Open browser and go to:
http://localhost:5173
```

**You should see:**
```
🌊 SustainChain
Export Safety Score Calculator

[Export Details Form on left]     [Export Safety Score on right]
```

---

### **Step 2: Fill in Export Details**

**On the left panel, enter:**

```
Test Scenarios dropdown:
  → Select "Good Export (Expected: 82)"

This auto-fills sample data:
  ├─ Vessel Name: "Oceanic Exports Ltd"
  ├─ RCMC Issue Date: 15/08/2025
  ├─ RCMC Expiry Date: 14/10/2026
  ├─ Catch Date: 10/08/2026
  ├─ Region: Arabian Sea
  ├─ Destination Country: EU
  └─ Documents: Landing Cert, Health Cert, etc.
```

---

### **Step 3: Click "Calculate Score"**

```
Click blue button: "Calculate Score"

Wait: 2-3 seconds for calculation
```

---

### **Step 4: View Your Score**

**You should see:**

```
┌─────────────────────────────────────┐
│   Export Safety Score               │
│                                     │
│         ● 83 ●                     │
│        /       \                    │
│       /  GREEN  \                   │
│      |  PROCEED  |                  │
│       \          /                  │
│        \        /                   │
│         ● ● ● ●                    │
│                                     │
│   ✓ Safe to export                  │
│   95% Confidence [75, 91]           │
│                                     │
│   Data Source: ARGO API (Live)      │
│   Timestamp: 16/08/2026, 08:26:04   │
└─────────────────────────────────────┘

Compliance Breakdown:
  IUU Compliance:    ████████ 25/25 ✓
  MPEDA RCMC:        ████████ 15/25 ◆
  Traceability:      ████████ 20/25 ◆
  Monsoon Ban:       ████████ 15/15 ✓
  Market Rules:      ██████░░ 8/10  ◆
```

---

**Congratulations! You've got your first score!** ✅

Now let's understand what it means...

---

## 🔧 Installation

### **Prerequisites**

You need:
```
✅ Node.js (v16+)
   Download from: https://nodejs.org/

✅ Git
   Download from: https://git-scm.com/

✅ VS Code (optional, but recommended)
   Download from: https://code.visualstudio.com/
```

### **Setup Steps**

#### **Option A: Clone from GitHub (Recommended)**

```bash
# Step 1: Open terminal/command prompt

# Step 2: Navigate to Desktop
cd Desktop

# Step 3: Clone the repository
git clone https://github.com/YOUR-USERNAME/SeaFoodExporter.git

# Step 4: Enter the folder
cd SeaFoodExporter

# Step 5: Install dependencies
npm install

# Step 6: Start the application
npm run dev

# Step 7: Open browser
# Visit: http://localhost:5173
```

#### **Option B: Use Existing Project Folder**

```bash
# Step 1: Open terminal in project folder
# Right-click SustainChain folder → "Open in Terminal"

# Step 2: Install dependencies (if not done already)
npm install

# Step 3: Start application
npm run dev

# Step 4: View in browser
# http://localhost:5173
```

### **Verify Installation**

You should see:
```
✅ "VITE v4.X.X  ready in XXX ms"
✅ "➜  Local:   http://localhost:5173/"
✅ Browser shows SustainChain interface
```

If you see errors, check [Troubleshooting](#faq) section.

---

## 📱 How to Use the Platform

### **Main Interface Overview**

```
┌─────────────────────────────────────────────────────────┐
│  🌊 SustainChain - Export Safety Score Calculator      │
└─────────────────────────────────────────────────────────┘

┌──────────────────────────┬──────────────────────────────┐
│                          │                              │
│   EXPORT DETAILS         │   EXPORT SAFETY SCORE        │
│   (Left Panel)           │   (Right Panel)              │
│                          │                              │
│  ┌──────────────────┐   │  ┌──────────────────────┐    │
│  │ Test Scenarios   │   │  │ Score Gauge (83)     │    │
│  │ [Dropdown ▼]     │   │  │ ● GREEN PROCEED      │    │
│  │                  │   │  │ Confidence: 95%      │    │
│  │ Vessel Details:  │   │  │ [75, 91]             │    │
│  │ [Oceanic Exp]    │   │  │                      │    │
│  │ [Text field]     │   │  ├──────────────────────┤    │
│  │                  │   │  │ Compliance Breakdown │    │
│  │ RCMC Info:       │   │  │ IUU: 25/25 ✓         │    │
│  │ [15/08/2025]     │   │  │ RCMC: 15/25 ◆        │    │
│  │ [14/10/2026]     │   │  │ Trace: 20/25 ◆       │    │
│  │                  │   │  │ Monsoon: 15/15 ✓     │    │
│  │ Catch Details:   │   │  │ Market: 8/10 ◆       │    │
│  │ [10/08/2026]     │   │  │                      │    │
│  │ [Arabian Sea]    │   │  ├──────────────────────┤    │
│  │ [EU]             │   │  │ Critical Issues:     │    │
│  │                  │   │  │ ✓ None               │    │
│  │ Documents:       │   │  │                      │    │
│  │ ☑ Landing Cert   │   │  ├──────────────────────┤    │
│  │ ☑ Health Cert    │   │  │ Data Source:         │    │
│  │ ☑ Proc Facility  │   │  │ ARGO API (Live)      │    │
│  │ ☑ Vessel Reg     │   │  │ Time: 16/08/2026     │    │
│  │ ☑ Catch Origin   │   │  └──────────────────────┘    │
│  │                  │   │                              │
│  │ [Calculate ▶]    │   │                              │
│  └──────────────────┘   │                              │
│                          │                              │
└──────────────────────────┴──────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                   EVIDENCE BUNDLE                        │
│   Data Sources: 🐟 CMFRI | ⚖️ MPEDA | 📍 ARGO | 🌍 FAO  │
└──────────────────────────────────────────────────────────┘
```

### **Step-by-Step: Using the Platform**

#### **Section 1: Test Scenarios Selector**

```
WHAT TO DO:
  ├─ Click dropdown: "Test Scenarios"
  └─ Choose one:
     ├─ "Good Export (Expected: 82)"
     ├─ "IUU Blacklist (Expected: 0)"
     ├─ "Monsoon Ban (Expected: 0)"
     ├─ "Hold Status (Expected: 55)"
     └─ "Australia Export (Expected: 100)"

WHAT HAPPENS:
  Form auto-fills with sample data
  Simulates different real-world scenarios

WHY USE THIS:
  Quick testing without entering all fields manually
  Helps understand how system scores different cases
```

**Example:**
```
Select: "Good Export (Expected: 82)"

Form fills with:
  Vessel: Oceanic Exports Ltd ✓
  RCMC Valid: Yes (60 days remaining) ✓
  Catch Date: 10/08/2026 ✓
  Region: Arabian Sea ✓
  Destination: EU ✓
  Documents: 4/5 provided
  
Result: Score 83 (close to expected 82) ✓
```

---

#### **Section 2: Vessel Details**

```
FIELD 1: Vessel Name
  What: Your fishing vessel's registered name
  Example: "Oceanic Exports Ltd"
  Important: Must match FAO/MPEDA registration
  
FIELD 2: RCMC Issue Date
  What: When MPEDA issued the certificate
  Format: DD/MM/YYYY
  Example: 15/08/2025
  
FIELD 3: RCMC Expiry Date
  What: When certificate expires
  Format: DD/MM/YYYY
  Example: 14/10/2026
  
  ❓ WHY IT MATTERS:
    System calculates days until expiry
    ├─ >180 days remaining → Full score (25/25)
    ├─ 90-180 days → 20/25
    ├─ 30-90 days → 15/25
    ├─ <30 days → 10/25
    └─ Expired → 0/25 (AUTO BLOCK)
```

**Example:**
```
RCMC Issue:  15/08/2025
RCMC Expiry: 14/10/2026
Current:     16/08/2026

Days remaining: 59 days

Score calculation:
  59 days < 90 days
  → RCMC score = 15/25
  → Status: "Valid but renewal needed soon"
```

---

#### **Section 3: Catch Details**

```
FIELD 1: Catch Date
  What: When the fish was caught
  Format: DD/MM/YYYY
  Example: 10/08/2026
  
  ❓ WHY IT MATTERS:
    System checks if catch was during monsoon ban
    Monsoon ban dates:
    ├─ West Coast (Arabian Sea): Jun 1 - Jul 31
    ├─ East Coast (Bay of Bengal): Apr 15 - Jun 14
    └─ If catch during ban in that region:
       → Monsoon score = 0 (AUTO BLOCK)

FIELD 2: Region
  What: Where fish was caught
  Options:
    ├─ Arabian Sea (west coast)
    ├─ Bay of Bengal (east coast)
    └─ Equatorial
  
  ❓ WHY IT MATTERS:
    Different regions have different:
    ├─ Monsoon ban dates
    ├─ Fish species
    ├─ ARGO ocean data availability
    └─ Stock sustainability levels

FIELD 3: Destination Country
  What: Which country will receive this shipment
  Options:
    ├─ EU (uses CATCH system)
    ├─ USA (uses FDA/NOAA SIMP)
    ├─ UK (uses Fish Trace Ship)
    ├─ Australia (uses BICON)
    └─ Other
  
  ❓ WHY IT MATTERS:
    Each country has different compliance requirements
    System checks destination-specific rules
    ├─ EU needs CATCH certificate
    ├─ USA needs FDA prior notification
    ├─ UK needs FSA registration
    └─ Australia needs BICON approval
```

**Example:**
```
Catch Date:  10/08/2026
Region:      Arabian Sea
Destination: EU

System checks:
  ✓ Catch date (10/08) NOT in monsoon ban (Jun 1-Jul 31)
  → Monsoon score = 15/15 ✓
  
  ✓ Destination is EU
  → Must have CATCH certificate (compliance check)
  → Market score deducted if missing doc
```

---

#### **Section 4: Required Documents**

```
WHAT TO CHECK:
  ☐ Landing Certificate (proof fish landed legally)
  ☐ Health Certificate (food safety approval)
  ☐ Processing Facility Certificate (hygienic facility)
  ☐ Vessel Registration (vessel is registered)
  ☐ Catch Origin Document (origin verification)

HOW SCORING WORKS:
  Each document checked = +5 points to Traceability score
  
  Formula: Traceability Score = 25 - (5 × missing_docs)
  
  Examples:
    ✓ All 5 docs → 25 - 0 = 25/25 ✓
    ✓ 4 docs → 25 - 5 = 20/25
    ✓ 3 docs → 25 - 10 = 15/25
    ✗ <3 docs → AUTO BLOCK (red flag)

WHY IT MATTERS:
  Traceability = Can you prove where this fish came from?
  FAO, FDA, EU all require full documentation
  System automatically flags incomplete shipments
```

**Example:**
```
Documents provided:
  ☑ Landing Certificate
  ☑ Health Certificate
  ☑ Processing Facility Cert
  ☑ Vessel Registration
  ☐ Catch Origin Doc (missing)

Score calculation:
  4 docs provided
  25 - (5 × 1) = 20/25 Traceability score
  
  Status: "Good, but add origin document for full score"
```

---

### **Section 5: Calculate Score**

```
WHAT TO DO:
  Click blue button: "Calculate Score"

WHAT HAPPENS:
  1. System validates all fields (2 seconds)
  2. Runs through 5 scoring pillars (1 second)
  3. Calculates final score (1 second)
  4. Displays results (instant)

TOTAL TIME: 2-3 seconds
```

---

## 📊 Understanding Your Score

### **The 5 Scoring Pillars**

#### **Pillar 1: IUU Compliance (25 points)**

```
WHAT IT CHECKS:
  Is this vessel on the FAO IUU blacklist?

HOW IT SCORES:
  ✓ Not on blacklist → 25/25 (CLEAR)
  ✗ On blacklist → 0/25 (AUTO BLOCK - red flag)

WHY IT MATTERS:
  IUU = Illegal, Unreported, Unregulated fishing
  Exporting from IUU vessels is prohibited worldwide
  FAO maintains official blacklist

EXAMPLE:
  Vessel: "Illegal Trawler 1" (fictional)
  Result: Matched FAO blacklist
  Score: 0 (BLOCKED)
  Decision: Cannot export - vessel is illegal
```

---

#### **Pillar 2: MPEDA RCMC (25 points)**

```
WHAT IT CHECKS:
  Is the vessel's RCMC (MPEDA certificate) valid?
  How many days until expiry?

HOW IT SCORES:
  >180 days until expiry  → 25/25 (Fully valid)
  90-180 days            → 20/25 (Valid, plan renewal)
  30-90 days             → 15/25 (Valid, urgent renewal)
  <30 days               → 10/25 (Expires very soon)
  Expired                → 0/25 (AUTO BLOCK - red flag)

WHY IT MATTERS:
  RCMC = Your permission to fish + export
  MPEDA issues and tracks all Indian fishing vessels
  Expired certificate = Cannot legally fish/export

EXAMPLE:
  RCMC Expiry: 14/10/2026
  Current: 16/08/2026
  Days remaining: 59 days
  
  59 days falls in 30-90 range
  Score: 15/25
  Status: "Valid but renewal needed within 3 months"
```

---

#### **Pillar 3: Catch Traceability (25 points)**

```
WHAT IT CHECKS:
  Can you prove where this fish came from?
  Do you have complete documentation?

HOW IT SCORES:
  Formula: 25 - (5 × missing_documents)
  
  All docs      → 25/25
  1 missing     → 20/25
  2 missing     → 15/25
  3+ missing    → AUTO BLOCK - red flag
  
CRITICAL DOCS:
  1. Landing Certificate (proof of legal catch)
  2. Health Certificate (food safety)
  3. Processing Facility Cert (hygienic facility)
  4. Vessel Registration (boat ownership)
  5. Catch Origin Document (species/location verification)

WHY IT MATTERS:
  FAO, FDA, EU all require full traceability
  Can't prove origin? Export denied
  System ensures compliance automatically

EXAMPLE:
  Missing: Catch Origin Document
  Score: 25 - 5 = 20/25
  Recommendation: "Add origin doc to get 25/25"
```

---

#### **Pillar 4: Monsoon Ban Compliance (15 points)**

```
WHAT IT CHECKS:
  Is this catch from a date/region during monsoon ban?

MONSOON BAN DATES (INDIA):
  West Coast (Arabian Sea):
    ├─ Ban period: June 1 - July 31
    ├─ Breeding season protection
    └─ Protected species: Mackerel, Sardines
  
  East Coast (Bay of Bengal):
    ├─ Ban period: April 15 - June 14
    ├─ Breeding season protection
    └─ Protected species: Hilsa, Groupers

HOW IT SCORES:
  Catch OUTSIDE ban dates → 15/15 (Legal)
  Catch DURING ban dates → 0/15 (AUTO BLOCK - red flag)

WHY IT MATTERS:
  Fish breeding season = Cannot fish or export
  MPEDA strictly enforces this
  Violators face heavy penalties + license revocation

EXAMPLE:
  Catch Date: 10/08/2026 (August)
  Region: Arabian Sea
  
  August NOT in ban period (Jun 1 - Jul 31)
  Score: 15/15 ✓
  Status: "Legal - outside monsoon ban"
```

---

#### **Pillar 5: Market Compliance (10 points)**

```
WHAT IT CHECKS:
  Does your export meet destination country requirements?

DESTINATION REQUIREMENTS:
  
  EU (CATCH System):
    ✓ Needs: Catch certificate
    ✓ Needs: IUU verification
    ✓ Needs: Full traceability
    × Missing any? Score -2 pts
  
  USA (FDA/NOAA):
    ✓ Needs: Prior FDA notification (72h)
    ✓ Needs: Health certificate
    ✓ Needs: Antibiotic testing records
    × Missing any? Score -2 pts
  
  UK (Fish Trace Ship):
    ✓ Needs: FSA registration
    ✓ Needs: Vessel approval
    ✓ Needs: Frozen transport records
    × Missing any? Score -2 pts
  
  Australia (BICON):
    ✓ Needs: BICON permit
    ✓ Needs: Health certificate
    ✓ Needs: Cold chain verification
    × Missing any? Score -2 pts

HOW IT SCORES:
  Base score: 10/10
  Each missing requirement: -2 pts
  
  All docs    → 10/10
  1 missing   → 8/10
  2 missing   → 6/10
  3 missing   → 4/10
  4+ missing  → 2/10

WHY IT MATTERS:
  Each country has different import rules
  Failing to comply = Shipment rejected
  System checks your destination rules

EXAMPLE:
  Destination: EU
  Missing: CATCH certificate
  Score: 10 - 2 = 8/10
  Recommendation: "Obtain CATCH certificate before export"
```

---

### **Final Score Calculation**

```
FORMULA:
  Final Score = IUU + RCMC + Trace + Monsoon + Market
              = 25 + 15 + 20 + 15 + 8
              = 83/100

DECISION BANDS:
  
  GREEN (PROCEED):  Score ≥ 75
    ✓ Safe to export
    ✓ Meets all requirements
    ✓ Expected smooth customs clearance
  
  YELLOW (HOLD):    Score 50-74
    ⚠ Manual review recommended
    ⚠ Some documents missing
    ⚠ Slight compliance gaps
    ⚠ Consider fixing before export
  
  RED (BLOCK):      Score < 50
    ✗ Export prohibited
    ✗ Critical compliance failures
    ✗ Cannot proceed without fixes
    ✗ Contact MPEDA regulator

CONFIDENCE INTERVAL:
  95% Credible Interval: [75, 91]
  
  Meaning:
    "We're 95% confident your actual score
     is between 75 and 91, given available data"
```

---

## 🧪 Test Scenarios

### **Why Test Scenarios Matter**

```
These scenarios help you understand how the system scores
different real-world situations. Each has a "name",
"expected score", and "why it gets that score".
```

---

### **Scenario 1: Good Export**

```
NAME:           "Good Export (Expected: 82)"
REAL SCORE:     83 (close to expected!)
STATUS:         ✓ GREEN / PROCEED

VESSEL DATA:
  ├─ Name: Oceanic Exports Ltd
  ├─ RCMC Issue: 15/08/2025
  ├─ RCMC Expiry: 14/10/2026 (59 days remaining)
  └─ Status: VALID, renewal needed in 2 months

CATCH DATA:
  ├─ Date: 10/08/2026
  ├─ Region: Arabian Sea
  ├─ Destination: EU
  └─ Status: LEGAL (outside monsoon ban)

DOCUMENTATION:
  ☑ Landing Certificate
  ☑ Health Certificate
  ☑ Processing Facility Cert
  ☑ Vessel Registration
  ☐ Catch Origin Document (MISSING - 1 doc)

SCORING BREAKDOWN:
  ├─ IUU Compliance:    25/25 ✓ (Not blacklisted)
  ├─ RCMC:             15/25 ◆ (59 days remaining, need renewal soon)
  ├─ Traceability:     20/25 ◆ (4/5 docs, missing 1)
  ├─ Monsoon Ban:      15/15 ✓ (Catch outside ban period)
  └─ Market Rules:      8/10 ◆ (EU destination, 1 doc missing)
  
  TOTAL: 25+15+20+15+8 = 83/100

INTERPRETATION:
  ✓ PROCEED - This is a good export
  ✓ Meets most requirements
  ⚠ Consider getting Catch Origin Document for 90+ score
  ✓ Expected customs approval

LESSON:
  Real-world exports have minor gaps.
  System still approves if score ≥75.
  Quality exporters aim for 85+.
```

---

### **Scenario 2: IUU Blacklist**

```
NAME:           "IUU Blacklist (Expected: 0)"
REAL SCORE:     0
STATUS:         ✗ RED / BLOCKED

VESSEL DATA:
  ├─ Name: Illegal Trawler 1 (fictional)
  ├─ FAO Status: BLACKLISTED
  └─ Reason: Known IUU operator

SCORING BREAKDOWN:
  ├─ IUU Compliance: 0/25 ✗ AUTO BLOCK
  │  └─ Vessel is on FAO illegal fishing blacklist
  │  └─ System immediately blocks export
  ├─ RCMC: (not evaluated)
  ├─ Traceability: (not evaluated)
  ├─ Monsoon: (not evaluated)
  └─ Market: (not evaluated)
  
  TOTAL: 0/100 (early termination)

CRITICAL ISSUE:
  ✗ VESSEL IS ILLEGAL - EXPORT PROHIBITED

WHAT THIS MEANS:
  This vessel has engaged in IUU fishing
  No amount of documentation saves this
  Export is automatically denied
  Vessel should be reported to authorities

LESSON:
  IUU is a HARD BLOCK - no exceptions
  System prioritizes this check first
  Judges the vessel, not the catch
```

---

### **Scenario 3: Monsoon Ban**

```
NAME:           "Monsoon Ban (Expected: 0)"
REAL SCORE:     0
STATUS:         ✗ RED / BLOCKED

CATCH DATA:
  ├─ Date: 15/06/2026 (June 15)
  ├─ Region: Arabian Sea
  └─ Monsoon Ban: June 1 - July 31 (BANNED PERIOD!)

SCORING BREAKDOWN:
  ├─ IUU Compliance:    25/25 ✓
  ├─ RCMC:             15/25 ◆
  ├─ Traceability:     25/25 ✓
  ├─ Monsoon Ban:       0/15 ✗ AUTO BLOCK
  │  └─ Catch during monsoon ban period
  │  └─ Breeding season protection active
  └─ Market: (not evaluated)
  
  TOTAL: 0/100 (due to monsoon violation)

CRITICAL ISSUE:
  ✗ CATCH DURING MONSOON BAN - EXPORT PROHIBITED

WHAT THIS MEANS:
  Fish caught during monsoon season cannot be exported
  This protects breeding fish populations
  Violation carries heavy penalties
  Export is automatically denied

MONSOON BAN REMINDER:
  West Coast (Arabian Sea): June 1 - July 31 = BANNED
  East Coast (Bay of Bengal): April 15 - June 14 = BANNED
  Outside these dates: LEGAL

LESSON:
  Monsoon is a HARD BLOCK - no exceptions
  Timing matters: Even if everything else is perfect
  Export is blocked during breeding season
```

---

### **Scenario 4: Hold Status**

```
NAME:           "Hold Status (Expected: 55)"
REAL SCORE:     57
STATUS:         ⚠ YELLOW / HOLD

VESSEL DATA:
  ├─ Name: Coastal Fisheries Inc
  ├─ RCMC Expiry: 01/09/2026
  ├─ Days remaining: 16 days (URGENT - less than 30 days!)
  └─ Status: Valid but expires very soon

CATCH DATA:
  ├─ Date: 15/08/2026
  ├─ Region: Bay of Bengal
  ├─ Destination: USA
  └─ Status: Legal

DOCUMENTATION:
  ☑ Landing Certificate
  ☑ Health Certificate
  ☐ Processing Facility Cert (MISSING)
  ☐ Vessel Registration (MISSING)
  ☑ Catch Origin Document
  └─ Only 3/5 docs provided = 2 MISSING

COMPLIANCE GAPS:
  ├─ Missing 2 traceability documents
  ├─ RCMC expires in <30 days (needs renewal)
  └─ Multiple compliance issues

SCORING BREAKDOWN:
  ├─ IUU Compliance:    25/25 ✓
  ├─ RCMC:             10/25 ✗ (16 days remaining, <30 day threshold)
  ├─ Traceability:      15/25 ✗ (3/5 docs, missing 2)
  ├─ Monsoon Ban:       15/15 ✓
  └─ Market Rules:      2/10  ✗ (USA destination, many gaps)
  
  TOTAL: 25+10+15+15+2 = 67/100

INTERPRETATION:
  ⚠ HOLD - Manual review recommended
  
  Issues to address:
    1. URGENT: Renew RCMC within 16 days
    2. Obtain Processing Facility Certificate
    3. Obtain Vessel Registration
    4. USA compliance: May need additional docs
  
  Path to PROCEED:
    ├─ Fix RCMC immediately (mandatory)
    ├─ Add 2 missing documents
    └─ Re-score → Expected: 85+

LESSON:
  Not all exports are clear GO/NO-GO
  HOLD status = You can proceed, but risks exist
  Use this as signal to fix gaps before exporting
```

---

### **Scenario 5: Australia Export**

```
NAME:           "Australia Export (Expected: 100)"
REAL SCORE:     100
STATUS:         ✓ GREEN / PROCEED (Perfect!)

VESSEL DATA:
  ├─ Name: Premium Seafood Exports
  ├─ RCMC Issue: 01/01/2025
  ├─ RCMC Expiry: 31/12/2026
  ├─ Days remaining: 138 days (healthy!)
  └─ Status: PERFECT COMPLIANCE

CATCH DATA:
  ├─ Date: 10/08/2026
  ├─ Region: Equatorial
  └─ Status: Legal

DOCUMENTATION:
  ☑ Landing Certificate
  ☑ Health Certificate
  ☑ Processing Facility Cert
  ☑ Vessel Registration
  ☑ Catch Origin Document
  └─ ALL 5 DOCS PROVIDED!

DESTINATION COMPLIANCE:
  ├─ Destination: Australia (BICON system)
  ├─ All BICON requirements met
  └─ Status: Perfect

SCORING BREAKDOWN:
  ├─ IUU Compliance:    25/25 ✓ Perfect
  ├─ RCMC:             25/25 ✓ Perfect (138 days)
  ├─ Traceability:     25/25 ✓ Perfect (all 5 docs)
  ├─ Monsoon Ban:      15/15 ✓ Perfect (outside ban)
  └─ Market Rules:     10/10 ✓ Perfect (AU compliant)
  
  TOTAL: 25+25+25+15+10 = 100/100

INTERPRETATION:
  ✓ PROCEED - This is a PERFECT export
  ✓ Exceeds all requirements
  ✓ Expected fast customs clearance
  ✓ High probability of approval
  ✓ Premium exporter standards met

LESSON:
  Best exporters score 95-100
  They have:
    ├─ Fresh RCMC (>6 months remaining)
    ├─ All documentation
    ├─ Legal catch timing
    └─ Destination compliance
  
  This is your target!
```

---

## 🎯 Interpreting Results

### **How to Read Your Score Card**

```
┌─────────────────────────────────────────────┐
│      EXPORT SAFETY SCORE                   │
│                                             │
│          Score: 83                         │
│          Status: GREEN / PROCEED           │
│          Confidence: 95%                   │
│          Range: [75, 91]                   │
│                                             │
│      ✓ Safe to export                      │
│      Expected: Customs approval            │
│                                             │
│      Data Source: ARGO API (Live)          │
│      Last Updated: 16/08/2026, 08:26      │
└─────────────────────────────────────────────┘
```

**What Each Line Means:**

| Line | Meaning | Example |
|------|---------|---------|
| **Score** | Overall safety score (0-100) | 83 = Good |
| **Status** | Export recommendation | GREEN = Proceed |
| **Confidence** | Certainty level (%) | 95% = Very confident |
| **Range** | Likely actual score band | [75, 91] = Safe margin |
| **Data Source** | Where ocean data came from | ARGO API = Live floats |
| **Last Updated** | When ARGO data was collected | 2h ago = Fresh |

---

### **Decision Rules**

```
IF Score ≥ 75 (GREEN - PROCEED):
  ✓ System says: "Safe to export"
  ✓ Action: You can proceed with export
  ✓ Expected: Smooth customs clearance
  ✓ Next step: Prepare shipment documentation

IF Score 50-74 (YELLOW - HOLD):
  ⚠ System says: "Review recommended"
  ⚠ Action: Consider fixing compliance gaps
  ⚠ Risk: May face customs delays
  ⚠ Next step: Address issues & re-score

IF Score < 50 (RED - BLOCK):
  ✗ System says: "Do not export"
  ✗ Action: Cannot proceed without fixes
  ✗ Reason: Critical compliance failures
  ✗ Next step: Fix issues (RCMC, docs, etc.)
```

---

### **Common Score Patterns**

#### **Pattern 1: "All Green, One Gap"**

```
Score: 80-85
Status: PROCEED ✓

Example:
  ├─ Everything good
  ├─ Missing 1 document
  └─ Still approved because score ≥75

What to do:
  → Proceed with export
  → Consider fixing the gap for future exports (90+)
```

#### **Pattern 2: "Multiple Gaps"**

```
Score: 60-74
Status: HOLD ⚠

Example:
  ├─ RCMC expiring soon (renew urgently)
  ├─ Missing 2 documents
  ├─ Market compliance gap
  └─ But: No critical blocks

What to do:
  → Don't export yet
  → Fix gaps: 2-3 days work
  → Re-score → Should hit 85+
```

#### **Pattern 3: "Critical Block"**

```
Score: 0
Status: BLOCK ✗

Example:
  ├─ Vessel is on IUU blacklist, OR
  ├─ Catch date during monsoon ban, OR
  ├─ RCMC expired, OR
  ├─ Missing critical documents
  └─ Cannot proceed

What to do:
  → DO NOT export
  → Contact MPEDA for guidance
  → Fix root cause (may take weeks)
  → Resubmit when resolved
```

---

## ❓ FAQ & Troubleshooting

### **General Questions**

#### **Q1: What does "PROCEED" mean?**

```
A: It means the system recommends exporting.
   Score ≥75 = System thinks it's safe.
   
   But: Final decision is still YOURS
   Consider: Your risk tolerance, market timing, etc.
```

#### **Q2: Can I export with a "HOLD" score?**

```
A: Technically yes, but it's risky.
   
   With HOLD (50-74):
   ├─ Customs may delay inspection
   ├─ Documents may be scrutinized
   ├─ May be referred for manual review
   ├─ Compliance gap may trigger issues
   └─ Not recommended - fix gaps first
   
   Better: Fix gaps, get to GREEN (75+)
```

#### **Q3: What if I disagree with the score?**

```
A: The system uses official data:
   ├─ FAO IUU list (international standard)
   ├─ MPEDA records (government database)
   ├─ ARGO floats (real ocean sensors)
   ├─ Your own documentation (you provide)
   
   If you disagree:
   ├─ Check your input data (typo?)
   ├─ Verify RCMC dates (correct?)
   ├─ Confirm documents (all included?)
   └─ If still unsure: Contact MPEDA
```

#### **Q4: How often should I check my score?**

```
A: Before each export:
   ├─ RCMC expiry changes daily
   ├─ ARGO data updates every 2 hours
   ├─ Regulatory rules change seasonally
   └─ Your documentation changes per shipment
   
   Best practice:
   └─ Run 24 hours before exporting
```

---

### **Technical Troubleshooting**

#### **Problem: Application won't start**

```
ERROR: "Cannot find module"

SOLUTION:
  1. Make sure you're in the right folder
     cd C:\Users\[YOUR-NAME]\Desktop\SustainChain
  
  2. Install dependencies
     npm install
  
  3. Start again
     npm run dev
  
  4. Should see: "VITE v4.X ready in XXX ms"
```

#### **Problem: "localhost:5173 won't load"**

```
ERROR: "Cannot reach localhost"

SOLUTION:
  1. Check if application started in terminal
     You should see: "➜ Local: http://localhost:5173"
  
  2. Open browser to correct address
     NOT http://localhost:5000 (wrong port!)
     YES http://localhost:5173 (correct)
  
  3. If still broken:
     Ctrl+C in terminal (stop app)
     npm run dev (start again)
```

#### **Problem: ARGO data not loading**

```
ERROR: "ARGO data not available"

POSSIBLE REASONS:
  1. No internet connection
  2. ARGO API is temporarily down
  3. Browser blocking requests
  
SOLUTION:
  1. Check internet connection
     Try: ping google.com
  
  2. Hard refresh browser
     Ctrl+Shift+R (clear cache)
  
  3. Restart application
     Ctrl+C then npm run dev
  
  4. Use demo data
     App should have fallback data ready
```

#### **Problem: Scores don't make sense**

```
ERROR: "Score seems wrong"

COMMON CAUSES:
  1. Wrong RCMC expiry date (re-check format)
     ✗ 14-10-2026 (wrong format)
     ✓ 14/10/2026 (correct format)
  
  2. Missed a document checkbox
     → Make sure all 5 are checked if you have them
  
  3. Catch date during monsoon ban
     → Check monsoon dates (May-Jul for west coast)
  
SOLUTION:
  1. Review all fields carefully
  2. Cross-check with documentation
  3. Re-enter data if needed
  4. Re-click "Calculate Score"
```

---

### **When to Contact Support**

```
Contact your team lead if:
  ├─ Application won't start at all
  ├─ Persistent errors you can't fix
  ├─ Unexpected scores you disagree with
  ├─ ARGO data not loading (try 30 min later)
  └─ Questions about your specific export
  
Information to provide:
  ├─ Error message (screenshot)
  ├─ What you were doing
  ├─ Your test data
  ├─ Browser + OS (Windows/Mac)
  └─ Time when error occurred
```

---

## 💻 Technical Details

### **System Architecture**

```
┌─────────────────────────────────────────────────────────┐
│                  FRONTEND (React)                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Dashboard.jsx                                  │   │
│  │ ├─ Input Form (export details)                 │   │
│  │ ├─ Score Display (gauge + breakdown)           │   │
│  │ └─ Evidence Bundle                             │   │
│  └─────────────────────────────────────────────────┘   │
│                       ↓↓↓                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │ ScoringEngine.js (The Logic)                   │   │
│  │ ├─ Pillar 1: IUU Check (FAO list)             │   │
│  │ ├─ Pillar 2: RCMC Score (days calc)           │   │
│  │ ├─ Pillar 3: Traceability (doc count)         │   │
│  │ ├─ Pillar 4: Monsoon Ban (date check)         │   │
│  │ └─ Pillar 5: Market Rules (destination)       │   │
│  └─────────────────────────────────────────────────┘   │
│                       ↓↓↓                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │ DataManager.js (Data Access)                   │   │
│  │ ├─ Load CMFRI stock data                       │   │
│  │ ├─ Load MPEDA bans                             │   │
│  │ ├─ Load ARGO ocean data                        │   │
│  │ └─ Load FAO IUU list                           │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                       ↓↓↓
┌─────────────────────────────────────────────────────────┐
│                   EXTERNAL APIs                         │
│  ├─ Argovis API (Ocean float data)                     │
│  ├─ CMFRI 2025 Data (Fish stocks)                      │
│  ├─ MPEDA Ban Rules (Monsoon schedule)                 │
│  ├─ FAO Global Record (IUU blacklist)                  │
│  └─ Local JSON Files (Fallback data)                   │
└─────────────────────────────────────────────────────────┘
```

---

### **Data Sources**

| Source | Data Type | Update Frequency | Used In |
|--------|-----------|------------------|---------|
| **ARGO** | Ocean temperature/salinity | Every 2 hours | Context |
| **CMFRI** | Fish stock levels | Annual (May) | Stock health |
| **MPEDA** | Monsoon ban dates | Annual (March) | Ban checking |
| **FAO** | IUU vessel list | Weekly | IUU detection |
| **User Input** | Export details | Per export | All pillars |

---

### **File Structure**

```
SustainChain/
├── src/
│   ├── components/
│   │   └── Dashboard.jsx          (Main UI)
│   ├── utils/
│   │   ├── scoring-engine.js      (5 pillars logic)
│   │   ├── data-manager.js        (Data loading)
│   │   └── compliance-frameworks.js
│   ├── data/
│   │   ├── cmfri_stocks.json      (Fish data)
│   │   ├── mpeda_bans.json        (Ban dates)
│   │   ├── argo_demo_floats.json  (Ocean data)
│   │   └── compliance_frameworks.json
│   ├── App.jsx
│   └── main.jsx
├── package.json                   (Dependencies)
├── vite.config.js                 (Build config)
└── README.md                       (This guide)
```

---

## 📝 Checklist Before Exporting

**Use this checklist before you export any fish:**

```
□ Vessel is registered with MPEDA
□ RCMC certificate is valid (not expired)
□ Catch date is legal (not during monsoon ban)
□ All 5 documents collected:
  □ Landing Certificate
  □ Health Certificate
  □ Processing Facility Cert
  □ Vessel Registration
  □ Catch Origin Document
□ Destination country selected
□ Score calculated (≥75 recommended)
□ Score is GREEN or YELLOW (not RED)
□ ARGO data is FRESH (<6 hours old)
□ Screenshot/saved your score card
□ Showed score to MPEDA/regulator
□ Got final approval to proceed
```

---

## 🎓 Quick Reference Cards

### **Card 1: Score Interpretation**

```
╔════════════════════════════════════════╗
║     EXPORT SCORE QUICK REFERENCE      ║
╠════════════════════════════════════════╣
║ SCORE    STATUS        ACTION          ║
╠════════════════════════════════════════╣
║ 85-100   GREEN ✓       EXPORT NOW      ║
║ 75-84    GREEN ✓       EXPORT OK       ║
║ 70-74    YELLOW ⚠      FIX GAPS        ║
║ 50-69    YELLOW ⚠      WAIT/FIX        ║
║ <50      RED ✗         DO NOT EXPORT   ║
╚════════════════════════════════════════╝
```

### **Card 2: Common Issues & Fixes**

```
╔══════════════════════════════════════════════════╗
║      PROBLEM             FIX                    ║
╠══════════════════════════════════════════════════╣
║ Score 0 (IUU)      → Use different vessel      ║
║ Score 0 (Monsoon)  → Wait for ban to end       ║
║ Low RCMC score     → Renew RCMC urgently       ║
║ Low Traceability   → Collect missing docs      ║
║ Low Market score   → Check destination rules   ║
║ No ARGO data       → Wait/use demo data        ║
╚══════════════════════════════════════════════════╝
```

### **Card 3: Monsoon Ban Dates**

```
╔══════════════════════════════════════════════════╗
║           MONSOON BAN SCHEDULE                 ║
╠══════════════════════════════════════════════════╣
║ WEST COAST (Arabian Sea)                       ║
║   Ban: June 1 - July 31                        ║
║   Protected: Mackerel, Sardine, Anchovy        ║
║                                                ║
║ EAST COAST (Bay of Bengal)                     ║
║   Ban: April 15 - June 14                      ║
║   Protected: Hilsa, Mackerel, Grouper          ║
║                                                ║
║ EQUATORIAL                                     ║
║   Ban: None (year-round fishing allowed)       ║
╚══════════════════════════════════════════════════╝
```

---

## 🚀 Next Steps

**After you understand this guide:**

1. **Run a test scenario** (5 min)
   - Choose "Good Export"
   - Click Calculate
   - See your first score

2. **Try different scenarios** (15 min)
   - Try each of the 5 test scenarios
   - Understand why scores differ

3. **Manual data entry** (10 min)
   - Clear form
   - Enter your own vessel data
   - Calculate custom score

4. **Share with team** (5 min)
   - Show teammates how it works
   - Let them try it themselves

5. **Prepare for your export** (30 min)
   - Gather your actual export data
   - Run through the system
   - Get score, prepare documentation

---

## 📞 Support & Contact

```
Questions?
  Contact: [Team Lead Name]
  Email: [Team Email]
  Slack: #sustainchain-support

Found a bug?
  Report to: GitHub Issues
  Include: Error message + screenshot

Want to contribute?
  Fork the GitHub repo
  Make your changes
  Submit a pull request
```

---

## 📚 Additional Resources

```
✅ README.md         → Quick start guide
✅ CITATIONS.md      → All data sources
✅ ARCHITECTURE.md   → Technical design
✅ ROADMAP.md        → Future plans
✅ GitHub Repo       → Source code
```

---

## ✨ You're Ready!

**You now know:**
- ✅ What SustainChain does
- ✅ How to use it
- ✅ How to interpret scores
- ✅ How to fix compliance gaps
- ✅ What data sources power it

**Go export with confidence!** 🌊

---

**Last Updated:** August 16, 2026  
**Version:** 1.0  
**Status:** Ready for Team Use ✅
