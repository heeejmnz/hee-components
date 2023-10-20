import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwindcss from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwindcss()]
});
