import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Layout from '../views/Layout/index.vue'
// import { component } from 'vue/types/umd'
import Login from '../views/Login/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    component:Layout,
    children:[

    ]
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
