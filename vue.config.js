var webpack = require('webpack')
const path = require('path')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  },

  // lintOnSave:false,
  devServer: {
    port: 8080, // 端口
    proxy: {
      '/api': {  //   若请求的前缀不是这个'/api'，那请求就不会走代理服务器
        target: 'http://localhost:8000',  //这里写路径 
        pathRewrite: { '^/api': '' }, //将所有含/api路径的，去掉/api转发给服务器
        ws: true,  //用于支持websocket
        changeOrigin: true   //用于控制请求头中的host值
      },
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      })
    ]
  }
})


