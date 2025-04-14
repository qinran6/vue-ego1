<template>
    <!--:props="props"配置选项，具体看下表
         :load="loadNode" 加载子树数据的方法，仅当 lazy 属性为true 时生效
         自动执行函数-- 异步请求数据
        lazy  是否懒加载子节点，需与 load 方法结合使用
        show-checkbox  节点是否可被选择
        accordion 是否每次打开一个树级节点
    -->
  <el-tree
  :props="props"
  :load="loadNode"
  lazy
 
  accordion>
</el-tree>
</template>

<script>
  export default {
    data() {
      return {
        props: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
      };
    },
    methods: {
      loadNode(node, resolve) {//resolve成功数据结果
        console.log('node',node);
        if (node.level === 0) {
          //进入页面获取第一层tree数据
          this.$api.getSelectCategory()
          .then(res=>{
            console.log(res.data);       
            return resolve(res.data.result);
          })          
        }
        if (node.level >= 1){
          //请求当前的点击的tree下面的数据
          this.$api.getSelectCategory({
            id:node.data.cid
          })
          .then(res=>{
            console.log('二級的Tree',res.data);     
            if(res.data.status===200){
              return resolve(res.data.result);
            }else{
              return resolve([])
            }
            
          })
        }
      }
    }
  };
</script>

<style>

</style>