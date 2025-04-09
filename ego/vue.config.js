// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8989', // 去掉末尾斜杠（推荐）
        ws: true,
        changeOrigin: true,
        pathRewrite: { // 使用正确的选项名
          '^/api': ''
        }
      }
    }
  }
}