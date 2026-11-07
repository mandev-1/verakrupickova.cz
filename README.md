# Věra Krupičková — artist portfolio

Editorial, bilingual Astro website for **verakrupickova.cz**. Czech (`/cs/`) and German (`/de/`), 13 catalogued works in two collections, no public prices.

## Local development

```bash
npm install
npm run dev
npm run build
```

## Netlify

Connect the GitHub repository to Netlify. Build command: `npm run build`; publish directory: `dist`. Point your WEDOS DNS records to the values Netlify gives you when you add `verakrupickova.cz` as a custom domain. Don't change DNS before checking Netlify's instructions for your site.

## Assets and content

All artwork images in `public/images/` are extracted from the supplied PDF catalogues. **These files are only approximately 500–600 pixels wide**; replace with properly photographed high-resolution originals before public launch, especially for 4K screens. `prague-7.jpg` is the real catalogue reproduction of *Liebe im Turmmeer / Láska mezi věžemi*, not an AI-generated replacement. Content, dimensions and bilingual titles are in `src/data/content.ts`. The biography is intentionally brief pending approval; no invented portrait or quotes are used.

## Contact form

Uses Netlify Forms; confirm detection in Netlify after deployment and test an actual submission. Do not publish personal contact information without permission.
