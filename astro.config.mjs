import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import vercelStatic from '@astrojs/vercel/static';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), svelte(), image()],
  output: "static",
  adapter: vercelStatic({
    analytics: true
  })
});