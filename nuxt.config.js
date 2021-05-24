export default {
  srcDir: 'src',
  head: {
    title: 'yardstick-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // TODO is there a better way to load this?
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap' }
    ]
  },

  plugins: [
    '@/plugins/chartist',
    '@/plugins/fort-awesome',
    '@/plugins/vue-fragment',
    '@/plugins/tree-view'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
    'nuxt-animejs'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  proxy: {
    '/api': { 
      target: 'http://localhost:3001',
      pathRewrite: { '^/api/': '' }
    }
  },

  axios: {}
}
