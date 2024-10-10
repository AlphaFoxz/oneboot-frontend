// https://nuxt.com/docs/api/configuration/nuxt-config
const mode = process.env.NODE_ENV
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
  },
  ssr: false,
  css: ['@/assets/styles/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "@/assets/styles/respond.scss" as *;',
        },
      },
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
    build: {
      minify: 'esbuild',
    },
  },
  modules: ['@primevue/nuxt-module', '@nuxtjs/color-mode'],
  primevue: {
    components: {
      exclude: '*',
    },
  },
  compatibilityDate: '2024-10-10',
})
