import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Layout from '../views/Layout/index.vue'
import Home from'../views/Home/index.vue'
import Login from '../views/Login/login.vue'


// 异步
const Goods=()=>import('../views/Goods/Goods.vue')
const Params=()=>import('../views/Params/Params.vue')
const Specifications=()=>import('../views/Params/ParamsInfo/Specifications.vue')
const Advert=()=>import('../views/Advert/Advert.vue')
const Order=()=>import('../views/Order/index.vue')
const OrderList=()=>import('../views/Order/OrderList/index.vue')
const OrderBack=()=>import('../views/Order/OrderBack/index.vue')

//子级路由
const AddGoods=()=>import('../views/Goods/AddGoods.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    component:Layout,
    //路由元信息
    meta:{
      isLogin:true
    },
    children:[
      {
        path:'/',
        name:'Home',
        component:Home
      },
      {
        path:'/goods',
        name:'Goods',
        component:Goods
      },
      {
        path:'/add-goods',
        name:'AddGoods',
        component:AddGoods
      },
      {
        path:'/params',
        name:'Params',
        component:Params,
        redirect:'/params/specifications',
        children:[
          {
            path:'specifications',
            name:'Specifications',
            component:Specifications
          }
        ]

      },
      {
        path:'/advert',
        name:'Advert',
        component:Advert
      },
      {
        path:'/order',
        name:'Order',
        component:Order,
        redirect:'/order/order-list',
        children:[
          {
            path:'order-list',
            component:OrderList
          },
          {
            path:'order-back',
            component:OrderBack
          }
        ]
      }
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


//路由拦截
// router.beforeEach((to,from,next)=>{
//   //1、判断是否需要登录
//   if(to.matched.some(ele=>ele.meta.isLogin)){
//     //2.判断当前用户是否已经登录
//     let token='';
//     if(token){
//       next()
//     }else{
//       next('/login')
//     }
//   }else{//不需要登录
//     next();
//   }
// });

export default router
