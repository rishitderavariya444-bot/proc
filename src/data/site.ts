export type Vertical = 'source' | 'build' | 'minerals' | 'stone';

export const site = {
  name: 'Procuro India',
  url: 'https://procuro.in',
  legalName: 'Deravariya India Private Limited',
  tagline: 'Right material. Right price. Right partner.',
  legalLine: 'Procuro India is a brand of Deravariya India Private Limited.',
  email: 'sales@procuro.in',
  phone: '+91 98201 80267',
  phoneHref: 'tel:+919820180267',
  whatsappNumber: '919820180267',
  offices: [
    {
      city: 'Mumbai',
      short: '5L-530, Mastermind IV, Royal Palms, Goregaon East, Mumbai 400065',
      full: '5L-530, 5th Floor, Mastermind IV, Royal Palms, Aarey Milk Colony, Goregaon East, Mumbai, Maharashtra 400065',
    },
    {
      city: 'Jaipur',
      short: 'Villa No. 27, Kedia Nikunj Vilas, Kalwad Road, Kanakpura, Jaipur 302012',
      full: 'Villa No. 27, Kedia Nikunj Vilas, Kalwad Road, Near Narayana e-Techno School, Kanakpura, Jaipur, Rajasthan 302012',
    },
  ],
};

export const whatsappMessages = {
  default: "Hi Procuro, I'd like to know more about your services.",
  build: "Hi Procuro, I'd like a quote for construction materials.",
  minerals: "Hi Procuro, I'd like to request a mineral sample.",
  stone: "Hi Procuro, I'd like to see stone samples.",
  source: "Hi Procuro, I'd like help sourcing from India.",
  suppliers: "Hi Procuro, I'd like to supply to Procuro.",
  product: (name: string) => `Hi Procuro, I'm interested in ${name}.`,
};

export function whatsappHref(message: string = whatsappMessages.default) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface NavLink {
  label: string;
  href: string;
  vertical?: Vertical;
}

export interface NavGroup {
  label: string;
  href?: string;
  links?: NavLink[];
}

export const mainNav: NavGroup[] = [
  {
    label: 'Products',
    links: [
      { label: 'Build', href: '/build', vertical: 'build' },
      { label: 'Minerals', href: '/minerals', vertical: 'minerals' },
      { label: 'Stone', href: '/stone', vertical: 'stone' },
      { label: 'All products', href: '/products' },
    ],
  },
  {
    label: 'Services',
    links: [
      { label: 'Procuro Source', href: '/source', vertical: 'source' },
      { label: 'Quality control', href: '/services/quality-control' },
      { label: 'Logistics and export', href: '/services/logistics' },
      { label: 'All services', href: '/services' },
    ],
  },
  {
    label: 'Industries',
    links: [
      { label: 'Real estate and construction', href: '/industries/real-estate-construction' },
      { label: 'Paints, coatings and manufacturing', href: '/industries/paints-coatings-manufacturing' },
      { label: 'Architects and designers', href: '/industries/architects-designers' },
      { label: 'International buyers', href: '/industries/international-buyers' },
      { label: 'All industries', href: '/industries' },
    ],
  },
  { label: 'Why Procuro', href: '/why-procuro' },
  {
    label: 'Company',
    links: [
      { label: 'About', href: '/company' },
      { label: 'Certifications', href: '/company/certifications' },
      { label: 'For suppliers', href: '/suppliers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const quoteHref = '/contact';
