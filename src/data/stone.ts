// Procuro Stone (docs/content/procuro-website-content.md, PAGE: /stone and
// COLLECTION: stone_natural). Origin is shown only once confirmed for a
// stone; a trade name is not proof of origin.

import { slugify } from './slug';

export interface StoneFamily {
  name: string;
  slug: string;
  /** Plural used in running text, e.g. "marbles". */
  plural: string;
  examples: string[];
  stones: string[];
}

export const stoneFamilies: StoneFamily[] = [
  {
    name: 'Marble',
    slug: 'marble',
    plural: 'marbles',
    examples: ['Indian Green', 'Udaipur Pink', 'Banswara White'],
    stones: ['Abu Black', 'Agaria White', 'Ambaji Panther', 'Ambaji White', 'Andhi White', 'Aravalli Green', 'Aravalli Pink', 'Banswara White', 'Bhainslana Black', 'Cappuccino', 'Cherry Gold', 'Fantasy Brown', 'Green Alligator', 'Indian Green', 'Indian Panda', 'Jhanjhar', 'Katni Beige', 'Katni Green', 'Morwad White', 'Nijarna', 'Rainforest Brown', 'Rainforest Green', 'Udaipur Pink', 'White Fantasy'],
  },
  {
    name: 'Granite',
    slug: 'granite',
    plural: 'granites',
    examples: ['Absolute Black', 'Jalore Pink', 'Alaska Bianca'],
    stones: ['Absolute Black', 'Alaska Azul', 'Alaska Bianca', 'Alaska Oro', 'Ash Black', 'Black Galaxy', 'Black Markino', 'Blue Dunes', 'Coin Black', 'Desert Brown', 'Grey', 'Jalore Pink', 'Jhuparna', 'Kharda Red', 'Lakha Red', 'Majestic Black', 'Platinum Black', 'R Black', 'River White', 'Sivakasi Gold', 'Steel Grey', 'Tan Brown', 'Titanium'],
  },
  {
    name: 'Sandstone',
    slug: 'sandstone',
    plural: 'sandstones',
    examples: ['Dholpur Beige', 'Kandla Grey', 'Jodhpur Pink'],
    stones: ['Agra Red', 'Autumn Brown', 'Beige Fossil', 'Dholpur Beige', 'Golden Teak', 'Ita Gold', 'Jodhpur Pink', 'Kandla Grey', 'Mandana Red', 'Mint', 'Rainbow', 'Sagar Black'],
  },
  {
    name: 'Limestone',
    slug: 'limestone',
    plural: 'limestones',
    examples: ['Kota Green', 'Jaisalmer Gold', 'Tandur Blue'],
    stones: ['Cuddapah', 'Jaisalmer Gold', 'Kota Green', 'Pink Limestone', 'Tandur Blue', 'Tandur Yellow'],
  },
  {
    name: 'Slate',
    slug: 'slate',
    plural: 'slates',
    examples: ['Zeera Grey', 'Rust', 'Shimla White'],
    stones: ['Black', 'Rust', 'Shimla White', 'Silver Grey', 'Zeera Grey'],
  },
  {
    name: 'Basalt',
    slug: 'basalt',
    plural: 'basalts',
    examples: ['Amreli Grey', 'Bharuch', 'Rajasthan Black'],
    stones: ['Amreli Grey', 'Bharuch', 'Rajasthan Black'],
  },
];

export const stoneForms = ['Blocks', 'Slabs', 'Tiles', 'Pavers'];

export const stoneFinishes = ['Polished', 'Honed', 'Leathered', 'Lappato', 'Flamed', 'Sand-blasted', 'Shot-blasted', 'Bush-hammered', 'Split face', 'River-washed', 'CNC-carved'];

export interface Stone {
  name: string;
  slug: string;
  family: StoneFamily;
  /** Confirmed origin only. Empty until confirmed. */
  origin?: string;
}

export const stones: Stone[] = stoneFamilies.flatMap((family) =>
  family.stones.map((name) => ({ name, slug: slugify(name), family })),
);

/** Display name, e.g. "Black" in Slate reads "Black slate". */
export function stoneTitle(stone: Stone) {
  const generic = ['Black', 'Grey', 'Rust', 'Mint', 'Rainbow'];
  return generic.includes(stone.name) ? `${stone.name} ${stone.family.name.toLowerCase()}` : stone.name;
}

export const engineeredSurfaces = [
  { name: 'Engineered quartz', series: ['Solid', 'Galaxy', 'Ice', 'Veined', 'Swirl'] },
  { name: 'Composite marble', series: ['Solid', 'Swirl'] },
  { name: 'Composite terrazzo', series: [] as string[] },
];

export const stoneProof = [
  { figure: '70+', label: 'Natural stones' },
  { figure: '10', label: 'Finishes, plus CNC' },
  { figure: '1,50,000+', label: 'Sq ft of flooring and stone supplied' },
  { figure: 'Free', label: 'Samples' },
  { figure: 'Pan-India', label: 'Installation' },
];

export const stoneAudiences = [
  { title: 'Architects', text: 'Stone specified to your design intent.' },
  { title: 'Interior designers', text: 'Finishes you can see and touch before you commit.' },
  { title: "Developers' design teams", text: 'Consistent colour and finish across a whole project.' },
  { title: 'Importers and distributors', text: "We're now taking export enquiries." },
];

export const stoneSteps = [
  { text: 'Tell us the project, the stone and the finish.' },
  { text: 'We shortlist slabs that fit.' },
  { text: 'You receive samples, free of charge; you pay only for delivery.' },
  { text: 'We cut, finish and dispatch the stone you approved, and install it if you need us to.' },
];

export const stoneFaqs = [
  { q: 'Can I see samples before ordering?', a: 'Yes. Samples are free; you pay only for delivery.' },
  { q: 'Do you install?', a: 'Yes, anywhere in India.' },
  { q: 'Do you hold stock?', a: "We hold material allocated to your project for you. We don't hold unsold slabs on speculation." },
  { q: 'Do you offer custom finishes?', a: 'Yes, including ten surface finishes and CNC-carved patterns.' },
  { q: 'Do you export?', a: "Yes. We're now taking export enquiries." },
];
