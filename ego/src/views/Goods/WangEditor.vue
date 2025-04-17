<template>
  <div id='main'>
    富文本编译
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
    mounted(){
        //创建wangeditor实例
        const editor = new E('#main');
        editor.create();
    }
}
</script>

<style>

</style>