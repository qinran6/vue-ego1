//连接数据库 1 安装mysql 2创建连接
const mysql=require('mysql')

//创建数据库连接
const client =mysql.createConnection({
    host:'localhost',//数据域名 地址//
    user:'root',//数据名称
    password:'Zj243257607#',//数据库密码 xampp集成
    database:'vue-ego',
    port:'3316'
})
//封装数据库操作语言 sql语句 参数数组arr callback成功函数结果
function sqlFun(sql,arr,callback){
    client.query(sql,arr,function(error,result){
        if(error){
            console.log('数据库语句错误',error);
            return ;
        }
        callback(result)
    })
}

module.exports=sqlFun