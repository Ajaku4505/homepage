export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ajaku Portfolio - Koki',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'description', name: 'description', content: 'This is a portfolio site. From the design, photos and information on the car you are riding are updated from time to time.' || '' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'Ajaku Portfolio - Koki' },
      { hid: 'og:title', property: 'og:title', content: 'Ajaku Portfolio - Koki' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://ajaku.jp' },
      { hid: 'og:description', property: 'og:description', content: 'This is a portfolio site. From the design, photos and information on the car you are riding are updated from time to time.' },
      { hid: 'og:image', property: 'og:image', content: 'https://ajaku.jp/img/humbnail.jpg' },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Ajaku4505' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'img/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap' }

    ],

  },

  loading: '~/components/loading.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  script: [
    {
      src: '~/static/js/main.js'
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',

    ['@nuxtjs/google-gtag', {
      id: 'G-YM339ZZT16',
      debug: true,
    }]
    
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://ajaku.jp',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    splitChunks: {
      layouts: false,
      pages: true,
      commons: true
    }
  }
}
