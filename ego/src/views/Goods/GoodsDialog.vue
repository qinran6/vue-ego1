<template>
  <div>
    <!--
        title="添加商品" 弹框标题
        :visible.sync="dialogVisible" 控制弹框显示隐藏 true显示
        width="70%"宽度大小

    -->
    <el-dialog
      :title="title" :visible.sync="dialogVisible" width="70%"
      :before-close="clearForm"
  >
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
    <el-button type='primary' @click="innerVisibleImg = true">上传图片</el-button>
    <img :src="goodsForm.image" height="200px" style="margin-left: 10px;" alt=""/>
  </el-form-item>
  <el-form-item label="商品描述" prop="descs">
    <WangEditor ref='myEditor' @sendEditor='sendEditor'/>
  </el-form-item>
</el-form>

  <!--弹框底部区域-->
  <span slot="footer" class="dialog-footer">
    <el-button @click="clearForm">取 消</el-button>
    <el-button type="primary" @click="submitForm">确 定</el-button>
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

    <!--2.内弹框 --- 上传图片-->
    <el-dialog
      width="40%"
      title="上传图片"
      :visible.sync="innerVisibleImg"
      append-to-body>

      <UploadImg @sendImg='sendImg'/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="innerVisibleImg=false">取 消</el-button>
        <el-button type="primary" @click="showImg">确 定</el-button>
      </span>
    </el-dialog>

</el-dialog>
  </div>
</template>

<script>
import TreeGoods from './TreeGoods.vue';
import UploadImg from './UploadImg.vue';
import WangEditor from './WangEditor.vue'
export default {
    props:{
      title:{
        type:String,
        default:'添加商品'
      },
      rowData:{
        type:Object,
        default:function(){
          return {}
        }
      }
    },  
  //props:["dialogVisible"],
    components:{
    TreeGoods,
    UploadImg,
    WangEditor
   },
    data(){
        return {
        dialogVisible:false,//外弹框
        innerVisible:false,//内弹框
        innerVisibleImg:false,//图片弹框
        treeData:{},//接受tree的数据
        imgUrl:"",
        goodsForm: {//表单容器-对象
          id:'',
          title: "",
          price: "",
          num: "",
          sellPoint: "",
          image: "",
          descs: "",
          cid:"",//类目的id
          category: "",
          date1:"",//商品时间
          date2:"",
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
    //监听器---
    watch:{
      rowData(val){
        console.log('监听数据变化',val);
        this.goodsForm = val;
        //设置富文本编辑的数据内容
        this.$nextTick(()=>{
          this.$refs.myEditor.editor.txt.html(val.descs)
        });
      },
    },
    methods:{
      /* 
        接受wangeditor数据
      */
     sendEditor(val){
      this.goodsForm.descs = val;
     },
      /* 
        显示图片的地址
      */
      sendImg(val){
        console.log("显示图片的地址",val);
        this.imgUrl = val;
      },
      /* 
        显示图片--确定按钮
      */
     showImg(){
        this.innerVisibleImg = false;
        this.goodsForm.image = this.imgUrl;
     },
      //显示tree数据
      showtreeData(){
        this.innerVisible=false;
        //显示数据
        this.goodsForm.category=this.treeData.name;
        this.goodsForm.cid=this.treeData.cid;
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
        submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            console.log('获取输入的信息',this.goodsForm);
            //title cid  category sellPoint price num descs paramsInfo image
            let {id,title,cid,category,sellPoint,price,num,descs,image} = this.goodsForm;
            //判断当前确定按钮类型
            if(this.title === '添加商品'){
              console.log('添加商品');
              this.$api.addGoods({
              title,cid,category,sellPoint,price,num,descs,image
              })
              .then((res) => {
                console.log("添加---实现---", res.data);
                if (res.data.status === 200) {
                  //成功
                  this.$parent.http(1); //更新父组件列表数据
                  this.$message({
                    message: "恭喜你，添加商品成功",
                    type: "success",
                  });
                  //清空表单
                  this.clearForm();
                } else {
                  this.$message.error("错了哦，这是一条错误消息");
                }
              });
            }else{
              console.log('编辑商品');
              this.$api.updateGoods({
                id,title,cid,category,sellPoint,price,num,descs,image
              })
              .then((res)=>{
                console.log(res.data);
                if (res.data.status === 200) {
                  //成功
                  this.$parent.http(1); //更新父组件列表数据
                  this.$message({
                    message: "恭喜你，修改商品成功",
                    type: "success",
                  });
                  //清空表单
                  this.clearForm();
                } else {
                  this.$message.error("修改失败");
                }
              });
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      /* 
        清空表单数据列表
      */
      clearForm(formName) {
        this.dialogVisible = false;//关闭弹框
        //清空表单 1 使用element里面的重置表单 2自己手动初始化goodsForm
        //this.$refs.ruleForm.resetFields();
        this.goodsForm={
          title: "",
          price: "",
          num: "",
          sellPoint: "",
          image: "",
          descs: "",
          cid:"",//类目的id
          category: "",
          date1:"",//商品时间
          date2:"",
        }
        //单独-清空编辑器内容--editor.txt.clear()
        this.$refs.myEditor.editor.txt.clear();
      },

    }
}
</script>

<style lang="less" scoped>
.line{
    text-align: center;
}
</style>