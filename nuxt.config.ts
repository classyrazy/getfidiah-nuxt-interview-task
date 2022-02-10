import { defineNuxtConfig } from "nuxt3";
import svgLoader from "vite-svg-loader";
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [svgLoader()]
  },
});
