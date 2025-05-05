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

### 富文本编辑
1. 百度编译器
2. wangEditor 

wangEditor使用步骤：
1. 官网网址：https://www.wangeditor.com/doc/ 
2. 基本使用
    1. 安装：npm i wangeditor --save 
    2. 引入模块：
       import E from "wangeditor"
    3. 使用wangeditor
        const editor = new E("#div1")
        editor.create()

3. 常用配置
    1. 清空内容
         editor.txt.clear() 清空编辑器内容。

    2. 设置内容
         editor.txt.html('') 获取 html 

    3. 配置菜单
       1. 配置菜单使用 editor.config.menus 定义显示哪些菜单和菜单的顺序
     
    4. 配置 onchange 回调函数 
       配置 onchange 函数之后，用户操作（鼠标点击、键盘打字等）导致的内容变化之后，会自动触发 onchange 函数执行

## 国际化

### vuei18n 
1. 介绍：
   Vue I18n 是 Vue.js 的国际化插件。它可以轻松地将一些本地化功能集成到你的 Vue.js 应用程序中。

2. 安装
   1. npm install vue-i18n -S