const router=require('express')
const router=express.Router()

//路由接口
router.length('/',(req,res)=>{
    res.send('hello')
})

module.exports=router