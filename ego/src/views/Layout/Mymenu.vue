<template>
  <div>
    <el-menu
      ：default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#1b3554"
      text-color="#fff"
      active-text-color="#409EFF"
      router
      :collapse="isCollapse"
    >
      <el-menu-item>
        <template v-slot:title>
        <span>易购后台管理系统</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <template v-slot:title>
        <span>首页</span>
        </template>
        <!-- <span slot="title">首页</span> -->
      </el-menu-item>

      <el-menu-item index="/goods">
        <i class="el-icon-document"></i>
        <!-- <span slot="title">商品管理</span> -->
        <template v-slot:title>
        <span>商品管理</span>
        </template>
      </el-menu-item>

      <el-menu-item index="/params">
        <i class="el-icon-setting"></i>
        <!-- <span slot="title">规格参数</span> -->
        <template v-slot:title>
        <span>规格参数</span>
        </template>
      </el-menu-item>

      <el-menu-item index="/advert">
        <i class="el-icon-setting"></i>
        <!-- <span slot="title">规格参数</span> -->
        <template v-slot:title>
        <span>广告分类</span>
        </template>
      </el-menu-item>

      <el-submenu index="/order">
        <template v-slot:title>
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/order-list">
            <i class="el-icon-setting"></i>
            <span>订单列表</span>
          </el-menu-item>
          <el-menu-item index="/order/order-back">
            <i class="el-icon-setting"></i>
            <span>退货管理</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

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