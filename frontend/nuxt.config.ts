export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      strapiBaseURL: process.env.STRAPI_URL || 'http://localhost:1337'
    }
  },
   nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:1337/api',
        changeOrigin: true
      }
    }
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js'
  }
})