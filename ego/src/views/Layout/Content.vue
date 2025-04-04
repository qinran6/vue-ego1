<template>
  <div>
    <div class="header">
      <!-- isCollapse默认为false 先显示不折叠图标 当点击图标按钮时  通过changeMenu方法和changeCollapse
       方法修改isCollapse的值，Content和Mymenu接收isCollapse的值进行对应的改变-->
      <i v-if='!isCollapse' @click="changeMenu" class="iconfont icon-right-indent"></i>
      <i v-else @click="changeMenu" class="iconfont icon-left-indent"></i>
      顶部区域
    </div>
    <!-- 内容区域----路由出口 -->
    <div class="content">
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  // 接收isCollapse的值
  props:['isCollapse'],
  methods:{
    changeMenu(){
      // 点击切换按钮时 修改父组件的数据 isCollapse
      this.$emit('changeCollapse')
    }
  }
}
</script>

<style lang='less' scoped>
.header{
  height:50px;
  line-height: 50px;
  color: #fff;
  background:#1e78bf;
  .iconfont{
    font-size: 24px;
  }
}
</style>