require('babel-polyfill')
module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  assetsDir: 'assets',
  outputDir: 'dist',
  devServer: {
    https: process.env.VUE_APP_MODE === 'DEV',
    host: process.env.VUE_APP_HOST_NAME,
    port: process.env.VUE_APP_HOST_NAME_PORT,
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_GATEWAY,
        ws: true,
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
        // https://github.com/iview/iview-admin/issues/841
      }
    }
  },
  transpileDependencies: [
    'iview',
    'axios',
    'tree-table-vue',
    'v-org-tree',
    'dsl-core',
    'moment',
    'fecha',
    'lodash'
  ],
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('iview-loader')
      .loader('iview-loader')
      .options({
        prefix: true
      })
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}
