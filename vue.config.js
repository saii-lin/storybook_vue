
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  publicPath: '/',
  productionSourceMap: false, // false 不產生 map 文件,
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias.set('@', resolve('src/'));
  },
  css: {
    extract: false,
    sourceMap: false,
    loaderOptions: {
      scss: {
        // 傳入共用的全域變數scss
        additionalData: `
        @import "@/assets/scss/base/_color.scss";
        `,
      },
      // TODO need to be resolve: customize theme
      // less: {
      //   // 改 ant design 主題色
      //   lessOptions: {
      //     modifyVars: {
      //       'primary-color': '#FD80AC',
      //     },
      //     javascriptEnabled: true,
      //   },
      // },
    },
  },
}