# DADsync — GitHub Pages Deployment

**Live site:** https://www.dadsync.in  (GitHub Pages custom domain)
**Pages URL:** https://harekrishna7.github.io/11dad/
**Repo:** https://github.com/harekrishna7/11dad (branch `main`, root folder)

## What was deployed (2026-08-07)

DADsync v5 static site with **live Firebase config** (contact form → Firestore):

| File | Purpose |
|---|---|
| `index.html`, `about.html`, `services.html`, `hub.html`, `industries.html`, `careers.html`, `investors.html`, `contact.html`, `privacy.html`, `terms.html` | All pages (SEO meta, OG tags, canonical, JSON-LD included) |
| `404.html` | GitHub Pages SPA fallback (maps clean URLs to .html files) |
| `robots.txt`, `sitemap.xml` | SEO crawl directives |
| `assets/styles.css`, `assets/app.js` | Design system + dark mode, mobile menu, scroll reveal, contact form → Firestore |
| `assets/firebase-config.js` | **Live Firebase keys** (project `dadsync2026-7e20f`) |
| `assets/favicon.svg`, `assets/icons.svg` | Brand assets |
| `assets/downloads/*.pdf` | Hub Proposal / Brochure / Executive Summary |
| `images/*.jpg` | Site imagery |
| `CNAME` | Custom domain `www.dadsync.in` |
| `.github/workflows/main.yml` | Pages workflow (deploys repo root on push to `main`) |

## Firebase (live)

`assets/firebase-config.js` contains the real config:

```js
window.DADSYNC_FIREBASE = {
  apiKey: "AIzaSyAgPlafXglLDepGSPr6S2Prwf3GJy-Y6lc",
  authDomain: "dadsync2026-7e20f.firebaseapp.com",
  databaseURL: "https://dadsync2026-7e20f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dadsync2026-7e20f",
  storageBucket: "dadsync2026-7e20f.firebasestorage.app",
  messagingSenderId: "196883204226",
  appId: "1:196883204226:web:36c11373ff3731f9cccc9b",
  measurementId: "G-SGW3L0XNV6"
};
```

The contact form writes submissions to the Firestore collection `contacts`. Firestore rules allow `create` for anyone; read/update/delete require auth.

## GitHub Pages setup (already configured)

1. Repo **Settings → Pages**: Source = **Deploy from a branch**, Branch = **main**, folder = **/** (root).
2. Custom domain = **www.dadsync.in** (CNAME file present at repo root).
3. DNS: at your provider, add the records GitHub shows under Settings → Pages (CNAME `www.dadsync.in` → `harekrishna7.github.io`, or A records to GitHub's Pages IPs).
4. HTTPS is enforced by GitHub (auto TLS cert).

## Redeploying after changes

```bash
git add .
git commit -m "update site"
git push origin main
```

The workflow (`.github/workflows/main.yml`) auto-deploys to Pages in ~1 minute.

## Verify

- [ ] https://www.dadsync.in/ loads
- [ ] https://www.dadsync.in/assets/firebase-config.js serves the real apiKey / projectId
- [ ] https://www.dadsync.in/contact.html form writes to Firestore `contacts`
- [ ] https://harekrishna7.github.io/11dad/ also works (Pages fallback URL)
