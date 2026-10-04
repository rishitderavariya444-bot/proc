# Open items

Facts and access still needed from the client. Until each arrives, show a visible `[TO CONFIRM: …]` placeholder; never invent it. Tick items off as they come in, and add new ones as they come up.

## Content
| Needed | Used on | Needed by |
|---|---|---|
| [ ] 2–3 case studies (problem → what we did → result; can be anonymised) | Home, Why Procuro, Procuro Source, Industries | Stage 3 |
| [ ] Client quote with name and role | Home | Stage 3 |
| [ ] Client names/logos, with permission (currently: keep placeholders) | Home | Stage 3 |
| [ ] Confirm proof figures: 2023 · 20+ clients · 30+ projects · 1,50,000+ sq ft | Home, Build, Stone | Stage 3 |
| [ ] Procuro Source: categories sourced, countries served, how it's charged, who does quality checks | `/source`, Quality control | Stage 5 |
| [ ] Export: currently exporting? Which documents and shipping terms are handled? | Logistics and export | Stage 5 |
| [ ] Procuro Source engagement models: scope and pricing for one-off sourcing and the ongoing program (the paid pilot steps are in the copy) | `/source` | Stage 5 |
| [ ] A sample quality report or certificate to show (the copy has a SEE A SAMPLE REPORT button) | Quality control | Stage 5 |
| [ ] Registrations: GST, IEC, CIN, Udyam, ISO or others | Certifications, Home | Stage 7 |
| [ ] Team: names, roles, photos | Company | Stage 7 |
| [ ] Mineral spec sheet PDFs | Minerals | Stage 4 |
| [ ] Build: a specification and a one-line use for each of the 15 materials (AAC blocks, mortar, tiles and so on). Pages show `[TO CONFIRM]` for now | `/build/[material]` | Stage 4 |
| [ ] Quicklime CaO value (and the two CaO grades the FAQ mentions) | Minerals, quicklime pages | Stage 4 |
| [ ] Stone origins, only where confirmed per stone | `/stone/[family]/[stone]` | Stage 4 |
| [ ] Real photos (yard, stock, slabs, deliveries, office, team) to replace stock. Highest priority: one photo per stone (73) and per Build material (15), then team and offices; these have no stock stand-in | Everywhere | Before launch |
| [ ] Unsplash access for Stage 8.5: allow `unsplash.com` and `images.unsplash.com` in the environment's network settings, or send photo links | Stage 8.5 | Stage 8.5 |
| [ ] LinkedIn company page URL (old footer listed LinkedIn; left out until we have the link) | Footer | Stage 8 |
| [ ] Logo as vector (SVG/AI/PDF) if the original designer has it | Header, footer | Stage 0 (otherwise rebuild from PNG) |

## Decisions to confirm
| Question | Context |
|---|---|
| [ ] Talc P92 tier is labelled "PREMIUM" in the old content file, but "premium" is on the banned-words list. Keep it as a product tier label, or rename it? Tier labels (Premium, Industrial, Economy) are left off the site until this is decided. | Minerals |
| [ ] The old colour notes describe Build as cement, steel, aggregates and sand, but the content rules forbid listing cement, steel or sand. Following the content rules unless told otherwise. | Build |

## Access (Stages 8–10)
| Needed | For |
|---|---|
| [ ] Confirm sales@procuro.in receives enquiries | Forms |
| [ ] Confirm WhatsApp number +91 98201 80267 | WhatsApp button |
| [ ] Resend account, then add `RESEND_API_KEY` in Vercel (Project → Settings → Environment Variables) and redeploy | Form emails |
| [ ] Verify procuro.in in Resend and set `FORM_FROM` (for example `Procuro website <website@procuro.in>`). Until then Resend's test sender only delivers to the email on the Resend account | Form emails |
| [ ] DNS access for procuro.in | Vercel domain + Resend records |
| [ ] GitHub and Vercel (Pro) accounts | Deploy |

## Legal (Stage 8)
| Needed | Used on |
|---|---|
| [ ] Legal review of the privacy policy (DPDP Act 2023, IT Act) and terms, and a "last updated" date | `/privacy`, `/terms` |
| [ ] Privacy contact email | `/privacy` |
| [ ] Grievance officer: name, designation, email, address | `/privacy` |
| [ ] Limitation of liability wording | `/terms` |
| [ ] Courts with jurisdiction: Mumbai or Jaipur | `/terms` |
