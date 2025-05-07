<template>
  <div>
    <div class="header">
      <!-- isCollapse默认为false 先显示不折叠图标 当点击图标按钮时  通过changeMenu方法和changeCollapse
       方法修改isCollapse的值，Content和Mymenu接收isCollapse的值进行对应的改变-->
      <i v-if='!isCollapse' @click="changeMenu" class="iconfont icon-right-indent"></i>
      <i v-else @click="changeMenu" class="iconfont icon-left-indent"></i>
      <div class="header-right">
        <el-dropdown @command="clickLang">
          <span class="el-dropdown-link" style="color: #fff;">
            {{$t ("register.lang")}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">简体中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="user"> 
          欢迎：{{ user.user }}
          <i class="iconfont icon-tuichu" @click="loginout"></i>
          <span>{{$t ("register.welcome")}}</span>
          <span>{{$t ("register.quit")}}</span>
        </div>
      </div>
    </div>
    <!-- 内容区域----路由出口 -->
    <div class="content">
      <router-view/>
    </div>

  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';

export default {
  // 接收isCollapse的值
  props:['isCollapse'],
  computed:{
    ...mapState('loginModule',['user'])
  },
  methods:{
    ...mapMutations('loginModule',['clearUser']),
    changeMenu(){
      // 点击切换按钮时 修改父组件的数据 isCollapse
      this.$emit('changeCollapse')
    },
    clickLang(command){
      console.log(command);
      this.$i18n.locale=command;
    },
    loginout(){
      //退出登录
      //清空vuex数据
      this.clearUser()
      //清空本地存储
      localStorage.removeItem('user')
      //返回登录
      this.$router.push('/login')
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
.header-right{
  float: right;
  padding-right: 20px;
  display: flex;
  .user{
    margin-left: 20px;
  }
}

</style>