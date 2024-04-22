// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/docs/guide/concepts/rendering#client-side-rendering
  // ssr: false,
  // https://nuxt.com/docs/api/nuxt-config#css
  css: ["~/assets/css/index.css"],

  // https://devtools.nuxt.com/guide/getting-started#auto-install
  devtools: { enabled: true },
  modules: [
    // https://nuxt.com/modules/tailwindcss
    // https://tailwindcss.com/
    "@nuxtjs/tailwindcss",
    // https://content.nuxt.com/get-started/installation#add-to-a-project
    "@nuxt/content",
    // https://color-mode.nuxtjs.org/#setup
    "@nuxtjs/color-mode",
    // https://nuxt.com/modules/vueuse
    "@vueuse/nuxt",
    // https://image.nuxt.com/get-started/installation
    "@nuxt/image",
  ],

  // https://tailwindcss.nuxtjs.org/getting-started/configuration
  tailwindcss: {
    config: {
      darkMode: "class",
    },
  },
  // https://tailwindcss.nuxtjs.org/examples/dark-mode
  colorMode: {
    classSuffix: "",
  },
});
