// Procuro Minerals (docs/content/procuro-website-content.md, PAGE: /minerals).
// Grade tier labels are left out until the "PREMIUM" naming question in
// docs/OPEN_ITEMS.md is settled.

export interface TalcGrade {
  grade: string;
  slug: string;
  name: string;
  code: string;
  use: string;
  keyValues: { label: string; value: string }[];
  note: string;
}

export const talcGrades: TalcGrade[] = [
  {
    grade: 'P92',
    slug: 'p92',
    name: 'Procuro Talc P92',
    code: 'PR-MN-T92',
    use: 'Interior emulsions, wall putty and skim coats.',
    keyValues: [
      { label: 'Whiteness', value: '94.00' },
      { label: 'Oil absorption', value: '31.43 g/100 g' },
    ],
    note: 'Lowest oil absorption in the range.',
  },
  {
    grade: 'I90',
    slug: 'i90',
    name: 'Procuro Talc I90',
    code: 'PR-MN-T90',
    use: 'Anti-corrosion primers, epoxy and protective coatings.',
    keyValues: [
      { label: 'SiO₂', value: '55.20%' },
      { label: 'Acid soluble', value: '15.63%' },
    ],
    note: 'Highest silica in the range.',
  },
  {
    grade: 'E85',
    slug: 'e85',
    name: 'Procuro Talc E85',
    code: 'PR-MN-T85',
    use: 'Economy primers, mid-coats and contract plants.',
    keyValues: [
      { label: 'SiO₂', value: '55.20%' },
      { label: 'Brightness', value: '85.20' },
    ],
    note: 'Full silica reinforcement at the best cost.',
  },
];

/** Full parameters: [parameter, P92, I90, E85]. */
export const talcParameters: string[][] = [
  ['Brightness', '92.00', '90.40', '85.20'],
  ['Whiteness', '94.00', '91.80', '87.00'],
  ['Oil absorption (g/100 g)', '31.43', '35.52', '32.43'],
  ['SiO₂ (%)', '32.50', '55.20', '55.20'],
  ['CaO (%)', '16.27', '7.72', '8.68'],
  ['MgO (%)', '24.13', '28.12', '27.40'],
  ['Al₂O₃ (%)', '0.35', '0.35', '0.35'],
  ['Fe₂O₃ (%)', '0.45', '0.47', '0.45'],
  ['LOI (%)', '27.72', '11.63', '14.40'],
  ['Bulk density (g/cc)', '0.58', '0.58', '0.58'],
  ['Specific gravity', '2.65', '2.60', '2.65'],
  ['Water absorption (mL/100 g)', '35.00', '33.50', '30.00'],
  ['Flow point (mL/100 g)', '102.00', '110.00', '78.00'],
  ['Acid soluble (%)', '28.50', '15.63', '18.50'],
  ['pH', '8.4', '8.2', '8.4'],
];

export const talcNote = '0 to 1,000 mesh. 40 kg PP or 1 MT HDPE bags. Custom grades built to your formulation.';

export const quicklime = {
  name: 'Quicklime',
  body: 'From Nagaur limestone, Rajasthan, burned in a twin-shaft regenerative kiln.',
  note: 'Supply capacity of up to 9,000 tonnes a month.',
  chemistry: [
    ['CaO', '[TO CONFIRM]'],
    ['MgO', '≤ 1.5%'],
    ['SiO₂', '≤ 2.5%'],
    ['S', '≤ 0.075%'],
  ],
};

/** Quicklime is listed by form, from the sizes in the spec rows. */
export const quicklimeForms = [
  { slug: 'powder', name: 'Quicklime powder', sizeLabel: 'Mesh', sizes: ['200 mesh', '250 mesh', '300 mesh', '400 mesh'] },
  { slug: 'lump', name: 'Quicklime lump', sizeLabel: 'Size', sizes: ['0–5 mm', '5–25 mm', '10–60 mm'] },
];

export const mineralsProof = [
  { figure: 'Every lot', label: 'Certificate of analysis' },
  { figure: '0–1,000', label: 'Mesh' },
  { figure: '9,000 t', label: 'Quicklime a month, up to' },
  { figure: '2023', label: 'Supplying since' },
];

export const mineralsAudiences = [
  { title: 'Paint and coatings', text: 'The right talc grade for each formulation.' },
  { title: 'Steel', text: 'Quicklime sized for BOS and EAF operations.' },
  { title: 'Sugar', text: 'Quicklime for juice clarification.' },
];

export const mineralsSteps = [
  { text: 'Share the grade, mesh, quantity and destination.' },
  { text: 'We send a sample with its certificate of analysis.' },
  { text: 'You approve it against your specification.' },
  { text: 'Every lot after that matches what you approved, with its certificate.' },
];

export const mineralsFaqs = [
  { q: 'Which grades do you supply?', a: 'The P92, I90 and E85 talc grades, quicklime in two CaO grades, and custom talc grades on request.' },
  { q: 'Do you provide a certificate of analysis?', a: 'Yes, with every lot, as standard.' },
  { q: 'Are samples free?', a: 'Yes. You pay only for delivery.' },
  { q: 'How is talc packed?', a: 'In 40 kg PP bags or 1 MT double-layer HDPE bags.' },
  { q: 'How much quicklime can you supply?', a: 'Up to 9,000 tonnes a month.' },
];
