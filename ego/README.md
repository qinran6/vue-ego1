# ego

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 上传图片
1. upload 图片上传
2. 后台配置
   1. 后台安装 multer 模块   同时引入fs模块
   2. router.js入口文件导入模块
       const fs=require('fs')
        const multer=require('multer')
   3. 上传图片 配置upload

## 国际化

### vuei18n 
1. 介绍：
   Vue I18n 是 Vue.js 的国际化插件。它可以轻松地将一些本地化功能集成到你的 Vue.js 应用程序中。

2. 安装
   1. npm install vue-i18n -S