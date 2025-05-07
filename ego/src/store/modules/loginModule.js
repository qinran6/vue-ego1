export default {
    namespace:true,
    state:{
        user:{
            user:'',
            token:''
        }
    },
    mutations:{
        //设置用户信息
        setUser(state,payload){
            state.user=payload;
        },
        //清空
        clearUser(state){
            state.user={
                user:'',
                token:''
            }
        }
    },
    actions:{

    },
    getters:{

    }
}