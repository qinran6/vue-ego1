import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

//准备语言
const messages = {
    //1. 英文
    en: {
        menu:{
            home:'home',
            goods:'Goods Manage',
            params:'Specification'
        }
    },
    //2. 中文
    zh: {
        menu:{
            home:'首页',
            goods:'商品管理',
            params:'规格参数'
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