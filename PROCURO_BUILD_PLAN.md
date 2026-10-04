# Procuro website — build plan

**How to use:** Work one stage at a time, in order. Tick `[x]` each task as it's done. When a stage's "Done when" check passes, mark the stage heading ✅ and add a line to the log at the bottom.

## Inputs
Read `CLAUDE.md` first. Everything else lives in `docs/` and `assets/`:
- `docs/SITEMAP.md`: pages, routes, nav, sections, forms, WhatsApp messages
- `docs/DESIGN.md`: colour, type, layout, components, motion
- `docs/content/concise-copy.md`: copy for every section
- `docs/content/procuro-website-content.md`: full copy and product data
- `docs/OPEN_ITEMS.md`: facts still needed (use `[TO CONFIRM]` placeholders)
- `assets/logo/`: logo PNGs

## Decisions
- Stack: Astro · React + Base UI · Tailwind · Vercel · Fontsource
- Design: as in `docs/DESIGN.md` (one typeface, Archivo; accent full stop as signature; spec tags for products)
- Photos: Unsplash/Pexels placeholders, credits logged in `src/data/photo-credits.md`
- Clients, certifications, team: placeholders until supplied
- Forms email sales@procuro.in; WhatsApp click-to-chat with a pre-filled message per page
- No CMS: product pages generate from data files in the repo

---

## Stage 0 — Project setup ✅
- [x] Create the Astro project in this folder (keep `CLAUDE.md`, this plan, `docs/` and `assets/`); add React, Tailwind, Base UI, Vercel adapter, sitemap
- [x] Install Archivo (variable, with width axis) via Fontsource
- [x] Rebuild logo as SVG (black + white)
- [x] Set up folders: `components/`, `layouts/`, `pages/`, `data/`, `assets/`

**Done when:** `npm run dev` shows a blank page with the logo and fonts loading.

## Stage 1 — Design system ✅
- [x] Tokens: neutrals, four accents (light/dark), type scale, spacing, grid
- [x] Base layout with light and dark section themes
- [x] Header (Base UI dropdown nav + mobile menu), footer, buttons, WhatsApp button
- [x] `/styleguide` page showing all of the above

**Done when:** the styleguide looks right on phone and laptop.

## Stage 2 — Shared components ✅
- [x] Headline (accent full stop), hero, section header, proof bar, card, CTA band
- [x] Spec tag, spec table, gallery + lightbox, FAQ accordion (outputs FAQ JSON-LD)
- [x] Case-study card, quote block, logo strip, image placeholder
- [x] Enquiry form (UI only)

**Done when:** every component appears on `/styleguide`.

## Stage 3 — Home `/` ✅
- [x] All 11 sections from the concise copy doc

**Done when:** the page reads top to bottom with every link resolving (stub pages are fine).

## Stage 4 — Products
- [ ] Data files: stone, minerals, build
- [ ] `/products` index
- [ ] `/build`, `/minerals`, `/stone`
- [ ] Generated pages: `/build/[material]`, `/minerals/[product]/[grade]`, `/stone/[family]/[stone]`

**Done when:** all product pages build with no errors.

## Stage 5 — Services
- [ ] `/services` index
- [ ] `/source` (Procuro Source)
- [ ] `/services/quality-control`, `/services/logistics`

## Stage 6 — Industries
- [ ] `/industries` index + 4 industry pages

## Stage 7 — Why Procuro, Company, Suppliers
- [ ] `/why-procuro` (incl. case studies section)
- [ ] `/company`, `/company/certifications`
- [ ] `/suppliers`

## Stage 8 — Contact and forms
- [ ] `/contact` with routes, form and direct details
- [ ] Astro Action sends form emails via Resend to sales@procuro.in
- [ ] Wire all forms; success and error states
- [ ] Pre-filled WhatsApp message on each page
- [ ] `/privacy`, `/terms`

**Done when:** a test enquiry arrives by email and WhatsApp opens with the right message.

## Stage 9 — SEO and polish
- [ ] Titles and descriptions on every page; Organization JSON-LD; sitemap; 404 page
- [ ] Image sizes optimised; accessibility pass (contrast, focus, alt text)
- [ ] Check on phone, tablet and laptop; Lighthouse run

**Done when:** Lighthouse scores 90+ on performance and accessibility on key pages.

## Stage 10 — Launch
- [ ] Push to GitHub; connect Vercel (Pro plan)
- [ ] Set environment variables (Resend key)
- [ ] Point procuro.in DNS to Vercel; add Resend DNS records
- [ ] Add analytics; final live check

---

## Log
| Date | Stage | Note |
|---|---|---|
| 2026-10-04 | 0 | Astro 7 + React, Tailwind 4, Base UI, Vercel adapter, sitemap, Archivo variable (wdth) installed. Logo SVGs traced from the PNGs with potrace into `src/assets/`. Placeholder home page shows logo and font. |
| 2026-10-04 | 1 | Tokens (neutrals, four accents per theme, type scale, grid, spacing) in `src/styles/global.css`. Base layout with light/dark section themes, Header (Base UI navigation menu + full-screen dialog menu below 1280px), Footer, Button, WhatsApp button, Logo with accent full stop and lockups. `/styleguide` (noindex, out of sitemap) checked at 375px and 1440px. Build and Stone accent text on concrete measure 4.4:1, so use ink there for small text. |
| 2026-10-04 | 2 | Headline, Hero (band, split, text), SectionHeader, ProofBar, Card, CtaBand, SpecTag, SpecTable, Gallery + lightbox, FAQ (accordion + FAQPage JSON-LD), CaseStudyCard, QuoteBlock, LogoStrip, ImagePlaceholder and EnquiryForm (all six forms defined in `src/data/forms.ts`, UI only) are on `/styleguide`. Clicked through FAQ, form validation, select, lightbox and keyboard arrows at 375px and 1440px. Note for Stage 3: Unsplash and Pexels are blocked from the build container, so photos need another route in. |
| 2026-10-04 | 3 | Home page with all 11 sections. Proof figures shown as supplied but still awaiting sign-off; client quote, logos and registration numbers are visible `[TO CONFIRM]` placeholders; photos are labelled placeholders. Holding pages for every other route (`src/data/stubs.ts`, noindex) so all links resolve; remove each entry when its real page is built. Link check: 0 broken. Checked at 360px, 820px and 1440px. |
