//docs/vite.config.js
import { defineConfig } from "vite";
import dotenv from "dotenv";
dotenv.config(); // load env vars from .env

export default defineConfig({
  resolve: {
    alias: {
      // "./VPNavBarSearch.vue": "vitepress-plugin-search/src/Search.vue",
    },
  },
});