import * as constants from './actionTypes'
import {getHomeData} from './../Api/index'
// 获取首页数据{ INIT_HOME_DATA }


export const getHomeDataAction = () =>{
    return ((dispatch)=>{
        getHomeData().then((res) => {
            console.log(res)
            if(res.status_code === 200) {
                let homeData = res.result[0];
                dispatch({
                    type:constants.INIT_HOME_DATA,
                    homeData
                })
            }
        }).catch((err) => {
            
        });  
    })
}
