# Procuro design system

## Direction in one line
The site should feel like a materials company's own stock catalogue: real material photography, one confident typeface, plain surfaces and spec tags that look like the labels on Procuro's own lots. It must not look like a tech startup or an AI-generated template.

## Principles
1. **Material first.** Photography of stone, minerals, sites and yards does the emotional work. The UI stays quiet around it.
2. **One signature: the full stop.** The logo ends in a full stop, and every headline ends in one (a copy rule). Render the final full stop of each headline in the page's vertical accent. Nothing else in a headline is ever coloured, bolded or italicised.
3. **Spec tags carry the products.** Product, grade and stone cards are built like Procuro lot labels (see Components).
4. **Left-aligned and gridded.** No centred heroes, no centred paragraphs.
5. **Spend boldness once per page,** usually the hero. Everything else is calm.

## Colour

### Neutrals
| Token | Light theme | Dark theme | Use |
|---|---|---|---|
| `paper` | #FFFFFF | #000000 | Page background |
| `concrete` | #E8E9E5 | #1C1D1B | Alternate section background, panels |
| `line` | #CFD1CC | #333532 | Table rules, card edges (decorative only) |
| `line-strong` | #7E817C | #8A8D88 | Input borders, focus-adjacent edges |
| `ink-muted` | #50534E | #B3B5B0 | Captions, secondary text |
| `ink` | #000000 | #FFFFFF | Text, primary buttons |

Black and white match the two logo files exactly. Don't swap in tinted near-blacks or cream off-whites.

### Vertical accents (fixed by the client; don't change)
| Vertical | On light | On dark | Text on an accent fill |
|---|---|---|---|
| Source | #2F3E9E | #8391EA | White (light) / black (dark) |
| Build | #D9A21B for fills and the full stop only, never text; #8A6410 for text | #E3B23C | Always black |
| Minerals | #1F6F6B | #4FB3AC | White (light) / black (dark) |
| Stone | #A4553F | #DB8A6F | White (light) / black (dark) |

Rules:
- One accent per page. The home page and index pages may show all four, each on its own vertical's element.
- Accents appear on the headline full stop, links, vertical buttons, spec-tag header strips and the vertical lockup's full stop. They're never used as section backgrounds or behind body text.
- The logo letters are always black or white.
- Check contrast when accent text sits on `concrete`. If it falls below 4.5:1, use `ink` for small text.
- Master pages (Home, Company, Contact, Why Procuro) use `ink` for headline full stops.

## Typography
One family: **Archivo** (variable, with weight and width axes) from Fontsource. Load the width axis. Width is the expressive tool: expanded for headlines, normal for everything else, echoing the wide logo.

| Role | Width | Weight | Size (desktop / mobile) | Line height |
|---|---|---|---|---|
| Hero headline | 125 | 700 | clamp(48px, 7vw, 104px) | 1.0 |
| H1 | 125 | 700 | 64 / 40 | 1.05 |
| H2 | 115 | 650 | 44 / 30 | 1.1 |
| H3 | 100 | 600 | 26 / 22 | 1.2 |
| Body | 100 | 400 | 18 / 17 | 1.55 |
| Small, captions | 100 | 400 | 15 / 14 | 1.45 |
| Buttons, nav | 100 | 600 | 15 | 1 |
| Spec values | 100 | 500 | 16 | 1.4, with `tabular-nums` |

- Body line length: max 68 characters.
- Labels and captions are sentence case. Uppercase is reserved for buttons and nav (a copy rule), with modest tracking (0.04em).
- No monospace anywhere. Product codes such as PR-MN-T92 use Archivo with `tabular-nums`.

## Layout
- 12-column grid, max content width 1360px, 24px gutters (16px on mobile), 64px page margins on desktop.
- Sections are separated by space and surface changes (`paper` → `concrete` → black), not by divider lines. Lines appear only inside tables, forms and spec tags.
- Vertical rhythm: 128px between sections on desktop, 72px on mobile.
- Vary section layouts down a page; avoid stacking rows of identical cards.
- Radius: photos 0; buttons, inputs and spec tags 3px. No drop shadows.

