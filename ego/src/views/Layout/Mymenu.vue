<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#1b3554"
      text-color="#fff"
      active-text-color="#409EFF"
      router
      :collapse="isCollapse"
    >
      <el-menu-item>
        <template v-slot:title>
        <span slot="title">{{$t ("menu.ego")}}</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <!-- 
        <template v-slot:title>
        <span>首页</span>
        </template>
        -->
        <!-- <span slot="title">首页</span> -->
        <span slot="title">{{$t ("menu.home")}}</span>
      </el-menu-item>



      <el-submenu index="/goods">
        <template slot="title">
          <i class="el-icon-s-cooperation"></i>
          <!-- <span slot="title">商品管理</span> -->
          <span slot="title">{{ $t("menu.goods") }}</span>
        </template>
          <el-menu-item index="/goods/goods-list">
            <i class="el-icon-menu"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
          <el-menu-item index="/goods/goods-verify">
            <i class="el-icon-menu"></i>
            <span slot="title">商品审核</span>
          </el-menu-item>
      </el-submenu>
     
      <el-submenu index="/params">
        <template v-slot:title>
          <i class="el-icon-setting"></i>
          <!-- <span slot="title">规格参数</span> -->
          <span slot="title">{{$t ("menu.params")}}</span>
        </template>
        
          <el-menu-item index="/params/specifications">
            <i class="el-icon-setting"></i>
            <span slot="title">规格与包装</span>
          </el-menu-item>
        
      </el-submenu>

      <el-menu-item index="/advert">
        <i class="el-icon-setting"></i>
        <!-- <span slot="title">广告分类</span> -->
        <span slot="title">{{$t ("menu.adclassify")}}</span>
      </el-menu-item>

      <el-submenu index="/order">
        <template v-slot:title>
          <i class="el-icon-location"></i>
          <!-- <span>订单管理</span> -->
          <span slot="title">{{$t ("menu.management")}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/order-list">
            <i class="el-icon-setting"></i>
            <!-- <span>订单列表</span> -->
            <span slot="title">{{$t ("menu.list")}}</span>
          </el-menu-item>
          <el-menu-item index="/order/order-back">
            <i class="el-icon-setting"></i>
            <!-- <span>退货管理</span> -->
            <span slot="title">{{$t ("menu.return")}}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
          <el-menu-item index="/user">
          <i class="el-icon-data-board"></i>
          <span slot="title">个人中心</span>
       </el-menu-item>

    </el-menu>

  </div>
</template>

<script>
export default {
  // 接收isCollapse的值
  props:['isCollapse'],
  data(){
    return{
      // isCollapse:false
    }
  }
}
</script>

<style lang='less' scoped>
.el-menu {
  border-right:0;
  .is-active {
    background: #054476 !important;
    color: #fff !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>