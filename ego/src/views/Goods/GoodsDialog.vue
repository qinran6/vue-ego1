<template>
  <div>
    <!--
        title="添加商品" 弹框标题
        :visible.sync="dialogVisible" 控制弹框显示隐藏 true显示
        width="70%"宽度大小

    -->
    <el-dialog
  title="添加商品" :visible.sync="dialogVisible" width="70%">
  <!--内容区域-->
  <el-form :model="goodsForm" 
  :rules="rules" 
  ref="ruleForm" 
  label-width="100px" 
  class="demo-ruleForm"
  >
  <el-form-item label="类目选择" prop="category">
    <el-button type='primary' @click="innerVisible=true">类目选择</el-button>
    <span>{{goodsForm.category}}</span>
  </el-form-item>

  <el-form-item label="商品名称" prop="title">
    <el-input v-model="goodsForm.title"></el-input>
  </el-form-item>
  <el-form-item label="商品价格" prop="price">
    <el-input v-model="goodsForm.price"></el-input>
  </el-form-item>
  <el-form-item label="商品数量" prop="num">
    <el-input v-model="goodsForm.num"></el-input>
  </el-form-item>
  <el-form-item label="发布时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker 
        type="date" 
        placeholder="选择日期" 
        v-model="goodsForm.date1" 
        style="width: 100%;"
        ></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="goodsForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="商品卖点" prop="sellPoint">
    <el-input v-model="goodsForm.sellPoint"></el-input>
  </el-form-item>
  <el-form-item label="商品图片" prop="image">
    <el-button type='primary'>上传图片</el-button>
  </el-form-item>
  <el-form-item label="商品描述" prop="descs">
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')"
    >确定</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  <!--弹框底部区域-->
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible=false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible=false">确 定</el-button>
  </span>
  <!--1.内弹框---类目选择-->
  <el-dialog
      width="40%"
      title="类目选择"
      :visible.sync="innerVisible"
      append-to-body>

      <TreeGoods @sendTreeData='sendTreeData'/>
      <span slot="footer" class="dialog-footer">
    <el-button @click="innerVisible=false">取 消</el-button>
    <el-button type="primary" @click="showtreeData">确 定</el-button>
  </span>
    </el-dialog>

</el-dialog>
  </div>
</template>

<script>
import TreeGoods from './TreeGoods.vue';
export default {
   // props:["dialogVisible"],
   components:{
    TreeGoods
   },
    data(){
        return {
        dialogVisible:false,//外弹框
        innerVisible:false,//内弹框
        treeData:{},//接受tree的数据
        goodsForm: {//表单容器-对象
          title: '',
          price: '',
          num: '',
          sellPoint: '',
          image: '',
          descs: '',
          category: '',
          date1:'',//商品时间
          date2:'',
        },
        rules: {//校验规则
          title: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          price: [{ required: true, message: '请输入价格', trigger: 'blur' }],
          num: [{ required: true, message: '请输入数量', trigger: 'blur' }],
         
        },
        }
    },
    methods:{
      //显示tree数据
      showtreeData(){
        this.innerVisible=false;
        //显示数据
        this.goodsForm.category=this.treeData.name
      },
      //获取Tree数据
      sendTreeData(val){
        console.log('tree数据',val);
        this.treeData=val;
      },
        //自定义事件 通知父组件--修改dialogVisible
        close(){
            this.$emit('changeDialog')
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

    }
}
</script>

<style lang="less" scoped>
.line{
    text-align: center;
}
</style>