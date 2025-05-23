import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/reset.css'
import './assets/css/iconfont.css'

import api from './api/index'
Vue.prototype.$api=api;

//导入语言
import i18n from './lang/index'
import './router/permission'
import './utils/localStorage'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
