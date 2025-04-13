<template>
  <div class="goods">
    <!-- 搜素区域 -->
     <div class="header">
      <!--change	仅在输入框失去焦点或用户按下回车时触发-->
      <el-input @change="searchInp" v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">
        <router-link to='/add-goods' style="color:#fff">页面添加</router-link>
      </el-button>
      <el-button type="primary" @click="AddGoods"> 添加  </el-button>
     </div>
    <!-- 表格区域展示视图数据 -->
     <div class="wrapper">
      <el-table :data="tableData" border>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="商品ID" width="100"></el-table-column>
        <el-table-column prop="title" label="商品名称" width="100" show-overflow-tooltip></el-table-column>
        <el-table-column prop="price" label="商品价格" width="100"></el-table-column>
        <el-table-column prop="num" label="商品数量" width="100"></el-table-column>
        <el-table-column prop="category" label="规格类目" width="100"></el-table-column>
        <el-table-column prop="image" label="商品图片" show-overflow-tooltip></el-table-column>
        <el-table-column prop="sellPoint" label="商品卖点" show-overflow-tooltip></el-table-column>
        <el-table-column prop="descs" label="商品描述" show-overflow-tooltip></el-table-column>
        <el-table-column  label="操作" width="180">
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
     <MyPagination :total='total' :pageSize='pageSize' @changePage='changePage'/>
  </div>
</template>

<script>
import MyPagination from '../../components/MyPagination.vue'
import AddGoods from './AddGoods.vue';
export default {
  components:{
    MyPagination
  },
  data(){
    return{
      input:'',
      tableData:[],
      total:10,
      pageSize:1,
      type:1,
      list:[],
    };
  },
  methods:{
    //分页页码
    changePage(num){
     if(this.type==1){
      this.http(num);//商品列表分页
     }else{
      //搜索分页 1 2 list=[0,1,2,3,4,5,6,7,8] 0-3 3-6 6-9
      console.log('搜索的分页处理---');
      this.tableData=this.list.slice((num-1)*3,num*3);
     }
    },
    //搜索，查询数据
    searchInp(val){
      if(!val){
        this.http(1);
        return;
      }
      this.$api.getSearch({
        search:val
      }).then(res=>{
        console.log('搜索---',res.data);
        //特殊处理
        if(res.data.status===200){
          this.list=res.data.result;//获取搜索总数据条数---进行分割
          //假设需要分页，处理分页
          this.total=res.data.result.length;
          this.pageSize=3;
          this.tableData=res.data.result.slice(0,3);
          this.type=2;
        }
        else {
          this.tableData=[];
          this.total=1;
          this.pageSize=1;
          this.type=1;
        }
      })
    },

    // 编辑操作
    handleEdit(){},
    // 删除操作
    handleDelete(){},

    http(page){
      this.$api.getGoodsList({
        page,
      })
      .then(res=>{
        console.log(res.data);
        if(res.data.status===200){
            this.tableData=res.data.data;//数据列表
            this.total=res.data.total;
            this.pageSize=res.data.pageSize;
        }
      })
    }
  },
  
  //生命周期函数
  created(){
    this.http(1);
  }
};
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