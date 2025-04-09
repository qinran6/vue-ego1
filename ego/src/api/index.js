//请求的方法

import axios from 'axios'
import base from './base'
const api={
    //商品列表
    getGoodsList(params){//page:xx
        return axios.get(base.goodsList,{
            params
        })
    }
}

export default api