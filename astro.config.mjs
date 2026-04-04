import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://diamanoj.com',
  markdown: {
    shikiConfig: {
      theme: 'css-variables'
    },
    remarkPlugins: [],
    // Preserve line breaks in markdown (important for poetry)
    breaks: true,
  }
});
