// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://larico.dev",
  build: {
    format: "file",
  },
  output: "server",
  adapter: vercel(),

  integrations: [mdx(), sitemap()],
});
