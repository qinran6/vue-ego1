import { Descriptions } from 'element-ui'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

//准备语言
const messages = {
    //1. 英文
    en: {
        menu:{
            ego:'Ego Management System',
            home:'Home',
            goods:'Goods Manage',
            params:'Specification',
            adclassify:'Advertising Categories',
            management:'Order Management',
            list:'Order List',
            return:'Return Management',
        },
        goods:{
            inquire:'Inquire',
            add:'Add',
            check:'Check',
            compile:'Compile',
            delete:'Delete',
            id:'ID',
            name:'Name',
            price:'Price',
            num:'Num',
            specification:'Specification',
            photo:'photo',
            point:'Selling Points',
            description:'Description',
            operation:'Operation',
        },
        register:{
            welcome:'Welcome:×××',
            quit:'Quit',
            lang:'language',
        }
    },
    //2. 中文
    zh: {
        menu:{
            ego:'易购后台管理系统',
            home:'首页',
            goods:'商品管理',
            params:'规格参数',
            adclassify:'广告分类',
            management:'订单管理',
            list:'订单列表',
            return:'退货管理',
        },
        goods:{
            inquire:'查询',
            add:'添加',
            check:'查看',
            compile:'编辑',
            delete:'删除',
            id:'商品ID',
            name:'商品名称',
            price:'商品价格',
            num:'商品数量',
            specification:'规格类目',
            photo:'商品照片',
            point:'商品卖点',
            description:'商品描述',
            operation:'操作',
        },
        register:{
            welcome:'欢迎:×××',
            quit:'退出登陆',
            lang:'多语言',
        }
    }
    
}

//2. 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
    locale: 'zh',//选中的语言
    messages,//语言环境
})

//3. 导出i18n 
export default i18n