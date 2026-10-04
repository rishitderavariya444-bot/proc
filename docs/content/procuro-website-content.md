---
document: procuro-website-content
site: procuro.in
brand: Procuro India
legal_entity: Deravariya India Private Limited
version: launch-1
date: 2026-10-04
status: approved copy unless marked [TO CONFIRM]
---

# Procuro India website content

## How to read this file

- Every page starts with `# PAGE:` followed by its route.
- Every section starts with `## SECTION:` followed by a section id, in the order it appears on the page.
- Fields are written as `key: value`. Use the value text exactly as written. Do not rewrite, shorten or embellish copy.
- `theme: dark` means black background (#0e0e0e). `theme: light` means off-white background (#f6f3ee). Cards are white (#ffffff).
- `button` fields use the format `LABEL -> target`. Targets are routes, anchors or form ids.
- Lists marked `items:` are rendered as cards, list rows or table rows as noted in `layout:`.
- `[PLACEHOLDER: ...]` marks an image slot. Render it as a neutral panel with the caption in small uppercase. Never fill it with stock or AI imagery.
- `[TO CONFIRM]` marks a value awaiting confirmation. Render it exactly as written.
- `faq:` blocks must also be output as FAQPage structured data.

## Global rules

- headline_style: sentence case, Source Serif 4, weight 600, every headline ends with a full stop
- label_style: UPPERCASE, Montserrat 500, letter-spacing 0.2em, no full stop; used for eyebrows, navigation, buttons and data labels
- body_font: Source Serif 4, weight 400
- button_rule: buttons start with a verb, UPPERCASE, no full stop
- accent_colours: source #2f3e9e | build #d9a21b (as text #8a6410) | minerals #1f6f6b | stone #a4553f
- accent_rule: one vertical accent per vertical page; the home page shows all four
- forbidden_words: premium, world-class, cutting-edge, seamless, top-tier, revolutionary, bridge the gap, end-to-end
- forbidden_claims: never list cement, steel or sand as products; never describe how the Procuro map is built or what data feeds it; never name suppliers, partners or plants
- imagery: real photographs only; until supplied, use labelled placeholders

---

# GLOBAL COMPONENTS

## COMPONENT: header

- theme: dark
- logo: PROCURO. wordmark (on vertical pages, the vertical lockup)
- nav_items:
  - SOURCE -> /source
  - BUILD -> /build
  - MINERALS -> /minerals
  - STONE -> /stone
  - SUPPLY WITH PROCURO -> /supply-with-procuro
  - COMPANY -> /company
  - CONTACT -> /contact
- whatsapp_button: icon only, aria-label "WhatsApp us" -> https://wa.me/919820180267
- primary_button: REQUEST A QUOTE -> /contact#quote

## COMPONENT: footer

- theme: dark
- logo: PROCURO. wordmark
- tagline: Right material. Right price. Right partner.
- nav_items: SOURCE, BUILD, MINERALS, STONE, SUPPLY WITH PROCURO, COMPANY, CONTACT
- office_mumbai_short: 5L-530, Mastermind IV, Royal Palms, Goregaon East, Mumbai 400065
- office_jaipur_short: Villa No. 27, Kedia Nikunj Vilas, Kalwad Road, Kanakpura, Jaipur 302012
- email: sales@procuro.in
- phone: +91 98201 80267
- links: LinkedIn | Privacy policy -> /privacy | Terms of use -> /terms
- legal_line: Procuro India is a brand of Deravariya India Private Limited.

## COMPONENT: offices_full

- mumbai: 5L-530, 5th Floor, Mastermind IV, Royal Palms, Aarey Milk Colony, Goregaon East, Mumbai, Maharashtra 400065
- jaipur: Villa No. 27, Kedia Nikunj Vilas, Kalwad Road, Near Narayana e-Techno School, Kanakpura, Jaipur, Rajasthan 302012

## COMPONENT: form_rules

- All forms submit to one store, tagged with form_id and vertical.
- Response times: Build replies the same day. Source, Minerals, Stone and general enquiries get a reply within one working day.
- Samples (Stone and Minerals) are free; the buyer pays delivery.

---

# PAGE: /

- page_name: Home
- seo_title: Procuro India · Procurement and supply for builders and manufacturers
- seo_description: Construction materials, industrial minerals and stone, plus managed procurement through Procuro Source. Offices in Mumbai and Jaipur.

## SECTION: hero

- theme: dark
- layout: two columns, text left, image right
- eyebrow: PROCURO INDIA
- h1: Right material. Right price. Right partner.
- h1_line_breaks: after each full stop (three lines)
- sub: Procurement and supply for India's builders and manufacturers, built on a growing map of who can supply what, where, and how well.
- button_primary: REQUEST A QUOTE -> /contact#quote
- button_secondary: SEE HOW WE WORK -> #ways
- image: [PLACEHOLDER: THE JAIPUR YARD, BLACK AND WHITE]

## SECTION: proof_bar

- theme: dark
- layout: four columns, large figure above small label
- items:
  - figure: 2023 | label: SUPPLYING SINCE
  - figure: 20+ | label: CLIENTS
  - figure: 30+ | label: REAL ESTATE PROJECTS
  - figure: 1,50,000+ | label: SQ FT OF FLOORING AND STONE

## SECTION: story

- theme: light
- layout: headline left, body right
- eyebrow: WHY PROCURO
- h2: India has no shortage of supply.
- body_1: Across the country, quarries, mills and producers make the materials India builds and manufactures with. What buyers lack is a clear view of it: who can supply what, at what quality, at what price, and how reliably.
- body_2: Procuro is building that view. It is a plant-level map of Indian manufacturing, sharpened by every order we handle and every check we run. We use it to match each requirement with the right supplier, for buyers in India and around the world.

## SECTION: ways

- theme: light
- h2: Two ways to work with us.
- sub: Let us run your procurement, or buy directly from our own supply.

### CARD: source (full width, shown first)

- accent: source
- logo: PROCURO. Source lockup
- label: NOW ONBOARDING PILOT PARTNERS
- h3: Your procurement team, extended.
- body: Whether you're buying in India or from India, we find, verify and manage the right suppliers for you.
- steps:
  - Find. | Suppliers matched on spec, capacity and price.
  - Verify. | Checked in-house or by independent labs.
  - Manage. | Quotes, orders and follow-through, one contact.
- button: BOOK A SPEND REVIEW -> /source#spend-review

### CARD: build

- accent: build
- logo: PROCURO. Build lockup
- image: [PLACEHOLDER: AAC STACKS ON A LIVE SITE]
- h3: On spec. On site. On time.
- body: Construction materials for developers and contractors, with a quality report on every delivery.
- button: REQUEST A QUOTE -> /build#quote

### CARD: minerals

- accent: minerals
- logo: PROCURO. Minerals lockup
- image: [PLACEHOLDER: TALC POWDER, CLOSE UP]
- h3: Graded to the mesh.
- body: Talc powder and quicklime for manufacturers, with a certificate of analysis on every lot.
- button: REQUEST A SAMPLE -> /minerals#sample

### CARD: stone

- accent: stone
- logo: PROCURO. Stone lockup
- image: [PLACEHOLDER: A SLAB UNDER RAKING LIGHT]
- h3: Chosen slab by slab.
- body: Natural stone selected for your project and sampled before you commit.
- button: ORDER SAMPLES -> /stone#samples

## SECTION: verification

- theme: light
- layout: text left, spec tag right
- eyebrow: HOW WE VERIFY
- h2: Verified means checked.
- body: Every material is checked in-house or by an independent lab, depending on what it is. The spec tag shows what was checked. Verified appears only when the batch has been.
- link: SEE HOW WE VERIFY -> /company/how-we-verify
- spec_tag:
  - header_left: PROCURO MINERALS
  - header_right: PR-MN-T92
  - header_colour: minerals
  - rows:
    - Material | Procuro Talc P92
    - Whiteness | 94.00
    - Mesh | 400
    - Certificate of analysis | Attached
    - Status | Verified
  - caption: EXAMPLE TAG

## SECTION: map

- theme: dark
- eyebrow: THE PROCURO MAP
- h2: A clearer view of supply.
- body: Procurement runs on phone calls, old relationships and guesswork. The map replaces guesswork with a view of capability, pricing and fulfilment, plant by plant. The longer we work together, the more the map works for you.
- items:
  - Capability. | Who can make what, to which specification.
  - Pricing. | What the right price looks like, plant by plant.
  - Fulfilment. | Who delivers what they promise, and when.

## SECTION: suppliers

- theme: light, white card
- eyebrow: FOR SUPPLIERS
- h2: Make what India builds with? Work with us.
- body: Manufacturers, quarries and producers who meet our checks reach buyers in India and abroad.
- button: SUPPLY WITH PROCURO -> /supply-with-procuro

## SECTION: faq

- theme: light
- eyebrow: QUESTIONS
- h2: What buyers ask first.
- faq:
  - q: What is Procuro India?
    a: Procuro India is a B2B procurement and supply company for India's builders and manufacturers and for buyers sourcing from India, with offices in Mumbai and Jaipur.
  - q: What does Procuro Source do?
    a: It finds, verifies and manages suppliers on a client's behalf, for buyers in India and for international buyers sourcing from India, starting with natural stone.
  - q: Which materials does Procuro supply?
    a: Masonry and blockwork, floors and surfaces, and specified lines through Procuro Build. Soapstone (talc) powder and quicklime through Procuro Minerals. Natural and engineered stone through Procuro Stone.
  - q: How does Procuro verify materials?
    a: Materials are checked in-house or by independent labs, depending on the material.

## SECTION: closing

- theme: dark
- layout: centred
- h2: Right partner.
- sub: Tell us what you need. We'll come back with the right supplier and a clear price.
- button_primary: REQUEST A QUOTE -> /contact#quote
- button_secondary: WHATSAPP US -> https://wa.me/919820180267

---

# PAGE: /source

- page_name: Procuro Source
- accent: source
- seo_title: Procuro Source · Managed procurement in and from India
- seo_description: We find, verify and manage the right suppliers for buyers in India and buyers sourcing from India. Now onboarding pilot partners.

## SECTION: hero

- theme: dark
- logo: PROCURO. Source lockup
- label: NOW ONBOARDING PILOT PARTNERS
- h1: Your procurement team, extended.
- sub: Whether you're buying in India or from India, we find, verify and manage the right suppliers for you.
- button_primary: BOOK A SPEND REVIEW -> #spend-review

## SECTION: what_source_does

- theme: light
- h2: We find, verify and manage. You decide.
- layout: three columns
- items:
  - Find. | We match your requirement to suppliers who can meet it on spec, capacity and price.
  - Verify. | We check suppliers and materials in-house or through independent labs, depending on what you're buying.
  - Manage. | We run quotes, orders and follow-through with one point of contact.
- note: Source doesn't sell Procuro's own stock. We work to find the supplier that fits your requirement.

## SECTION: paths

- theme: light
- h2: Two ways in.
- layout: two cards
- items:
  - h3: Buying in India.
    body: For manufacturers and developers who want better prices, steadier supply and fewer calls. We look at what you buy, find where a clearer view of supply can help, and manage it from quote to delivery.
    link: BOOK A SPEND REVIEW -> #spend-review
  - h3: Buying from India.
    body: For importers and project buyers sourcing from India. We find suppliers, check them at the plant, manage orders through to dispatch, and handle the export documentation. We're starting with natural stone.
    link: TALK TO US ABOUT SOURCING -> #spend-review

## SECTION: pilot_steps

- theme: light
- h2: How a pilot works.
- layout: numbered steps
- items:
  - 1 | Spend review. | A paid engagement to understand what you buy, from whom, in what volumes and at what price.
  - 2 | Supplier match. | We bring you suppliers matched to your requirement, with what we checked and how.
  - 3 | Quote and order. | You choose. We manage the order with you.
  - 4 | Review. | We look at the results together and decide what comes next.

## SECTION: proof

- theme: light
- h3: Who's behind Source.
- body: Procuro has supplied construction materials, minerals and stone since 2023, to 20+ clients and 30+ real estate projects. Source brings that experience to your procurement.

## SECTION: faq

- faq:
  - q: Is Procuro Source software?
    a: No. It's a service run by our team, working as an extension of yours.
  - q: Who is Source for?
    a: Indian manufacturers and developers buying in India, and international importers and project buyers sourcing from India.
  - q: How are suppliers verified?
    a: Through checks done in-house or by independent labs, depending on the material.
  - q: How do I start?
    a: Book a spend review. It's a paid engagement: we study what you buy, from whom and at what price, and show you where a clearer view of supply can help.

## SECTION: form

- form_id: spend-review
- vertical: source
- h2: Book a spend review.
- fields:
  - name | text | required
  - company | text | required
  - role | text
  - email | email | required
  - phone_or_whatsapp | tel | required
  - path | select | required | options: Buying in India, Buying from India
  - categories_you_buy | textarea | required
  - annual_volume_or_spend | text
  - country | text | shown only when path = Buying from India
  - notes | textarea | label: Anything we should know
- submit: BOOK A SPEND REVIEW
- confirmation: Thank you. We'll be in touch within one working day to scope your review.

---

# PAGE: /build

- page_name: Procuro Build
- accent: build
- seo_title: Procuro Build · AAC blocks, mortar, tiles and surfaces
- seo_description: AAC blocks, mortar, plaster, tiles and surfaces for developers and contractors in Mumbai, Pune and Ahmedabad, with a quality report on every delivery.

## SECTION: hero

- theme: dark
- logo: PROCURO. Build lockup
- h1: On spec. On site. On time.
- sub: Construction materials for developers and contractors, with a quality report on every delivery.
- button_primary: REQUEST A QUOTE -> #quote
- button_secondary: WHATSAPP US -> https://wa.me/919820180267
- image: [PLACEHOLDER: A LIVE SITE, BLACK AND WHITE]

## SECTION: proof_bar

- theme: dark
- items:
  - figure: 30+ | label: REAL ESTATE PROJECTS
  - figure: 1,000–1,500 m³ | label: OF AAC IN A RUNNING MONTH
  - figure: 150+ m³ | label: IN A SINGLE DAY
  - figure: 1,50,000+ | label: SQ FT OF FLOORING AND STONE

## SECTION: supply

- theme: light
- h2: What we supply.

### GROUP: masonry_and_blockwork

- h3: The category we run on live sites.
- label: MASONRY AND BLOCKWORK
- body: AAC blocks and joining mortar are our volume lines. Clay bricks and hollow concrete blocks are supplied to spec when the drawing calls for them.
- items: AAC blocks | Block-joining mortar | Clay bricks | Hollow concrete blocks | Ready-mix plaster | Gypsum

### GROUP: floors_and_surfaces

- h3: The look holds. The rate works.
- label: FLOORS AND SURFACES
- body: Tiles, sintered stone, SPC and quartz, plus natural marble, granite and sandstone, specified with you so the finish matches the design and the price fits the project.
- items: Full-body and GVT tiles | Sintered stone | SPC flooring | Quartz | Natural stone (links to /stone)

### GROUP: specified_to_the_drawing

- h3: When the drawing calls for it.
- label: SPECIFIED TO THE DRAWING
- body: The lines your façade, interiors and lighting teams will ask for, sourced to the consultant's make-list or the architect's chosen brand.
- items: Façade and structural glass | Adhesives, sealants and waterproofing | Paints | Interior and outdoor lighting | Stone décor for lobbies and sales galleries

## SECTION: who_we_serve

- theme: light
- h2: Built for site teams.
- items:
  - Developers' procurement teams | One desk for supply across every phase.
  - Contractors | Clear prices, and dispatches planned around your programme.
- note: We supply sites across Mumbai and MMR, Pune and Ahmedabad.

## SECTION: how_it_works

- theme: light
- h2: From spec to site.
- layout: numbered steps
- items:
  - 1 | Spec and sample. | Share the item, the brand if any, and the week's quantity. We confirm plant, lead time and a sample the same day.
  - 2 | Trial load. | The first dispatch is a measured lot. You confirm it. Then we scale.
  - 3 | Your calendar. | Masonry and plaster run against your pour and plaster programme.
  - 4 | At the gate. | Your coordinator gets vehicle details and the quality report before the truck arrives.
  - 5 | If a load is rejected. | Inspected the same day, attended within two hours in MMR, replaced or credited within two days.

## SECTION: commitments

- theme: dark
- h2: The same rules, every delivery.
- body: A quality report travels with every load. Brands are named when you specify them. Otherwise we supply from a short roster of ISI-certified makers.

## SECTION: faq

- faq:
  - q: Do you supply cement, steel or sand?
    a: No. Build supplies masonry and blockwork, floors and surfaces, and lines specified to the drawing.
  - q: Where do you supply?
    a: Mumbai and MMR, Pune and Ahmedabad. A rejected load is attended within two hours in MMR.
  - q: Which brands do you supply?
    a: The brand your specification names. If none is named, we supply to spec from a short roster of ISI-certified makers.
  - q: How fast do you reply?
    a: The same day, with plant, sample, lead time and a trial-load size.
  - q: How are commercial terms set?
    a: Project by project.

## SECTION: form

- form_id: quote
- vertical: build
- h2: Request a quote.
- fields:
  - material | text | required
  - brand | text | label: Brand (if specified)
  - first_week_quantity | text | required | label: First-week quantity and unit
  - site_city | select | required | options: Mumbai and MMR, Pune, Ahmedabad, Other
  - site_address | textarea | required
  - required_by | date
  - name | text | required
  - company | text | required
  - phone_or_whatsapp | tel | required
  - email | email | required
- submit: REQUEST A QUOTE
- confirmation: Thank you. We'll reply today with plant, sample, lead time and a trial-load size.

---

# PAGE: /minerals

- page_name: Procuro Minerals
- accent: minerals
- seo_title: Procuro Minerals · Talc powder and quicklime
- seo_description: Soapstone (talc) powder in three grades and quicklime from Nagaur limestone, with a certificate of analysis on every lot. Free samples.

## SECTION: hero

- theme: dark
- logo: PROCURO. Minerals lockup
- h1: Graded to the mesh.
- sub: Major and minor minerals, graded and documented for every dispatch.
- button_primary: REQUEST A SAMPLE -> #sample
- image: [PLACEHOLDER: TALC POWDER, CLOSE UP]

## SECTION: proof_bar

- theme: dark
- items:
  - figure: Every lot | label: CERTIFICATE OF ANALYSIS
  - figure: 0–1,000 | label: MESH
  - figure: 9,000 t | label: QUICKLIME A MONTH, UP TO
  - figure: 2023 | label: SUPPLYING SINCE

## SECTION: talc_series

- theme: light
- label: PROCURO TALC SERIES
- h2: Consistent input. Consistent output.
- body: Soapstone powder for emulsions, putties, primers and industrial coatings, supplied against your approved specification.
- grade_cards:
  - grade: P92 | tier: PREMIUM | code: PR-MN-T92 | use: Interior emulsions, wall putty and skim coats. | key_values: Whiteness 94.00 · Oil absorption 31.43 g/100 g | note: Lowest oil absorption in the range.
  - grade: I90 | tier: INDUSTRIAL | code: PR-MN-T90 | use: Anti-corrosion primers, epoxy and protective coatings. | key_values: SiO₂ 55.20% · Acid soluble 15.63% | note: Highest silica in the range.
  - grade: E85 | tier: ECONOMY | code: PR-MN-T85 | use: Economy primers, mid-coats and contract plants. | key_values: SiO₂ 55.20% · Brightness 85.20 | note: Full silica reinforcement at the best cost.
- table_title: Full parameters
- table:

| Parameter | P92 | I90 | E85 |
|---|---|---|---|
| Brightness | 92.00 | 90.40 | 85.20 |
| Whiteness | 94.00 | 91.80 | 87.00 |
| Oil absorption (g/100 g) | 31.43 | 35.52 | 32.43 |
| SiO₂ (%) | 32.50 | 55.20 | 55.20 |
| CaO (%) | 16.27 | 7.72 | 8.68 |
| MgO (%) | 24.13 | 28.12 | 27.40 |
| Al₂O₃ (%) | 0.35 | 0.35 | 0.35 |
| Fe₂O₃ (%) | 0.45 | 0.47 | 0.45 |
| LOI (%) | 27.72 | 11.63 | 14.40 |
| Bulk density (g/cc) | 0.58 | 0.58 | 0.58 |
| Specific gravity | 2.65 | 2.60 | 2.65 |
| Water absorption (mL/100 g) | 35.00 | 33.50 | 30.00 |
| Flow point (mL/100 g) | 102.00 | 110.00 | 78.00 |
| Acid soluble (%) | 28.50 | 15.63 | 18.50 |
| pH | 8.4 | 8.2 | 8.4 |

- note: 0 to 1,000 mesh. 40 kg PP or 1 MT HDPE bags. Custom grades built to your formulation.
- link: DOWNLOAD THE SPEC SHEET -> [spec sheet PDF]

## SECTION: quicklime

- theme: light
- label: QUICKLIME
- h2: Quicklime, documented lot by lot.
- body: From Nagaur limestone, Rajasthan, burned in a twin-shaft regenerative kiln.
- spec_rows:
  - CaO | [TO CONFIRM]
  - MgO | ≤ 1.5%
  - SiO₂ | ≤ 2.5%
  - S | ≤ 0.075%
  - Powder | 200, 250, 300 and 400 mesh
  - Lump | 0–5 mm, 5–25 mm, 10–60 mm
- note: Supply capacity of up to 9,000 tonnes a month.

## SECTION: who_we_serve

- theme: light
- h2: For manufacturers who work to spec.
- items:
  - Paint and coatings | The right talc grade for each formulation.
  - Steel | Quicklime sized for BOS and EAF operations.
  - Sugar | Quicklime for juice clarification.

## SECTION: how_it_works

- theme: light
- h2: Sample first. Then supply.
- items:
  - 1 | Share the grade, mesh, quantity and destination.
  - 2 | We send a sample with its certificate of analysis.
  - 3 | You approve it against your specification.
  - 4 | Every lot after that matches what you approved, with its certificate.

## SECTION: faq

- faq:
  - q: Which grades do you supply?
    a: The P92, I90 and E85 talc grades, quicklime in two CaO grades, and custom talc grades on request.
  - q: Do you provide a certificate of analysis?
    a: Yes, with every lot, as standard.
  - q: Are samples free?
    a: Yes. You pay only for delivery.
  - q: How is talc packed?
    a: In 40 kg PP bags or 1 MT double-layer HDPE bags.
  - q: How much quicklime can you supply?
    a: Up to 9,000 tonnes a month.

## SECTION: form

- form_id: sample
- vertical: minerals
- h2: Request a sample.
- fields:
  - product | select | required | options: Procuro Talc P92, Procuro Talc I90, Procuro Talc E85, Custom talc grade, Quicklime
  - mesh_or_size | text | required
  - quantity_mt | number | required | label: Quantity (MT)
  - destination | text | required
  - application | text
  - name | text | required
  - company | text | required
  - phone_or_whatsapp | tel | required
  - email | email | required
- submit: REQUEST A SAMPLE
- confirmation: Thank you. We'll be in touch within one working day.

---

# PAGE: /stone

- page_name: Procuro Stone
- accent: stone
- seo_title: Procuro Stone · Granite, marble, sandstone and more
- seo_description: 70+ natural stones in 10 finishes, plus engineered surfaces. Free samples and installation anywhere in India. Export enquiries welcome.

## SECTION: hero

- theme: dark
- logo: PROCURO. Stone lockup
- h1: Chosen slab by slab.
- sub: Natural stone selected for your project and sampled before you commit.
- button_primary: ORDER SAMPLES -> #samples
- image: [PLACEHOLDER: A SLAB UNDER RAKING LIGHT, FULL COLOUR]

## SECTION: proof_bar

- theme: dark
- items:
  - figure: 70+ | label: NATURAL STONES
  - figure: 10 | label: FINISHES, PLUS CNC
  - figure: 1,50,000+ | label: SQ FT OF FLOORING AND STONE SUPPLIED
  - figure: Free | label: SAMPLES
  - figure: Pan-India | label: INSTALLATION

## SECTION: natural_stone

- theme: light
- h2: Six families of natural stone.
- layout: six cards, each linking to /stone/[family]
- items:
  - family: Marble | count: 24 | examples: Indian Green, Udaipur Pink, Banswara White
  - family: Granite | count: 23 | examples: Absolute Black, Jalore Pink, Alaska Bianca
  - family: Sandstone | count: 12 | examples: Dholpur Beige, Kandla Grey, Jodhpur Pink
  - family: Limestone | count: 6 | examples: Kota Green, Jaisalmer Gold, Tandur Blue
  - family: Slate | count: 5 | examples: Zeera Grey, Rust, Shimla White
  - family: Basalt | count: 3 | examples: Amreli Grey, Bharuch, Rajasthan Black
- note: Blocks, slabs, tiles and pavers. Polished, honed, leathered, lappato, flamed, sand-blasted, shot-blasted, bush-hammered, split face, river-washed, or CNC-carved. Finishing on request. Installation anywhere in India.

## SECTION: gallery

- theme: dark
- layout: image grid
- images: [PLACEHOLDER: REAL SLABS, FINISHES AND FINISHED WORK, FULL COLOUR] x 6

## SECTION: engineered_surfaces

- theme: light
- h2: When the brief calls for uniformity.
- body: Engineered quartz, composite marble and composite terrazzo, for surfaces that need the same look from the first slab to the last.
- items:
  - Engineered quartz | Solid, galaxy, ice, veined and swirl series
  - Composite marble | Solid and swirl series
  - Composite terrazzo
- note: Each design is shown with its Procuro code (for example PR-EQ-014), not a name.

## SECTION: who_we_serve

- theme: light
- h2: For people who choose stone with care.
- items:
  - Architects | Stone specified to your design intent.
  - Interior designers | Finishes you can see and touch before you commit.
  - Developers' design teams | Consistent colour and finish across a whole project.
  - Importers and distributors | We're now taking export enquiries.

## SECTION: how_it_works

- theme: light
- h2: See it before you commit.
- items:
  - 1 | Tell us the project, the stone and the finish.
  - 2 | We shortlist slabs that fit.
  - 3 | You receive samples, free of charge; you pay only for delivery.
  - 4 | We cut, finish and dispatch the stone you approved, and install it if you need us to.

## SECTION: faq

- faq:
  - q: Can I see samples before ordering?
    a: Yes. Samples are free; you pay only for delivery.
  - q: Do you install?
    a: Yes, anywhere in India.
  - q: Do you hold stock?
    a: We hold material allocated to your project for you. We don't hold unsold slabs on speculation.
  - q: Do you offer custom finishes?
    a: Yes, including ten surface finishes and CNC-carved patterns.
  - q: Do you export?
    a: Yes. We're now taking export enquiries.

## SECTION: form

- form_id: samples
- vertical: stone
- h2: Order samples.
- fields:
  - stone | text | required | label: Stone type or name
  - finish | select | options: Polished, Honed, Leathered, Lappato, Flamed, Sand-blasted, Shot-blasted, Bush-hammered, Split face, River-washed, CNC-carved, Not sure
  - form | select | options: Slab, Tile, Paver, Block
  - project_type | text
  - project_location | text | required | label: Project city or country
  - approximate_area | text
  - installation_needed | select | options: Yes, No
  - name | text | required
  - company | text | required
  - phone_or_whatsapp | tel | required
  - email | email | required
- submit: ORDER SAMPLES
- confirmation: Thank you. We'll be in touch within one working day to arrange your samples.

---

# PAGE: /supply-with-procuro

- page_name: Supply with Procuro
- seo_title: Supply with Procuro · For manufacturers and quarries
- seo_description: Manufacturers, quarries and producers who meet our checks reach buyers in India and abroad. Tell us what you make.

## SECTION: hero

- theme: dark
- eyebrow: FOR SUPPLIERS
- h1: Make what India builds with? Work with us.
- sub: Manufacturers, quarries and producers who meet our checks reach buyers in India and abroad.
- button_primary: SUPPLY WITH PROCURO -> #supply

## SECTION: benefits

- theme: light
- h2: Buyers who know what they need.
- layout: four columns
- items:
  - Clear orders. | Requirements arrive with the specification, quantity and timeline already set.
  - Steady demand. | Developers, contractors and manufacturers who buy month after month.
  - New markets. | Access to buyers abroad as our export work begins.
  - One point of contact. | We coordinate with the buyer so you can focus on production.

## SECTION: criteria

- theme: light
- h2: What we look for.
- body: Consistent quality, honest capacity, documented specifications, and a willingness to be checked. We check in-house or through independent labs, depending on the material.

## SECTION: how_it_works

- theme: light
- h2: How it works.
- items:
  - 1 | Tell us what you make, where, and in what volumes.
  - 2 | We review your plant and your products.
  - 3 | A trial order shows the fit.
  - 4 | Regular orders follow.

## SECTION: form

- form_id: supply
- vertical: supplier
- h2: Supply with Procuro.
- fields:
  - company | text | required
  - products | textarea | required
  - plant_location | text | required | label: Plant location (state and city)
  - monthly_capacity | text
  - certifications | text | label: Certifications (ISI, ISO or others)
  - name | text | required
  - phone_or_whatsapp | tel | required
  - email | email | required
- submit: SUPPLY WITH PROCURO
- confirmation: Thank you. We'll review your details and get in touch.

---

# PAGE: /company

- page_name: Company
- seo_title: About Procuro India
- seo_description: Procuro India supplies construction materials, minerals and stone and runs managed procurement. A brand of Deravariya India Private Limited.

## SECTION: about

- theme: light
- eyebrow: ABOUT PROCURO
- h1: A clearer view of Indian supply.
- body_1: Procuro India is a procurement and supply company for India's builders and manufacturers, and for buyers sourcing from India. We started in 2023, supplying granite, and have grown into four arms. Procuro Source runs procurement on a client's behalf. Procuro Build, Procuro Minerals and Procuro Stone supply our own range.
- body_2: Everything we do runs on one idea: trust starts with visibility. We're building a plant-level map of Indian manufacturing, sharpened by every order we handle and every check we run, and we use it to match each requirement with the right supplier.

## SECTION: facts

- theme: dark
- items:
  - figure: 2023 | label: SUPPLYING SINCE
  - figure: 20+ | label: CLIENTS
  - figure: 30+ | label: REAL ESTATE PROJECTS
  - figure: 2 | label: OFFICES, MUMBAI AND JAIPUR

## SECTION: how_we_work

- theme: light
- h2: How we work.
- items:
  - Verified means checked. | In-house or by independent labs, depending on the material.
  - The same rules, every time. | Commitments that hold on every order, not just the first.
  - One point of contact. | From the first quote to the last delivery.
- link: SEE HOW WE VERIFY -> /company/how-we-verify

## SECTION: offices

- component: offices_full

## SECTION: closing

- theme: dark
- h2: Right material. Right price. Right partner.
- button_primary: REQUEST A QUOTE -> /contact#quote
- legal_line: Procuro India is a brand of Deravariya India Private Limited.

---

# PAGE: /company/how-we-verify

- page_name: How we verify
- seo_title: How Procuro verifies materials
- seo_description: Quality reports, certificates of analysis and samples: what "Verified" means for every Procuro material.

## SECTION: hero

- theme: dark
- h1: Verified means checked.
- sub: We check materials in-house or through independent labs, depending on what they are. "Verified" appears on a spec tag only when the batch has actually been checked.

## SECTION: by_vertical

- theme: light
- layout: three blocks, each with its vertical accent
- items:
  - vertical: build | h3: Procuro Build. | body: A quality report travels with every delivery. Supply comes from the brand you specify or from a short roster of ISI-certified makers. You confirm a first trial load before we scale.
  - vertical: minerals | h3: Procuro Minerals. | body: A certificate of analysis comes with every lot. For talc it covers brightness, whiteness, oil absorption, Fe₂O₃, LOI and pH. Every lot is matched to the specification you approved.
  - vertical: stone | h3: Procuro Stone. | body: Slabs are shortlisted for your project and sampled before you commit. Each product names its origin.

## SECTION: spec_tag_explainer

- theme: light
- h2: Reading a spec tag.
- spec_tag: same as the home page verification section, caption EXAMPLE TAG
- rows_explained:
  - Header | The vertical and the product code.
  - Material | The product and grade.
  - Key values | The figures that matter for this product.
  - Documents | The report or certificate that travels with it.
  - Status | Verified, only when the batch has been checked.

---

# PAGE: /contact

- page_name: Contact
- seo_title: Contact Procuro India · Mumbai and Jaipur
- seo_description: Request a quote, a sample or a spend review. Build replies the same day; everything else within one working day.

## SECTION: hero

- theme: dark
- h1: Tell us what you need.
- sub: Build replies the same day. Everything else gets a reply within one working day.

## SECTION: routes

- theme: light
- layout: four cards, each with its vertical accent
- items:
  - Source | BOOK A SPEND REVIEW -> /source#spend-review
  - Build | REQUEST A QUOTE -> /build#quote
  - Minerals | REQUEST A SAMPLE -> /minerals#sample
  - Stone | ORDER SAMPLES -> /stone#samples

## SECTION: form

- form_id: general
- anchor: quote
- vertical: general
- h2: Send us a message.
- fields:
  - name | text | required
  - company | text
  - email | email | required
  - phone_or_whatsapp | tel | required
  - area | select | required | options: Source, Build, Minerals, Stone, Supplying to Procuro, Other
  - message | textarea | required
- submit: SEND
- confirmation: Thank you. We'll be in touch within one working day.

## SECTION: direct

- email: sales@procuro.in
- phone: +91 98201 80267
- whatsapp: WHATSAPP US -> https://wa.me/919820180267

## SECTION: offices

- component: offices_full
- each_office_has: embedded map

---

# PAGE: /privacy

- page_name: Privacy policy
- status: draft for legal review against the Digital Personal Data Protection Act, 2023 and the IT Act
- h1: Privacy policy.
- sections:
  - Who we are | Procuro India is a brand of Deravariya India Private Limited, with offices in Mumbai and Jaipur. This policy explains how we handle personal data collected through procuro.in.
  - What we collect | Details you give us in forms (name, company, role, email, phone or WhatsApp number, site or delivery address, and your requirement), and basic technical data such as pages visited and device type, collected through cookies and analytics.
  - Why we use it | To reply to your enquiry, prepare quotes and samples, deliver orders, and improve the website. We do not sell your personal data.
  - Who we share it with | Only the people who need it to fulfil your request, such as logistics partners or a supplier handling your order, and service providers that run our website and email, under confidentiality.
  - How long we keep it | As long as needed for your enquiry or orders, and as required by law (for example, tax records).
  - Your rights | You can ask to access, correct or erase your personal data, or withdraw consent, by writing to [privacy contact email].
  - Cookies | We use essential cookies to run the site and analytics cookies to understand its use. You can decline non-essential cookies.
  - Grievances | [Name and designation of grievance officer], [email], [address]. We respond within the period the law requires.
  - Changes | We will post updates on this page with a revised date.

---

# PAGE: /terms

- page_name: Terms of use
- status: draft for legal review
- h1: Terms of use.
- sections:
  - Use of the site | procuro.in gives information about Procuro's services and products. Using the site means you accept these terms.
  - Product information | Specifications, grades and figures are given in good faith and may change. The specification agreed in your order and its accompanying documents (quality report or certificate of analysis) governs every supply.
  - Quotes and orders | Nothing on the site is an offer to sell. Prices, quantities, delivery and payment terms are set in a written quote or order, project by project.
  - Samples | Samples are free; delivery charges apply.
  - Intellectual property | The Procuro name, logo, text, photographs and documents on the site belong to Deravariya India Private Limited and may not be reused without permission.
  - Liability | We take care to keep the site accurate but do not guarantee it is error-free or always available. [Limitation of liability wording, for the lawyer.]
  - Third-party links | We are not responsible for external sites linked from procuro.in.
  - Governing law | These terms are governed by the laws of India, with courts at [Mumbai or Jaipur] having jurisdiction.
  - Contact | sales@procuro.in

---

# CMS DATA: product pages

These lists feed the family and product pages generated from the Products collection. Use the names exactly as written.

## COLLECTION: stone_natural

- route_pattern: /stone/[family]/[stone]
- seo_title_pattern: [Stone] · Procuro Stone
- granite: Absolute Black, Alaska Azul, Alaska Bianca, Alaska Oro, Ash Black, Black Galaxy, Black Markino, Blue Dunes, Coin Black, Desert Brown, Grey, Jalore Pink, Jhuparna, Kharda Red, Lakha Red, Majestic Black, Platinum Black, R Black, River White, Sivakasi Gold, Steel Grey, Tan Brown, Titanium
- marble: Abu Black, Agaria White, Ambaji Panther, Ambaji White, Andhi White, Aravalli Green, Aravalli Pink, Banswara White, Bhainslana Black, Cappuccino, Cherry Gold, Fantasy Brown, Green Alligator, Indian Green, Indian Panda, Jhanjhar, Katni Beige, Katni Green, Morwad White, Nijarna, Rainforest Brown, Rainforest Green, Udaipur Pink, White Fantasy
- limestone: Cuddapah, Jaisalmer Gold, Kota Green, Pink Limestone, Tandur Blue, Tandur Yellow
- sandstone: Agra Red, Autumn Brown, Beige Fossil, Dholpur Beige, Golden Teak, Ita Gold, Jodhpur Pink, Kandla Grey, Mandana Red, Mint, Rainbow, Sagar Black
- basalt: Amreli Grey, Bharuch, Rajasthan Black
- slate: Black, Rust, Shimla White, Silver Grey, Zeera Grey
- forms: Blocks, Slabs, Tiles, Pavers
- finishes: Polished, Honed, Leathered, Lappato, Flamed, Sand-blasted, Shot-blasted, Bush-hammered, Split face, River-washed, CNC-carved
- origin_rule: show origin only when confirmed for that product; a trade name is not proof of origin

## COLLECTION: stone_engineered

- engineered_quartz_series: Solid, Galaxy, Ice, Veined, Swirl
- composite_marble_series: Solid, Swirl
- composite_terrazzo: one series
- naming_rule: each design shown by Procuro code (PR-EQ-###), never by a design name

## COLLECTION: minerals

- route_pattern: /minerals/[product]/[grade]
- products: Procuro Talc P92, Procuro Talc I90, Procuro Talc E85, Quicklime
- data: use the tables in the /minerals page section above

## COLLECTION: build

- route_pattern: /build/[material]
- materials: AAC blocks, Block-joining mortar, Clay bricks, Hollow concrete blocks, Ready-mix plaster, Gypsum, Full-body and GVT tiles, Sintered stone, SPC flooring, Quartz, Façade and structural glass, Adhesives, sealants and waterproofing, Paints, Interior and outdoor lighting, Stone décor

---

# STRUCTURED DATA

- Organization: name Procuro India; legalName Deravariya India Private Limited; url https://procuro.in; email sales@procuro.in; telephone +91 98201 80267; addresses: offices_full (Mumbai, Jaipur)
- FAQPage: every `faq:` block on the page it appears on
- sitemap.xml: every route in this file
