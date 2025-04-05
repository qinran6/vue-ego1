<template>
  <div>
    <!-- 搜素区域 -->
     <div class="header">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
     </div>
    <!-- 表格区域展示视图数据 -->
     <div class="wrapper">

     </div>
    <!-- 分页 -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      input:''
    }
  }

}
</script>

<style>

</style>