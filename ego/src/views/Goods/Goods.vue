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
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="商品ID" width="100"></el-table-column>
        <el-table-column prop="date" label="商品名称" width="100"></el-table-column>
        <el-table-column prop="date" label="商品价格" width="100"></el-table-column>
        <el-table-column prop="date" label="商品数量" width="100"></el-table-column>
        <el-table-column prop="date" label="规格类目" width="100"></el-table-column>
        <el-table-column prop="date" label="商品图片" ></el-table-column>
        <el-table-column prop="date" label="商品卖点" ></el-table-column>
        <el-table-column prop="date" label="商品描述" ></el-table-column>
        <el-table-column prop="date" label="操作" width="180">
          <!-- <template slot-scope="scope"> -->
          <template #default="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

     </div>
    <!-- 分页 -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      input:'',
      tableData:[{
          date: '2016-05-02',
        }],
    };
  },
  methods:{
    // 编辑操作
    handleEdit(){},
    // 删除操作
    handleDelete(){}
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