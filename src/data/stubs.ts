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
  { path: 'contact', title: 'Contact', headline: 'Tell us what you need.', line: 'Pick a route and we reply within one working day.', stage: 8 },
  { path: 'privacy', title: 'Privacy policy', headline: 'Privacy policy.', stage: 8 },
  { path: 'terms', title: 'Terms of use', headline: 'Terms of use.', stage: 8 },
];
