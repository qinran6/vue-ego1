<template>
    <!--:props="props"配置选项，具体看下表
         :load="loadNode" 加载子树数据的方法，仅当 lazy 属性为true 时生效
         自动执行函数-- 异步请求数据
        lazy  是否懒加载子节点，需与 load 方法结合使用
        show-checkbox  节点是否可被选择
    -->
  <el-tree
  :props="props"
  :load="loadNode"
  lazy
  show-checkbox>
</el-tree>
</template>

<script>
  export default {
    data() {
      return {
        props: {
          label: 'title',
          children: 'zones',
          isLeaf: 'leaf'
        },
      };
    },
    methods: {
      loadNode(node, resolve) {
        console.log('load--自动执行');
        if (node.level === 0) {
          return resolve([{ title: 'region' }]);
        }
        if (node.level > 1) return resolve([]);

        setTimeout(() => {
          const data = [{
            title: 'leaf',
            leaf: true
          }, {
            title: 'zone'
          }];

          resolve(data);
        }, 500);
      }
    }
  };
</script>

<style>

</style>