const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: '8002',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      // 本地api代理
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    client: {
      overlay: false
    }
  }
})
