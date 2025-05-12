<template>
  <div class="user">
    <h2>个人中心</h2>
    <!-- 1. 合同查看 -->
    <div class="hetong">
      签约合同内容：<el-button type="primary" size="small" @click="look"
        >查看合同</el-button
      >
    </div>
    <VuePdf ref="myPdf" />

 
  </div>
</template>

<script>
import VuePdf from './VuePdf.vue'
export default {
    components:{
        VuePdf
    },
    methods:{
        look(){
            this.$refs.myPdf.dialogVisible= true
        }
    }
}
</script>

<style >

</style>