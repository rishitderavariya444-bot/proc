// Pages not built yet. Each gets a holding page so every link resolves.
// Remove an entry when its real page is added (Stages 4–8).
// Headlines and lines are the hero copy from docs/content/concise-copy.md.

import type { Vertical } from './site';

export interface Stub {
  path: string;
  title: string;
  headline: string;
  line?: string;
  vertical?: Vertical;
  stage: number;
}

export const stubs: Stub[] = [
  { path: 'services', title: 'Services', headline: 'How we deliver.', line: 'Procuro Source, quality control, and logistics and export.', stage: 5 },
  { path: 'source', title: 'Procuro Source', headline: 'Your procurement team in India.', line: 'We find, verify and manage suppliers. You decide.', vertical: 'source', stage: 5 },
  { path: 'services/quality-control', title: 'Quality control', headline: 'Verified means checked.', line: 'Every supplier and every order, inspected to spec.', stage: 5 },
  { path: 'services/logistics', title: 'Logistics and export', headline: 'From the plant to your door.', line: 'Delivery across India and export to your port.', stage: 5 },
  { path: 'industries', title: 'Industries', headline: 'Who we work with.', line: 'Developers, manufacturers, designers and international buyers.', stage: 6 },
  { path: 'industries/real-estate-construction', title: 'Real estate and construction', headline: 'Built for site teams.', line: 'Materials on spec and on schedule, for every phase.', stage: 6 },
  { path: 'industries/paints-coatings-manufacturing', title: 'Paints, coatings and manufacturing', headline: 'Consistent input. Consistent output.', line: 'Graded minerals your formulation can count on.', stage: 6 },
  { path: 'industries/architects-designers', title: 'Architects and designers', headline: 'For people who choose stone with care.', line: 'Natural and engineered surfaces, specified with you.', stage: 6 },
  { path: 'industries/international-buyers', title: 'International buyers', headline: 'Sourcing from India, handled.', line: 'We map, verify and manage suppliers for you.', stage: 6 },
  { path: 'why-procuro', title: 'Why Procuro', headline: 'India has no shortage of supply.', line: 'What buyers lack is a clear view of it. Procuro gives you that view.', stage: 7 },
  { path: 'company', title: 'About Procuro', headline: 'A clearer view of Indian supply.', line: 'Procurement and supply from Mumbai and Jaipur since 2023.', stage: 7 },
  { path: 'company/certifications', title: 'Certifications', headline: 'Registered and accountable.', stage: 7 },
  { path: 'suppliers', title: 'For suppliers', headline: 'Make what India builds with? Work with us.', line: 'Steady orders from buyers who know what they need.', stage: 7 },
  { path: 'contact', title: 'Contact', headline: 'Tell us what you need.', line: 'Pick a route and we reply within one working day.', stage: 8 },
  { path: 'privacy', title: 'Privacy policy', headline: 'Privacy policy.', stage: 8 },
  { path: 'terms', title: 'Terms of use', headline: 'Terms of use.', stage: 8 },
];
