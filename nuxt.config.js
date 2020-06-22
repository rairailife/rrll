module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'rairailifelog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'rairai chang&apos;s life log' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: '/js/lazysizes/lazysizes.min.js' },
      { src: '/js/photoswipe/photoswipe.min.js' },
      { src: '/js/photoswipe/photoswipe-setup.js' },
      { src: '/js/photoswipe/photoswipe-ui-default.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Changa&display=swap' }
    ]
  },
  css: [
    '@/assets/style/reset.css',
    '@/assets/style/style.css'
    // '@/assets/style/main.scss'
  ],
  /*
  ** Customize the progress bar color
  ** [TBD] デフォルトでついてるローディングバーの設定
  */
  // loading: { color: '#C5545E' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

