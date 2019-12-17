import ajax from './ajax'

// 0. 定义基础路径
const BASE_URL = 'http://localhost:5000';


// 1. 请求首页的数据
export const getHomeData = () => ajax(BASE_URL + '/api/home/list');