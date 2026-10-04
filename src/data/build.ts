// Procuro Build (docs/content/procuro-website-content.md, PAGE: /build and
// COLLECTION: build). Per-material specifications are still to come; see
// docs/OPEN_ITEMS.md.

import { slugify } from './slug';

export interface BuildGroup {
  id: string;
  name: string;
  lead: string;
  body: string;
  /** Short line used on each material page in this group. */
  materialLine: string;
  materials: string[];
  /** Items listed in the group that link elsewhere rather than to a material page. */
  extraLinks?: { label: string; href: string }[];
}

export const buildGroups: BuildGroup[] = [
  {
    id: 'masonry-and-blockwork',
    name: 'Masonry and blockwork',
    lead: 'The category we run on live sites.',
    body: 'AAC blocks and joining mortar are our volume lines. Clay bricks and hollow concrete blocks are supplied to spec when the drawing calls for them.',
    materialLine: 'Supplied to spec for live sites, with a quality report on every delivery.',
    materials: ['AAC blocks', 'Block-joining mortar', 'Clay bricks', 'Hollow concrete blocks', 'Ready-mix plaster', 'Gypsum'],
  },
  {
    id: 'floors-and-surfaces',
    name: 'Floors and surfaces',
    lead: 'The look holds. The rate works.',
    body: 'Tiles, sintered stone, SPC and quartz, plus natural marble, granite and sandstone, specified with you so the finish matches the design and the price fits the project.',
    materialLine: 'Specified with you so the finish matches the design and the price fits the project.',
    materials: ['Full-body and GVT tiles', 'Sintered stone', 'SPC flooring', 'Quartz'],
    extraLinks: [{ label: 'Natural stone', href: '/stone' }],
  },
  {
    id: 'specified-to-the-drawing',
    name: 'Specified to the drawing',
    lead: 'When the drawing calls for it.',
    body: "The lines your façade, interiors and lighting teams will ask for, sourced to the consultant's make-list or the architect's chosen brand.",
    materialLine: "Sourced to the consultant's make-list or the architect's chosen brand.",
    materials: ['Façade and structural glass', 'Adhesives, sealants and waterproofing', 'Paints', 'Interior and outdoor lighting', 'Stone décor'],
  },
];

/** Volume lines get their own note on the material page. */
const volumeLines = ['AAC blocks', 'Block-joining mortar'];

export interface BuildMaterial {
  name: string;
  slug: string;
  group: BuildGroup;
  volumeLine: boolean;
}

export const buildMaterials: BuildMaterial[] = buildGroups.flatMap((group) =>
  group.materials.map((name) => ({
    name,
    slug: slugify(name),
    group,
    volumeLine: volumeLines.includes(name),
  })),
);

export const buildProof = [
  { figure: '30+', label: 'Real estate projects' },
  { figure: '1,000–1,500 m³', label: 'Of AAC in a running month' },
  { figure: '150+ m³', label: 'In a single day' },
  { figure: '1,50,000+', label: 'Sq ft of flooring and stone' },
];

export const buildAudiences = [
  { title: "Developers' procurement teams", text: 'One desk for supply across every phase.' },
  { title: 'Contractors', text: 'Clear prices, and dispatches planned around your programme.' },
];

export const buildSteps = [
  { title: 'Spec and sample.', text: "Share the item, the brand if any, and the week's quantity. We confirm plant, lead time and a sample the same day." },
  { title: 'Trial load.', text: 'The first dispatch is a measured lot. You confirm it. Then we scale.' },
  { title: 'Your calendar.', text: 'Masonry and plaster run against your pour and plaster programme.' },
  { title: 'At the gate.', text: 'Your coordinator gets vehicle details and the quality report before the truck arrives.' },
  { title: 'If a load is rejected.', text: 'Inspected the same day, attended within two hours in MMR, replaced or credited within two days.' },
];

export const buildFaqs = [
  { q: 'Do you supply cement, steel or sand?', a: 'No. Build supplies masonry and blockwork, floors and surfaces, and lines specified to the drawing.' },
  { q: 'Where do you supply?', a: 'Mumbai and MMR, Pune and Ahmedabad. A rejected load is attended within two hours in MMR.' },
  { q: 'Which brands do you supply?', a: 'The brand your specification names. If none is named, we supply to spec from a short roster of ISI-certified makers.' },
  { q: 'How fast do you reply?', a: 'The same day, with plant, sample, lead time and a trial-load size.' },
  { q: 'How are commercial terms set?', a: 'Project by project.' },
];
