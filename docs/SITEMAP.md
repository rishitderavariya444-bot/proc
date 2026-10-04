# Procuro sitemap

Structure modelled on Zetwerk's site: what we supply (Products), how we deliver (Services), who we serve (Industries), and why trust us (Why Procuro, Company). Copy for every section is in `content/concise-copy.md`; fuller copy and product data are in `content/procuro-website-content.md`.

## Navigation
```
PROCURO.   Products ▾   Services ▾   Industries ▾   Why Procuro   Company ▾   [GET A QUOTE → /contact]

Products ▾      Build /build · Minerals /minerals · Stone /stone · All products /products
Services ▾      Procuro Source /source · Quality control /services/quality-control
                · Logistics and export /services/logistics · All services /services
Industries ▾    Real estate and construction · Paints, coatings and manufacturing
                · Architects and designers · International buyers · All industries /industries
Company ▾       About /company · Certifications /company/certifications
                · For suppliers /suppliers · Contact /contact
```
Footer: tagline, nav links, Mumbai and Jaipur offices, email, phone, WhatsApp, Privacy, Terms, legal line.

## Pages and sections

### Home `/`
1. Hero
2. Two doors: buy from our supply | source from India (Procuro Source)
3. Proof bar (4 figures)
4. Value props (4)
5. Client quote (placeholder)
6. Client logos (placeholder)
7. Products: Build, Minerals, Stone
8. Services: Procuro Source, Quality control, Logistics and export
9. Industries (4)
10. Certifications (placeholder)
11. Closing CTA

### Products
| Route | Sections |
|---|---|
| `/products` | Hero · three vertical panels |
| `/build` | Hero · proof bar · what we supply (masonry and blockwork, floors and surfaces, specified to the drawing) · who we serve · how it works · commitments · FAQ · quote form |
| `/minerals` | Hero · proof bar · talc series (P92, I90, E85 spec tags + full parameter table) · quicklime · who we serve · how it works · FAQ · sample form |
| `/stone` | Hero · proof bar · natural stone (six families) · gallery · engineered surfaces · who we serve · how it works · FAQ · samples form |
| `/build/[material]` | Generated from Build materials list |
| `/minerals/[product]/[grade]` | Generated from minerals data |
| `/stone/[family]/[stone]` | Generated from stone lists; show origin only when confirmed |

### Services
| Route | Sections |
|---|---|
| `/services` | Hero · three service panels |
| `/source` | Hero · what we do · process (numbered steps) · engagement models (one-off, paid pilot, ongoing program) · proof · FAQ · brief form |
| `/services/quality-control` | Hero · supplier vetting · inspection stages · documentation you receive (reuse "How we verify" and spec-tag content from the old file) |
| `/services/logistics` | Hero · delivery in India · export · CTA |

### Industries
Each page: hero · what we supply them · one case study (placeholder) · CTA.
| Route | Links to |
|---|---|
| `/industries` | Index of the four |
| `/industries/real-estate-construction` | Build, Stone |
| `/industries/paints-coatings-manufacturing` | Minerals |
| `/industries/architects-designers` | Stone, Build |
| `/industries/international-buyers` | Procuro Source |

### Trust and company
| Route | Sections |
|---|---|
| `/why-procuro` | Hero · the map (told in words; no visual map) · how we verify · case studies · CTA |
| `/company` | About · key facts · team (placeholder) · how we work · offices |
| `/company/certifications` | Registrations and certifications (placeholder) |
| `/suppliers` | Hero · benefits · criteria · how it works · application form |
| `/contact` | Hero · routes (buy materials, source from India, supply to Procuro) · form · direct details · offices |
| `/privacy`, `/terms` | Legal text |
| `/404` | Short message with links to Home and Contact |

## Forms
| Form | Lives on | Fields beyond name, company, email, phone |
|---|---|---|
| Quote | `/build`, `/contact` | Materials, quantity, site location |
| Sample | `/minerals` | Grade, intended use, delivery location |
| Samples | `/stone` | Stones of interest, project type, delivery location |
| Sourcing brief | `/source` | What you need, quantity, destination country |
| Supplier application | `/suppliers` | Products made, location, capacity |
| General | `/contact` | Route (buy, source, supply), message |

All forms email sales@procuro.in with the form name and vertical in the subject line.

## WhatsApp pre-filled messages
| Page | Message |
|---|---|
| Default (all other pages) | Hi Procuro, I'd like to know more about your services. |
| Build pages | Hi Procuro, I'd like a quote for construction materials. |
| Minerals pages | Hi Procuro, I'd like to request a mineral sample. |
| Stone pages | Hi Procuro, I'd like to see stone samples. |
| Procuro Source, international buyers | Hi Procuro, I'd like help sourcing from India. |
| Suppliers | Hi Procuro, I'd like to supply to Procuro. |
| Product page | Hi Procuro, I'm interested in [product name]. |
