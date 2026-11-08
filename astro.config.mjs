import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://verakrupickova.cz',
  output: 'static',
  integrations: [sitemap()],
});
