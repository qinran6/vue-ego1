<template>
  <div>
    <div class="login-box">
      <h2 class="title">登录界面</h2>
      <div>{{ info }}</div>
      <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {jwtDecode} from 'jwt-decode'
import {mapMutations} from 'vuex'
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      info:'',
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { validator: validateUser, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    ...mapMutations('loginModule',['setUser']),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let { username,password} =this.loginForm;
          //请求登录接口----------
          this.$api.getLogin({
            username,password
          }).then(res=>{
            console.log('------',res.data);
            if(res.data.status===200){
              console.log(jwtDecode(res.data.data));
              //登录成功后：1、存储登录信息 2、跳转网页 3、顶部区域显示用户信息 4、持久化
              let obj={
                user:jwtDecode(res.data.data).username,
                token:res.data.data
              }
              this.setUser(obj)
              //存储本地
              localStorage.setItem('user',JSON.stringify(obj))
              //跳转
              this.$router.push('/')
              //this.info=''
            }else{
              //账号或者密码错误
              //this.info='账号或者密码错误'
              this.$message.error('错了哦，这是一条错误消息');
            }
          }).catch((err) => {
            console.log('error:  ', err);
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang='less' scoped>
.login-box{
  width: 400px;
  height: 300px;
  padding: 20px;
  margin: 150px auto;
  border-radius: 10px;
  border: 1px solid #eee;
  background: #fff;
}
.title{
  margin-bottom: 30px;
  text-align: center;
  color: #666;
}
</style>