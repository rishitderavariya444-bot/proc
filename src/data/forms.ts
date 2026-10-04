// Form definitions (docs/SITEMAP.md "Forms", field detail from
// docs/content/procuro-website-content.md). Submissions go to sales@procuro.in
// through the enquiry action (src/actions/index.ts).

import type { Vertical } from './site';

export type FieldType = 'text' | 'email' | 'tel' | 'number' | 'date' | 'textarea' | 'select';

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  /** Span the full width of the form grid. */
  wide?: boolean;
  autoComplete?: string;
}

export interface FormDefinition {
  id: string;
  title: string;
  vertical?: Vertical;
  fields: FormField[];
  submit: string;
  confirmation: string;
}

const contactFields: FormField[] = [
  { name: 'name', label: 'Name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'company', label: 'Company', type: 'text', required: true, autoComplete: 'organization' },
  { name: 'phone', label: 'Phone or WhatsApp', type: 'tel', required: true, autoComplete: 'tel' },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
];

export const forms = {
  quote: {
    id: 'quote',
    title: 'Request a quote.',
    vertical: 'build',
    fields: [
      { name: 'material', label: 'Material', type: 'text', required: true },
      { name: 'brand', label: 'Brand (if specified)', type: 'text' },
      { name: 'quantity', label: 'First-week quantity and unit', type: 'text', required: true },
      { name: 'site_city', label: 'Site city', type: 'select', required: true, options: ['Mumbai and MMR', 'Pune', 'Ahmedabad', 'Other'] },
      { name: 'site_address', label: 'Site address', type: 'textarea', required: true, wide: true },
      { name: 'required_by', label: 'Required by', type: 'date' },
      ...contactFields,
    ],
    submit: 'Request a quote',
    confirmation: "Thank you. We'll reply today with plant, sample, lead time and a trial-load size.",
  },
  sample: {
    id: 'sample',
    title: 'Request a sample.',
    vertical: 'minerals',
    fields: [
      { name: 'product', label: 'Product', type: 'select', required: true, options: ['Procuro Talc P92', 'Procuro Talc I90', 'Procuro Talc E85', 'Custom talc grade', 'Quicklime'] },
      { name: 'mesh_or_size', label: 'Mesh or size', type: 'text', required: true },
      { name: 'quantity_mt', label: 'Quantity (MT)', type: 'number', required: true },
      { name: 'destination', label: 'Delivery location', type: 'text', required: true },
      { name: 'application', label: 'Intended use', type: 'text', wide: true },
      ...contactFields,
    ],
    submit: 'Request a sample',
    confirmation: "Thank you. We'll be in touch within one working day.",
  },
  samples: {
    id: 'samples',
    title: 'Order samples.',
    vertical: 'stone',
    fields: [
      { name: 'stone', label: 'Stone type or name', type: 'text', required: true },
      { name: 'finish', label: 'Finish', type: 'select', options: ['Polished', 'Honed', 'Leathered', 'Lappato', 'Flamed', 'Sand-blasted', 'Shot-blasted', 'Bush-hammered', 'Split face', 'River-washed', 'CNC-carved', 'Not sure'] },
      { name: 'form', label: 'Form', type: 'select', options: ['Slab', 'Tile', 'Paver', 'Block'] },
      { name: 'project_type', label: 'Project type', type: 'text' },
      { name: 'project_location', label: 'Project city or country', type: 'text', required: true },
      { name: 'approximate_area', label: 'Approximate area', type: 'text' },
      { name: 'installation_needed', label: 'Installation needed', type: 'select', options: ['Yes', 'No'] },
      ...contactFields,
    ],
    submit: 'Order samples',
    confirmation: "Thank you. We'll be in touch within one working day to arrange your samples.",
  },
  brief: {
    id: 'brief',
    title: 'Send us your brief.',
    vertical: 'source',
    fields: [
      { name: 'need', label: 'What you need', type: 'textarea', required: true, wide: true },
      { name: 'quantity', label: 'Quantity', type: 'text', required: true },
      { name: 'country', label: 'Destination country', type: 'text', required: true, autoComplete: 'country-name' },
      ...contactFields,
    ],
    submit: 'Send brief',
    confirmation: "Thank you. We'll be in touch within one working day.",
  },
  supplier: {
    id: 'supplier',
    title: 'Supply with Procuro.',
    fields: [
      { name: 'company', label: 'Company', type: 'text', required: true, autoComplete: 'organization' },
      { name: 'products', label: 'Products you make', type: 'textarea', required: true, wide: true },
      { name: 'plant_location', label: 'Plant location (state and city)', type: 'text', required: true },
      { name: 'monthly_capacity', label: 'Monthly capacity', type: 'text' },
      { name: 'certifications', label: 'Certifications (ISI, ISO or others)', type: 'text', wide: true },
      { name: 'name', label: 'Name', type: 'text', required: true, autoComplete: 'name' },
      { name: 'phone', label: 'Phone or WhatsApp', type: 'tel', required: true, autoComplete: 'tel' },
      { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
    ],
    submit: 'Apply to supply',
    confirmation: "Thank you. We'll review your details and get in touch.",
  },
  general: {
    id: 'general',
    title: 'Send us a message.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true, autoComplete: 'name' },
      { name: 'company', label: 'Company', type: 'text', autoComplete: 'organization' },
      { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
      { name: 'phone', label: 'Phone or WhatsApp', type: 'tel', required: true, autoComplete: 'tel' },
      { name: 'route', label: 'What is this about?', type: 'select', required: true, options: ['Buying materials: Build', 'Buying materials: Minerals', 'Buying materials: Stone', 'Sourcing from India', 'Supplying to Procuro', 'Something else'], wide: true },
      { name: 'need', label: 'What you need', type: 'textarea', required: true, wide: true },
      { name: 'quantity', label: 'Quantity', type: 'text' },
      { name: 'location', label: 'Delivery location or destination', type: 'text' },
    ],
    submit: 'Send message',
    confirmation: "Thank you. We'll be in touch within one working day.",
  },
} satisfies Record<string, FormDefinition>;

export type FormId = keyof typeof forms;
