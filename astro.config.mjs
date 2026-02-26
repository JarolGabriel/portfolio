// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://portfolio-lake-three-43.vercel.app",

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
      fallbackType: "redirect",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
