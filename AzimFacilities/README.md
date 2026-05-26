# AzimFacilities — Developer Guide

> React SPA for [azimgroup.qa](https://www.azimgroup.qa) — Facilities Management Company in Qatar  
> Hosted on **GitHub Pages** | Pre-rendered with **react-snap**

---

## 🚀 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | Frontend framework |
| react-router-dom v6 | Client-side routing |
| react-helmet-async | Per-page SEO meta tags |
| react-snap | Pre-renders pages to static HTML for Google |
| gh-pages | Deploys build to GitHub Pages |
| EmailJS | Contact form email sending |

---

## 📦 First Time Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/Bright-WebHost/AzimFacilities.git
cd AzimFacilities
npm install --legacy-peer-deps
```

---

## 💻 Local Development

```bash
npm start
```

Opens at `http://localhost:3000`

---

## 🔧 Making Code Changes — Full Workflow

Every time you make changes and want to deploy to the live site, follow these steps **in order**:

### Step 1 — Make your changes
Edit files in `src/` as needed.

### Step 2 — Push source code to GitHub
```bash
git add .
git commit -m "your commit message here"
git push
```

### Step 3 — Build the project
```bash
npm run build
```
This compiles React into static files inside the `build/` folder.

> ⚠️ react-snap will run automatically after build and pre-render pages.
> Some warnings like `pageerror` or `ERR_FAILED` are **normal** — ignore them as long as pages show ✅ crawled.

### Step 4 — Fix missing page folders ⚠️ IMPORTANT
```bash
node scripts/fix-pages.js
```

This script creates `index.html` files for pages that react-snap missed.  
**You MUST run this every time after `npm run build`.**

It creates these folders in `build/`:
- `facilities-management/`
- `cleaning-and-hospitality/`
- `contact-us/`
- `career/`
- `sector/`
- `hotel-hospital-sector/`
- `government-sector/`
- `real-estate-sector/`
- `education-sector/`

### Step 5 — Deploy to GitHub Pages
```bash
npm run deploy
```

This pushes the `build/` folder to the `gh-pages` branch.  
GitHub Pages serves your site from that branch at `www.azimgroup.qa`.

Wait **2-3 minutes** then check the live site.

---

## ⚡ Quick Deploy (Steps 3+4+5 combined)

After pushing source code, run all deploy steps at once:

```bash
npm run build && node scripts/fix-pages.js && npm run deploy
```

---

## 📁 Project Structure

```
AzimFacilities/
├── public/
│   ├── index.html          ← Global meta tags, OG tags, Google Analytics
│   └── assets/             ← CSS, JS, images used by template
├── src/
│   ├── components/
│   │   ├── Pages/          ← Page-level components (one per route)
│   │   ├── Elements/       ← Reusable sections (About, Slider, Services etc)
│   │   └── Common/         ← Header, Footer
│   └── App.js              ← Routes + HelmetProvider wrapper
├── scripts/
│   └── fix-pages.js        ← ⚠️ Must run after every build!
├── build/                  ← Auto-generated, do not edit manually
├── package.json
└── vercel.json             ← Can be ignored (using GitHub Pages not Vercel)
```

---

## 🗺️ Page Routes

| URL | File |
|-----|------|
| `/` | `src/components/Pages/Home7.jsx` |
| `/about` | `src/components/Pages/About2.jsx` |
| `/services` | `src/components/Pages/Services1.jsx` |
| `/facilities-management` | `src/components/Pages/ProjectDetail1.jsx` |
| `/cleaning-and-hospitality` | `src/components/Pages/BlogSingle.jsx` |
| `/sector` | `src/components/Pages/ShopList.jsx` |
| `/contact-us` | `src/components/Pages/ContactUs.jsx` |
| `/career` | `src/components/Pages/Careers.jsx` |
| `/hotel-hospital-sector` | `src/components/Pages/Residential.jsx` |
| `/government-sector` | `src/components/Pages/Government.jsx` |
| `/real-estate-sector` | `src/components/Pages/RealEstate.jsx` |
| `/education-sector` | `src/components/Pages/Education.jsx` |

---

## 🔍 SEO — How It's Set Up

### Per-page titles and meta descriptions
Each page uses `react-helmet-async` to set its own SEO tags:

```jsx
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Page Title | Azim Group</title>
  <meta name="description" content="Page description here." />
  <link rel="canonical" href="https://www.azimgroup.qa/page-url" />
</Helmet>
```

### Global meta tags
Set in `public/index.html` — keywords, robots, Open Graph tags.

### Pre-rendering
react-snap visits each page and saves static HTML so Google can read content without running JavaScript.

### Adding a new page
1. Create the page component in `src/components/Pages/`
2. Add the route in `src/components/Components.jsx`
3. Add Helmet tags to the new page
4. Add the URL to `reactSnap.include` in `package.json`
5. Add the page folder name to `scripts/fix-pages.js`
6. Follow the full deploy workflow above

---

## 📧 Contact Form

Uses **EmailJS** — credentials are in `src/components/Pages/ContactUs.jsx`:

```js
const EMAILJS_SERVICE_ID = 'service_88foj3n';
const EMAILJS_TEMPLATE_ID = 'template_1xem70f';
const EMAILJS_PUBLIC_KEY = 'EbiM5Zeg16T7cd_Rx';
```

To change the recipient email, update the EmailJS template at [emailjs.com](https://emailjs.com).

---

## 📊 Analytics

- **Google Analytics 4** — `G-STMEZ3F2B8`
- **Google Ads** — `AW-17877061561`

Both configured in `public/index.html`.

---

## ⚠️ Common Issues

| Problem | Solution |
|---------|----------|
| Page returns 404 on live site | Run `node scripts/fix-pages.js` then `npm run deploy` |
| Build fails with ESLint errors | `cross-env DISABLE_ESLINT_PLUGIN=true` is already set in build script |
| react-snap pageerror warnings | Normal — caused by Revolution Slider JS, ignore if pages show ✅ crawled |
| Vercel deployment failing | Ignore — site uses GitHub Pages, not Vercel |
| npm install fails | Use `npm install --legacy-peer-deps` |
| Changes not showing on live site | Make sure you ran all 5 steps in order |

---

## 🌐 Hosting

| Platform | Branch | Purpose |
|----------|--------|---------|
| GitHub Pages | `gh-pages` | Live site at www.azimgroup.qa |
| GitHub | `main` | Source code |

**DNS** is managed separately — `www.azimgroup.qa` points to GitHub Pages via CNAME.

---

## 📞 Client Info

- **Website:** https://www.azimgroup.qa
- **Email:** afms@azimgroup.qa
- **Phone:** +974 4480 2851
- **Address:** NBK Building, #805, 8th Floor, Doha, Qatar
