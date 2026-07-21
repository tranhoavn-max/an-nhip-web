// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domain-agnostic: override via env when the custom domain arrives.
//   SITE_URL=https://annhip.vn BASE_PATH=/ npm run build
// Defaults target GitHub Pages project hosting.
const SITE = process.env.SITE_URL ?? 'https://tranhoavn-max.github.io';
const BASE = process.env.BASE_PATH ?? '/an-nhip-web';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [sitemap()],
});
