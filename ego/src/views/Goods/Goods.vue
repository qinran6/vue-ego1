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
      <el-table :data="tableData" border>
        <el-table-column prop="date" label="商品ID" width="180"></el-table-column>
        <el-table-column prop="date" label="商品名称" width="180"></el-table-column>
        <el-table-column prop="date" label="商品价格" width="180"></el-table-column>
        <el-table-column prop="date" label="商品数量" width="180"></el-table-column>
        <el-table-column prop="date" label="规格类目" width="180"></el-table-column>
        <el-table-column prop="date" label="商品图片" width="180"></el-table-column>
        <el-table-column prop="date" label="商品卖点" width="180"></el-table-column>
        <el-table-column prop="date" label="商品描述" width="180"></el-table-column>
        <el-table-column prop="date" label="操作" width="180"></el-table-column>
    </el-table>

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
.wrapper{
  margin:20px 0;
}
</style>