# Procuro India website — project context

Read this first, then `PROCURO_BUILD_PLAN.md`.

## What this is
Marketing website for **Procuro India** (procuro.in), a brand of Deravariya India Private Limited, with offices in Mumbai and Jaipur.

Procuro has two halves:
- **Its own supply:** Procuro Build (construction materials), Procuro Minerals (talc, quicklime) and Procuro Stone (natural and engineered stone).
- **Procuro Source:** procurement as a service. Procuro finds, verifies and manages Indian suppliers for buyers, including international businesses sourcing from India. It's the newest and most strategic offering, but not the whole site.

**The site's job is trust.** A buyer who has heard of Procuro visits to check that it's a genuine, capable company, then gets in touch. It isn't a shop: there's no cart or pricing, and every page ends in a quote, sample or contact action.

## How to work
1. Follow `PROCURO_BUILD_PLAN.md` stage by stage, in order. Don't skip ahead.
2. Do one stage per session, or the specific pages the user asks for.
3. Tick each task `[x]` as it's done, mark finished stages ✅, and add a line to the plan's log.
4. Stop at the end of each stage and summarise what's ready for the user to review.

## Files and which wins
| File | Use it for |
|---|---|
| `docs/SITEMAP.md` | Pages, routes, navigation, sections per page. **Wins on structure.** |
| `docs/DESIGN.md` | Visual system: colour, type, layout, components. **Wins on design.** |
| `docs/content/concise-copy.md` | Headline, line and button for every section in the new structure |
| `docs/content/procuro-website-content.md` | Full approved copy, product lists, spec tables, FAQs, offices, contact details |
| `docs/context/procuro-source-strategy-report.md` | Background on Procuro Source only. Not website copy. |
| `docs/OPEN_ITEMS.md` | Facts still missing from the user |
| `assets/logo/` | Logo PNGs (black and white) |

The old content file (`procuro-website-content.md`) predates the redesign:
- **Still valid:** its copy text, product data, spec tables, FAQs, addresses and contact details.
- **Superseded:** its design rules (fonts, themes, colours other than the four accents), its route list and its page structure. Use `SITEMAP.md` and `DESIGN.md` instead.
- Old routes map to new ones: `/supply-with-procuro` → `/suppliers`; `/company/how-we-verify` → `/services/quality-control`.

## Content rules
- Headlines are sentence case and end with a full stop.
- Buttons start with a verb, in uppercase. No arrows appended.
- Never use: premium, world-class, cutting-edge, seamless, top-tier, revolutionary, bridge the gap, end-to-end.
- Never name suppliers, partners or plants. Never explain how the Procuro map is built or what data feeds it.
- Never list cement, steel or sand as products.
- **Never invent facts:** clients, numbers, certifications, team members, case studies. Use a visible `[TO CONFIRM: …]` placeholder and add it to `docs/OPEN_ITEMS.md`.
- In the copy docs, `·` separates list items (e.g. "Build · Minerals · Stone" means three items). Render them as real lists or grids, never as dot-joined strings.

## Photos
- No real photos exist yet. Use free-licensed placeholders from Unsplash or Pexels only.
- Log every photo (page, URL, photographer) in `src/data/photo-credits.md` so each one can be swapped later.
- Product and stone images are the first priority to replace; keep them generic so they don't misrepresent stock.

## Tech
- Astro, React (via `@astrojs/react`), Base UI (`@base-ui/react`), Tailwind CSS, Vercel adapter, `@astrojs/sitemap`, Fontsource.
- Astro renders React to static HTML by default. Add `client:*` only to interactive parts: nav menus, mobile menu, accordions, lightbox, tabs, forms.
- Product pages generate from data files in `src/data/` (no CMS).
- Forms: Astro Actions + Resend, sending to sales@procuro.in. The API key lives in env vars, never in code.
- WhatsApp: `https://wa.me/919820180267?text=<encoded message>`, with a pre-filled message per page (see `SITEMAP.md`).
- Quality floor: responsive from 360px up, visible keyboard focus, `prefers-reduced-motion` respected, WCAG AA contrast, alt text on every image.
