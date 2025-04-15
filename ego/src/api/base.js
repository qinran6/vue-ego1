//接口路径配置

//import { search } from "server/router";

const base={
    host:'http://localhost:8989',//基础域名
    goodsList:'/api/api/projectList',//商品列表
    search:'/api/api/search',//商品搜索
    selectCategory:'/api/api/backend/itemCategory/selectItemCategoryByParentId',//类目选择
    uploadUrl:'/api/api/upload',//图片上传 post请求
}

export default base;