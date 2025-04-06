const express=require('express')
const router=express.Router()

//路由接口
router.get('/',(req,res)=>{
    res.send('hello')
})

module.exports=router