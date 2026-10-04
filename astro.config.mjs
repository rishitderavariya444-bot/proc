import { defineConfig, envField } from 'astro/config';
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
  env: {
    schema: {
      // Set in Vercel: Project settings > Environment Variables. Never commit it.
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      FORM_TO: envField.string({ context: 'server', access: 'public', default: 'sales@procuro.in' }),
      // Use a procuro.in sender once the domain is verified in Resend.
      FORM_FROM: envField.string({ context: 'server', access: 'public', default: 'Procuro website <onboarding@resend.dev>' }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
    // Pre-bundle Base UI so the dev server doesn't re-optimise mid-session.
    optimizeDeps: {
      include: ['@base-ui/react/navigation-menu', '@base-ui/react/dialog'],
    },
  },
});
