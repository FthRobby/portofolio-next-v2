// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/device',
    // '@morev/vue-transitions/nuxt',
  ],

  devtools: { enabled: true },

  experimental: {
    typedPages: true,
    viewTransition: true,
  },

  imports: {
    dirs: [
      'composables/**',
    ],
  },

  colorMode: {
    classSuffix: '',
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  fonts: {
    families: [
      { name: 'Satoshi', provider: 'fontshare', weights: [400, 500, 600, 700] },
      { name: 'Clash Display', provider: 'fontshare', weights: [300, 400, 500, 600, 700], subsets: ['latin'] },
      { name: 'JetBrains Mono', provider: 'fontsource', weights: [300, 400], subsets: ['latin'] },
    ],
  },

  runtimeConfig: {
    resendApiKey: '',
  },

  content: {

  },

  app: {
    head: {
      titleTemplate: 'frobby',
      title: 'Fatah Robby',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
    pageTransition: false,
  },

  compatibilityDate: '2025-01-24',

  routeRules: {
    // CV
    '/cv': { redirect: '/cv.pdf' },
    '/cv-btc': { redirect: '/cv-btc.pdf' },
    '/cv-2024': { redirect: '/cv-2024.pdf' },
    // CV aliases
    '/resume': { redirect: '/cv.pdf' },
    '/resume-btc': { redirect: '/cv-btc.pdf' },
    '/resume-2024': { redirect: '/cv-2024.pdf' },
    // Old site
    '/2023': { redirect: '' },
    // External links
    '/github': { redirect: 'https://github.com/fthrobby' },
    '/linkedin': { redirect: 'https://www.linkedin.com/in/mckenzo' },
  },
})
