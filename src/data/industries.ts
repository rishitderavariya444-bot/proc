// Industries (docs/SITEMAP.md, docs/content/concise-copy.md "Industries").
// "What we supply" items reuse approved copy from the Build, Minerals, Stone
// and Source sections; nothing here is new product information.

import type { Vertical } from './site';
import { buildGroups } from './build';
import { talcGrades, quicklime } from './minerals';
import { whatsappMessages } from './site';

export interface SupplyItem {
  title: string;
  text: string;
  href: string;
  vertical: Vertical;
}

export interface Industry {
  slug: string;
  name: string;
  headline: string;
  line: string;
  vertical: Vertical;
  cta: { label: string; href: string };
  whatsappMessage: string;
  image: string;
  supply: SupplyItem[];
  audiences: { title: string; text: string }[];
  note?: string;
  links: { label: string; href: string; vertical: Vertical }[];
}

const group = (id: string) => buildGroups.find((g) => g.id === id)!;
const buildItem = (id: string): SupplyItem => ({
  title: group(id).name,
  text: group(id).body,
  href: `/build#${id}`,
  vertical: 'build',
});

const naturalStone: SupplyItem = {
  title: 'Natural stone',
  text: 'Marble, granite, sandstone, limestone, slate and basalt, in blocks, slabs, tiles and pavers. Samples are free, and we install anywhere in India.',
  href: '/stone#natural-stone',
  vertical: 'stone',
};

const engineered: SupplyItem = {
  title: 'Engineered surfaces',
  text: 'Engineered quartz, composite marble and composite terrazzo, for surfaces that need the same look from the first slab to the last.',
  href: '/stone#engineered',
  vertical: 'stone',
};

export const industries: Industry[] = [
  {
    slug: 'real-estate-construction',
    name: 'Real estate and construction',
    headline: 'Built for site teams.',
    line: 'Materials on spec and on schedule, for every phase.',
    vertical: 'build',
    cta: { label: 'Request a quote', href: '/build#quote' },
    whatsappMessage: whatsappMessages.build,
    image: 'Blockwork and flooring on a live residential site',
    supply: [buildItem('masonry-and-blockwork'), buildItem('floors-and-surfaces'), buildItem('specified-to-the-drawing'), naturalStone],
    audiences: [
      { title: "Developers' procurement teams", text: 'One desk for supply across every phase.' },
      { title: 'Contractors', text: 'Clear prices, and dispatches planned around your programme.' },
      { title: "Developers' design teams", text: 'Consistent colour and finish across a whole project.' },
    ],
    note: 'We supply sites across Mumbai and MMR, Pune and Ahmedabad.',
    links: [
      { label: 'Procuro Build', href: '/build', vertical: 'build' },
      { label: 'Procuro Stone', href: '/stone', vertical: 'stone' },
    ],
  },
  {
    slug: 'paints-coatings-manufacturing',
    name: 'Paints, coatings and manufacturing',
    headline: 'Consistent input. Consistent output.',
    line: 'Graded minerals your formulation can count on.',
    vertical: 'minerals',
    cta: { label: 'Request a sample', href: '/minerals#sample' },
    whatsappMessage: whatsappMessages.minerals,
    image: 'Talc powder, close up',
    supply: [
      ...talcGrades.map((g) => ({
        title: g.name,
        text: `${g.use} ${g.note}`,
        href: `/minerals/talc/${g.slug}`,
        vertical: 'minerals' as const,
      })),
      { title: quicklime.name, text: `${quicklime.body} ${quicklime.note}`, href: '/minerals#quicklime', vertical: 'minerals' },
    ],
    audiences: [
      { title: 'Paint and coatings', text: 'The right talc grade for each formulation.' },
      { title: 'Steel', text: 'Quicklime sized for BOS and EAF operations.' },
      { title: 'Sugar', text: 'Quicklime for juice clarification.' },
    ],
    note: 'A certificate of analysis comes with every lot. Samples are free; you pay only for delivery.',
    links: [{ label: 'Procuro Minerals', href: '/minerals', vertical: 'minerals' }],
  },
  {
    slug: 'architects-designers',
    name: 'Architects and designers',
    headline: 'For people who choose stone with care.',
    line: 'Natural and engineered surfaces, specified with you.',
    vertical: 'stone',
    cta: { label: 'Order samples', href: '/stone#samples' },
    whatsappMessage: whatsappMessages.stone,
    image: 'Stone samples laid out on a design table',
    supply: [naturalStone, engineered, buildItem('floors-and-surfaces'), buildItem('specified-to-the-drawing')],
    audiences: [
      { title: 'Architects', text: 'Stone specified to your design intent.' },
      { title: 'Interior designers', text: 'Finishes you can see and touch before you commit.' },
    ],
    note: 'Ten surface finishes plus CNC-carved patterns. Finishing on request.',
    links: [
      { label: 'Procuro Stone', href: '/stone', vertical: 'stone' },
      { label: 'Procuro Build', href: '/build', vertical: 'build' },
    ],
  },
  {
    slug: 'international-buyers',
    name: 'International buyers',
    headline: 'Sourcing from India, handled.',
    line: 'We map, verify and manage suppliers for you.',
    vertical: 'source',
    cta: { label: 'Book a sourcing call', href: '/source#brief' },
    whatsappMessage: whatsappMessages.source,
    image: 'Crated stone at the yard, ready for export',
    supply: [
      {
        title: 'Find',
        text: 'We match your requirement to suppliers who can meet it on spec, capacity and price.',
        href: '/source',
        vertical: 'source',
      },
      {
        title: 'Verify',
        text: "We check suppliers and materials in-house or through independent labs, depending on what you're buying.",
        href: '/services/quality-control',
        vertical: 'source',
      },
      {
        title: 'Manage',
        text: 'We run quotes, orders and follow-through with one point of contact, through to dispatch and the export documentation.',
        href: '/services/logistics',
        vertical: 'source',
      },
      { ...naturalStone, text: "We're starting with natural stone. " + naturalStone.text },
    ],
    audiences: [{ title: 'Importers and distributors', text: "We're now taking export enquiries." }],
    links: [{ label: 'Procuro Source', href: '/source', vertical: 'source' }],
  },
];
