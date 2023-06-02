import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx(), svelte()],
  output: "static",
  adapter: vercelStatic({
    analytics: true
  })
});