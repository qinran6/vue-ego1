const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports={
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:8989/',
        ws: true,
        changeOrigin: true,
        pathRewriter:{//重写路径
            '^/api':''
        }
      },
    },
  }
}