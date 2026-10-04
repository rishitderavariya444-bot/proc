// Services copy: docs/content/concise-copy.md (Procuro Source, Quality
// control, Logistics and export), with fuller lines from the /source and
// /company/how-we-verify pages of docs/content/procuro-website-content.md.

export const services = [
  {
    name: 'Procuro Source',
    vertical: 'source' as const,
    href: '/source',
    headline: 'Your procurement team in India.',
    line: 'We find, verify and manage suppliers. You decide.',
    image: 'Inspection at a supplier plant',
    cta: 'Explore Source',
  },
  {
    name: 'Quality control',
    href: '/services/quality-control',
    headline: 'Verified means checked.',
    line: 'Every supplier and every order, inspected to spec.',
    image: 'Inspector checking a slab against its spec tag',
    cta: 'See how we verify',
  },
  {
    name: 'Logistics and export',
    href: '/services/logistics',
    headline: 'From the plant to your door.',
    line: 'Delivery across India and export to your port.',
    image: 'A loaded truck leaving the yard',
    cta: 'See logistics',
  },
];

export const sourcePillars = [
  { title: 'Find.', text: 'We match your requirement to suppliers who can meet it on spec, capacity and price.' },
  { title: 'Verify.', text: "We check suppliers and materials in-house or through independent labs, depending on what you're buying." },
  { title: 'Manage.', text: 'We run quotes, orders and follow-through with one point of contact.' },
];

export const sourceScope = ['Supplier mapping', 'Outreach', 'Negotiation', 'Inspection', 'Delivery'];

export const sourcePaths = [
  {
    title: 'Buying in India.',
    text: 'For manufacturers and developers who want better prices, steadier supply and fewer calls. We look at what you buy, find where a clearer view of supply can help, and manage it from quote to delivery.',
  },
  {
    title: 'Buying from India.',
    text: "For importers and project buyers sourcing from India. We find suppliers, check them at the plant, manage orders through to dispatch, and handle the export documentation. We're starting with natural stone.",
  },
];

export const sourceProcess = ['Brief', 'Shortlist', 'Samples', 'Order', 'Inspect', 'Ship'].map((title) => ({ title: `${title}.` }));

export const pilotSteps = [
  { title: 'Spend review.', text: 'A paid engagement to understand what you buy, from whom, in what volumes and at what price.' },
  { title: 'Supplier match.', text: 'We bring you suppliers matched to your requirement, with what we checked and how.' },
  { title: 'Quote and order.', text: 'You choose. We manage the order with you.' },
  { title: 'Review.', text: 'We look at the results together and decide what comes next.' },
];

export const sourceFaqs = [
  { q: 'Is Procuro Source software?', a: "No. It's a service run by our team, working as an extension of yours." },
  { q: 'Who is Source for?', a: 'Indian manufacturers and developers buying in India, and international importers and project buyers sourcing from India.' },
  { q: 'How are suppliers verified?', a: 'Through checks done in-house or by independent labs, depending on the material.' },
  { q: "Does Source sell Procuro's own stock?", a: 'No. We work to find the supplier that fits your requirement.' },
];

export const verifyByVertical = [
  {
    vertical: 'build' as const,
    name: 'Procuro Build',
    text: 'A quality report travels with every delivery. Supply comes from the brand you specify or from a short roster of ISI-certified makers. You confirm a first trial load before we scale.',
  },
  {
    vertical: 'minerals' as const,
    name: 'Procuro Minerals',
    text: 'A certificate of analysis comes with every lot. For talc it covers brightness, whiteness, oil absorption, Fe₂O₃, LOI and pH. Every lot is matched to the specification you approved.',
  },
  {
    vertical: 'stone' as const,
    name: 'Procuro Stone',
    text: 'Slabs are shortlisted for your project and sampled before you commit.',
  },
];

export const specTagRows = [
  { label: 'Header', text: 'The vertical and the product code.' },
  { label: 'Material', text: 'The product and grade.' },
  { label: 'Key values', text: 'The figures that matter for this product.' },
  { label: 'Documents', text: 'The report or certificate that travels with it.' },
  { label: 'Status', text: 'Verified, only when the batch has been checked.' },
];
