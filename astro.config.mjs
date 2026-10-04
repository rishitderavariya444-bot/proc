import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://procuro.in',
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    sitemap({ filter: (page) => !page.includes('/styleguide') }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // Pre-bundle Base UI so the dev server doesn't re-optimise mid-session.
    optimizeDeps: {
      include: ['@base-ui/react/navigation-menu', '@base-ui/react/dialog'],
    },
  },
});
