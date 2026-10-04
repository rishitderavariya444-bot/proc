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

## Stage 4 — Products ✅
- [x] Data files: stone, minerals, build
- [x] `/products` index
- [x] `/build`, `/minerals`, `/stone`
- [x] Generated pages: `/build/[material]`, `/minerals/[product]/[grade]`, `/stone/[family]/[stone]`

**Done when:** all product pages build with no errors.

## Stage 5 — Services ✅
- [x] `/services` index
- [x] `/source` (Procuro Source)
- [x] `/services/quality-control`, `/services/logistics`

## Stage 6 — Industries ✅
- [x] `/industries` index + 4 industry pages

## Stage 7 — Why Procuro, Company, Suppliers ✅
- [x] `/why-procuro` (incl. case studies section)
- [x] `/company`, `/company/certifications`
- [x] `/suppliers`

## Stage 8 — Contact and forms (built; live email test waiting on Resend)
- [x] `/contact` with routes, form and direct details
- [x] Astro Action sends form emails via Resend to sales@procuro.in
- [x] Wire all forms; success and error states
- [x] Pre-filled WhatsApp message on each page
- [x] `/privacy`, `/terms`

- [ ] Live test: Resend key set in Vercel, a real enquiry arrives at sales@procuro.in

**Done when:** a test enquiry arrives by email and WhatsApp opens with the right message.

## Stage 8.5 — Photos (stock, general shots only)
Decision (2026-10-04): free Unsplash photos for general scenes only. Individual products (73 stones, 15 Build materials, talc grades, quicklime), the team and the offices keep labelled placeholders until real photos arrive, so stock never stands in for Procuro's own stock or people.

- [ ] Get access to Unsplash: either `unsplash.com` and `images.unsplash.com` allowed in the environment's network settings, or the user sends photo links
- [ ] Choose and download about 23 photos into `src/assets/photos/`, served through Astro `<Picture>` (AVIF/WebP, lazy below the fold, alt text on every image)
- [ ] Log every photo (page, URL, photographer) in `src/data/photo-credits.md`
- [ ] Replace these placeholders:
  - Home hero: wide shot of a stone yard, slabs in rows
  - A stone slab under raking light (home, products, Stone hero)
  - Blockwork or AAC blocks on a live site (home, products, Build hero, real estate industry)
  - Mineral powder close up (home, products, Minerals hero, paints industry)
  - Yard stock: blocks, slabs and bagged material (home, "Buy from our supply")
  - Inspection at a plant (home, services, Source hero)
  - Inspector checking a slab (quality control)
  - Loaded truck leaving a yard (services, logistics)
  - Crated stone ready for export (logistics, international buyers)
  - Stone samples on a design table (architects and designers)
  - Production line at a plant (suppliers)
  - Six stone family textures: marble, granite, sandstone, limestone, slate, basalt (Stone page cards)
  - Stone gallery (6): polished slabs, honed detail, flamed and bush-hammered finishes, sandstone pavers outdoors, marble floor in a lobby, CNC-carved panel

**Done when:** every general placeholder shows a credited photo, product, team and office slots still say "Photo to come", and the pages still pass the phone and laptop checks.

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
| 2026-10-04 | 4 | Data in `src/data/build.ts`, `minerals.ts`, `stone.ts`. `/products`, `/build`, `/minerals`, `/stone`, plus generated pages: 15 Build materials, 3 talc grades and 2 quicklime forms (powder, lump), 6 stone families and 73 stones (121 pages in all). Shared `ProductPage` layout with breadcrumbs (BreadcrumbList JSON-LD) and a per-product WhatsApp message. Talc tier labels omitted pending the PREMIUM decision; stone origins hidden until confirmed. Link and anchor check: 0 broken. Checked at 360px and 1440px. |
| 2026-10-04 | 5 | `/services`, `/source` (what we do, two ways in, six-step process, engagement models, proof, FAQ, brief form), `/services/quality-control` (vetting, inspections, what you receive, spec tag explainer, checks by vertical) and `/services/logistics`. Engagement-model pricing, export terms and a sample report are `[TO CONFIRM]`. Hero headline minimum lowered from 48px to 40px, and split-hero headlines capped at 88px, so long words like "procurement" fit at 360px and beside the photo. Link check: 0 broken. |
| 2026-10-04 | 6 | `/industries` and four industry pages generated from `src/data/industries.ts`: hero, what we supply (reusing Build, Minerals, Stone and Source copy), who it's for, a `[TO CONFIRM]` case study, other industries, CTA. Each page takes the accent of its main vertical. Link check: 0 broken. Checked at 360px and 1440px. |
| 2026-10-04 | 7 | `/why-procuro` (the map in words, how we verify, three `[TO CONFIRM]` case studies), `/company` (about, facts, team placeholders, how we work, both offices with Google Maps links), `/company/certifications` (GST, IEC, CIN, Udyam and other certifications as `[TO CONFIRM]`; documents per vertical) and `/suppliers` (benefits, criteria, steps, application form). Dropped the old copy's "sharpened by every order we handle and every check we run" clause about the map, because CLAUDE.md forbids saying what feeds it. Link check: 0 broken. |
| 2026-10-04 | 8 | `/contact` (three routes, general form, direct details, reply times, offices), `/privacy` and `/terms` (copy as drafted, gaps as `[TO CONFIRM]`), holding pages removed. All six forms post to the `enquiry` Astro Action (`src/actions/index.ts`), which re-validates on the server, drops honeypot spam and emails sales@procuro.in through Resend with the form name and vertical in the subject and Reply-To set to the buyer. Tested locally with Resend stubbed: success, failure and server-side errors all behave, and HTML in messages is escaped. WhatsApp message checked on every page type. Not yet ticked off: a real email, which needs RESEND_API_KEY in Vercel. |
