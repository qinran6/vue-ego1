//接口路径配置

import AddGoods from "@/views/Goods/AddGoods.vue";

//import { search } from "server/router";

const base={
    host:'http://localhost:8989',//基础域名
    goodsList:'/api/api/projectList',//商品列表
    search:'/api/api/search',//商品搜索
    selectCategory:'/api/api/backend/itemCategory/selectItemCategoryByParentId',//类目选择
    uploadUrl:'/api/api/upload',//图片上传 post请求
    addGoods:'/api/api/backend/item/insertTbItem',//添加商品
    deleteGoods:'/api/api/backend/item/deleteItemById',//删除商品
    updateGoods:'/api/api/backend/item/updateTbItem',//编辑商品
}

export default base;