# 🐟 SustainChain Setup Instructions

## Files Created Today

All files are available in `/outputs/` folder. Copy them to your project as follows:

---

## 📋 FILE PLACEMENT GUIDE

### **ROOT FOLDER** (`C:\Users\mange\Desktop\SustainChain\`)
Copy these files to the root:
```
├── package.json            ← npm dependencies
├── vite.config.js          ← Vite build config
├── tailwind.config.js      ← Tailwind CSS config
├── postcss.config.js       ← PostCSS config (for Tailwind)
├── index.html              ← HTML entry point
└── .gitignore              ← Git ignore file
```

### **`src/` FOLDER**
```
src/
├── main.jsx                ← React entry point
├── index.css               ← Global Tailwind CSS
├── components/
│   └── Dashboard.jsx       ← Main dashboard (ALREADY COPIED)
├── utils/
│   ├── scoring-engine.js   ← Scoring logic (ALREADY COPIED)
│   ├── data-manager.js     ← Data management (ALREADY COPIED)
│   └── compliance-frameworks.js ← Compliance data (DOWNLOAD THIS)
└── data/
    ├── cmfri_stocks.json   ← CMFRI data (ALREADY COPIED)
    ├── mpeda_bans.json     ← MPEDA data (ALREADY COPIED)
    ├── argo_demo_floats.json ← Mock ARGO (ALREADY COPIED)
    └── compliance_frameworks.json ← Compliance frameworks (ALREADY COPIED)
```

---

## 🚀 QUICK SETUP (5 MINUTES)

### **Step 1: Download Config Files**
From `/outputs/`, download these 6 files:
- `package.json`
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `index.html`
- `.gitignore`

### **Step 2: Copy to Project Root**
Copy all 6 files to:
```
C:\Users\mange\Desktop\SustainChain\
```

### **Step 3: Copy Src Files**
Download from `/outputs/`:
- `main.jsx` → `src/main.jsx`
- `index.css` → `src/index.css`
- `compliance-frameworks.js` → `src/utils/compliance-frameworks.js`

### **Step 4: Install Dependencies**
Open PowerShell in SustainChain folder:
```powershell
cd C:\Users\mange\Desktop\SustainChain
npm install
```

This will:
- ✅ Download React, React-DOM
- ✅ Download Vite (bundler)
- ✅ Download Tailwind CSS
- ✅ Download Recharts & lucide-react
- ✅ Create `node_modules/` folder (~500MB)

**⏱️ First install takes 2-5 minutes** (depends on internet speed)

### **Step 5: Start Development Server**
```powershell
npm run dev
```

Should see:
```
VITE v5.0.8  ready in 245 ms

➜  Local:   http://localhost:5173/
➜  Press h + enter to show help
```

Browser should automatically open → You see the Dashboard! 🎉

---

## ✅ VERIFY YOUR SETUP

### Check folder structure:
```powershell
cd C:\Users\mange\Desktop\SustainChain

# Should show all config files
ls package.json, vite.config.js, index.html

# Should show src folder with main.jsx
ls src/main.jsx

# Should show all data files
ls src/data/

# Should show all utility files
ls src/utils/
```

### Expected output:
```
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        8/15/2026   1:30 PM            670 package.json
-a----        8/15/2026   1:30 PM            260 vite.config.js
-a----        8/15/2026   1:30 PM            182 tailwind.config.js
-a----        8/15/2026   1:30 PM             80 postcss.config.js
-a----        8/15/2026   1:30 PM            384 index.html
-a----        8/15/2026   1:30 PM            .gitignore
```

---

## 🧪 TEST THE APP

Once running (`npm run dev`):

1. **Open browser** → http://localhost:5173/
2. **Click "Load demo scenario"** dropdown
3. **Select "Good Export (Expected Score: 82)"**
4. **Click "Calculate Score"** button
5. **See results:**
   - ✅ Score gauge showing ~82
   - ✅ Status: "PROCEED" (green)
   - ✅ 5 pillars breakdown
   - ✅ No red flags
   - ✅ Recommendation text

---

## 🛠️ TROUBLESHOOTING

### Error: "Cannot find module 'react'"
**Solution:** Run `npm install` again
```powershell
npm install
```

### Error: "Port 5173 already in use"
**Solution:** Use different port
```powershell
npm run dev -- --port 5174
```

### Error: "Dashboard component not found"
**Make sure** `Dashboard.jsx` is in `src/components/`

### Tailwind CSS not working
**Make sure** `index.css` is imported in `src/main.jsx`:
```javascript
import './index.css'
```

### ARGO data not fetching
**Expected in dev mode** — will use mock data fallback
**To test real API:** Check browser console, it logs which tier is used

---

## 📊 PROJECT STRUCTURE (COMPLETE)

```
SustainChain/
├── package.json                          ← npm config
├── vite.config.js                        ← Vite build
├── tailwind.config.js                    ← Tailwind
├── postcss.config.js                     ← PostCSS
├── index.html                            ← HTML entry
├── .gitignore                            ← Git ignore
├── node_modules/                         ← Dependencies (after npm install)
│   ├── react/
│   ├── vite/
│   ├── tailwindcss/
│   ├── recharts/
│   └── lucide-react/
├── dist/                                 ← Build output (after npm run build)
└── src/
    ├── main.jsx                          ← React entry point
    ├── index.css                         ← Global styles
    ├── components/
    │   └── Dashboard.jsx                 ← Main UI (663 lines)
    ├── utils/
    │   ├── scoring-engine.js             ← Bayesian scoring (590 lines)
    │   ├── data-manager.js               ← API integration (524 lines)
    │   └── compliance-frameworks.js      ← Compliance data
    └── data/
        ├── cmfri_stocks.json             ← CMFRI 2025
        ├── mpeda_bans.json               ← MPEDA bans
        ├── argo_demo_floats.json         ← Mock ARGO
        └── compliance_frameworks.json    ← 5-country frameworks
```

---

## 📱 PRODUCTION BUILD

When ready to deploy (Aug 20):

```powershell
npm run build
```

Creates optimized `dist/` folder (~300KB gzipped)

Deploy to Vercel:
```powershell
npm install -g vercel
vercel
```

---

## ✨ YOU'RE ALL SET!

**Total files created:** 16  
**Total lines of code:** 1,800+  
**Total citations:** 70+  
**Ready for Aug 20 demo:** ✅

**Next: Run `npm install` and `npm run dev`** 🚀