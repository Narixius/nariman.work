export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nariman Movaffaghi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: "Nariman Movaffaghi's personal portfolio",
        name: "Nariman Movaffaghi's personal portfolio",
        content: "Nariman Movaffaghi's personal portfolio"
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/app.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/squidex'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/dotenv'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    ['vue-scrollto/nuxt', { duration: 500 }]
  ],
  styleResources: {
    scss: ['assets/variables.scss']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
