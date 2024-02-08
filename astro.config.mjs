import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://apolunar.dev',
  integrations: [mdx(), sitemap(), icon(), robotsTxt()],
  output: "server",
  adapter: cloudflare({ mode: "directory" })
});