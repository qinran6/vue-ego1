//请求的方法

import axios from 'axios'
import base from './base'
const api={
    //商品列表
    getGoodsList(){//page:xx
        return axios.get(base.goodList,{
            params
        })
    }
}

export default api