### Home hero
```
┌──────────────────────────────────────────────────────────────┐
│ PROCURO.     Products  Services  Industries  Why  Company [QUOTE]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│              full-bleed material photograph                  │
│                                                              │
│ ┌──────────────────────────────────┐                         │
│ │ Right material.                  │  ← black band, expanded │
│ │ Right price.                     │    headline, white text │
│ │ Right partner.                   │                         │
│ │ one line      [GET A QUOTE]      │                         │
│ └──────────────────────────────────┘                         │
└──────────────────────────────────────────────────────────────┘
```

### Two doors (home section 2)
```
┌───────────────────────────────┬──────────────────────────────┐
│ Buy from our supply.          │ Source from India.           │
│ photo                         │ photo                        │
│ Build, Minerals, Stone        │ Procuro Source               │
│ [BROWSE PRODUCTS]             │ [EXPLORE SOURCE]             │
└───────────────────────────────┴──────────────────────────────┘
```
Two equal halves, each a full panel. The Source half uses the indigo full stop.

## Components
| Component | Built with | Notes |
|---|---|---|
| Header | Base UI Navigation Menu | Logo left, four dropdowns + Why Procuro, GET A QUOTE button right. Sticky; turns solid on scroll. |
| Mobile menu | Base UI Dialog | Full-screen, large type |
| Footer | Static | Black theme |
| Headline | Static | Wraps the final full stop in an accent `<span>` |
| Button | Static | Primary = ink fill; vertical pages use accent fill. Text only, no icons or arrows. |
| WhatsApp button | Static link | Official WhatsApp glyph; fixed bottom-right on mobile; pre-filled message per page |
| Spec tag | Static | 3px radius box. Solid accent header strip holding the product code and name, then a white body with key values as label/value pairs. Used for talc grades, stones and Build materials. |
| Proof bar | Static | Four figures in expanded Archivo with short labels below. No gradients or animated counters. |
| Process steps | Static | Numbered only because it's a real sequence (Procuro Source process) |
| FAQ | Base UI Accordion | Also outputs FAQPage JSON-LD |
| Gallery + lightbox | Base UI Dialog | Stone page; black theme |
| Tabs | Base UI Tabs | Spec tables with several grades |
| Form | Base UI Field, Select | Labels above inputs; inline errors that say how to fix the problem |
| Quote block | Static | Large text, attribution below. Placeholder until a real quote exists. |
| Image | Astro `<Picture>` | AVIF/WebP, lazy below the fold; captions in small sentence case |

## Motion
- One orchestrated moment: on the home page load, the hero headline's full stop appears last (a simple 300ms fade).
- Interactive feedback only: menus, accordions, lightbox and form states.
- No scroll-triggered fade-ups, no hover lift on cards, no parallax.
- Respect `prefers-reduced-motion` (disable the hero moment).

## Logo
- Rebuild `assets/logo/*.png` as SVG: wide-tracked geometric capitals, PROCURO, followed by a full stop. Match the PNG letterforms and spacing exactly by tracing or by outlining the matching font. Don't redraw or restyle it.
- Clear space: the height of the letter O on all sides.
- Vertical lockups: the wordmark with the vertical name beside it (e.g. "Stone"). Only the full stop takes the accent colour.

## Avoid (common tells of generated sites)
- Cream backgrounds with a high-contrast serif display
- Newspaper-style hairline rules everywhere
- Tracked all-caps eyebrow labels above headings
- Strings joined with middle dots in the UI
- Monospace data labels
- Arrows appended to buttons and links
- Gradient washes, glass effects, identical rounded cards with soft grey shadows
- 01 / 02 / 03 markers on content that isn't a sequence
- Decorative icon sets (Lucide, Heroicons) sprinkled through sections
- Fade-up entrance animation on every section
