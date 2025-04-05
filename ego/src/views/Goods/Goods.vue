<template>
  <div class="goods">
    <!-- 搜素区域 -->
     <div class="header">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">添加</el-button>
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

<style lang='less' scoped>
.goods{
  margin:20px;
}
.header{
  display: flex;
  button{
    margin-left: 20px;
  }
}
</style>