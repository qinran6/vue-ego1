<template>
  <el-pagination background layout="total,prev, pager, next,jumper" :total="total" :page-size="pageSize">
  </el-pagination>
</template>

<script>
export default {
    props:{
        total:{
            type:Number,
            default:100
        },
        pageSize:{
            type:Number,
            default:10
        }
    }
};
</script>

<style>

</style>