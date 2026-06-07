import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eclectic-muffin-1e6f44.netlify.app',
  integrations: [sitemap()]
});