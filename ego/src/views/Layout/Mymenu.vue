<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <template v-slot:title>
        <span>首页</span>
        </template>
        <!-- <span slot="title">首页</span> -->
      </el-menu-item>

      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <!-- <span slot="title">商品管理</span> -->
        <template v-slot:title>
        <span>商品管理</span>
        </template>
      </el-menu-item>

      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <!-- <span slot="title">规格参数</span> -->
        <template v-slot:title>
        <span>规格参数</span>
        </template>
      </el-menu-item>

      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <!-- <span slot="title">规格参数</span> -->
        <template v-slot:title>
        <span>广告分类</span>
        </template>
      </el-menu-item>

      <el-submenu index="5">
        <template v-slot:title>
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">
            <i class="el-icon-setting"></i>
            <span>订单列表</span>
          </el-menu-item>
          <el-menu-item index="5-2">
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

}
</script>

<style>

</style>