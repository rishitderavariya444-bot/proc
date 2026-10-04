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
  { path: 'why-procuro', title: 'Why Procuro', headline: 'India has no shortage of supply.', line: 'What buyers lack is a clear view of it. Procuro gives you that view.', stage: 7 },
  { path: 'company', title: 'About Procuro', headline: 'A clearer view of Indian supply.', line: 'Procurement and supply from Mumbai and Jaipur since 2023.', stage: 7 },
  { path: 'company/certifications', title: 'Certifications', headline: 'Registered and accountable.', stage: 7 },
  { path: 'suppliers', title: 'For suppliers', headline: 'Make what India builds with? Work with us.', line: 'Steady orders from buyers who know what they need.', stage: 7 },
  { path: 'contact', title: 'Contact', headline: 'Tell us what you need.', line: 'Pick a route and we reply within one working day.', stage: 8 },
  { path: 'privacy', title: 'Privacy policy', headline: 'Privacy policy.', stage: 8 },
  { path: 'terms', title: 'Terms of use', headline: 'Terms of use.', stage: 8 },
];
