<template>
  <div class="layout">
    <!-- 左侧导航区域 -->
     <!-- isCollapse='isCollapse'允许接收isCollapes的值 -->
     <MyMenu class="menu" :isCollapse='isCollapse'/>
    <!-- 右侧导航区域 -->
     <!-- class="{isActive:isCollapse}"isCollapse为真时右侧区域的大小跟着左侧导航的折叠而变化 -->
    <Content class="content" :class="{isActive:isCollapse}" @changeCollapse='changeCollapse' :isCollapse='isCollapse'/>
  </div>
</template>

<script>
// 作为子组件导进来
import MyMenu from './Mymenu.vue'
import Content from './Content.vue'
import { isReactive } from 'vue';

export default {
    components:{
        MyMenu,
        Content,
        Content
    },
    data(){
    return{
       isCollapse:false
    }
  },
  methods:{
    changeCollapse(){
        this.isCollapse=!this.isCollapse;
    }
  }
}
</script>

<style lang='less' scoped>
.layout{
    // display: flex;
    .menu{
        //  width: 200px;
        min-height: 500px;
        background-color: #1b3554;
        // 定位左侧导航区域
        position: fixed;
        top: 0;
        bottom: 0;
    }
    .content{
        //  flex: 1;
        margin-left: 200px;
    }
    .isActive{
        margin-left: 64px;
    }
}
</style>