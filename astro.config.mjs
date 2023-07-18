import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  output: 'static',
  adapter: vercelStatic(),
  integrations: [sitemap(), mdx()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});