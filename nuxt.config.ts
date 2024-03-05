// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/css/global.css'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/respond.scss" as *;',
        },
      },
    },
    esbuild: {
      // drop: ['console', 'debugger'],
    },
    build: {
      minify: 'esbuild',
    },
  },

  modules: ['@nuxt/content'],

  content: {},
})
