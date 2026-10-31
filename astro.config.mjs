import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://daniel-lang.netlify.app",
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
