// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      title: 'Starlong',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Starlong\'s personal website' },
        { name: 'author', content: 'Starlong Lu' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },
  compatibilityDate: '2025-08-27',
  eslint: {
    config: {
      stylistic: {
        braceStyle: '1tbs',
      },
    },
  },
})
