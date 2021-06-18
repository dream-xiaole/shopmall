import axios from 'axios'

// 1、创建一个实例
const instance = axios.create({
  baseURL: 'http://v.juhe.cn',
  timeout: 5000
})

// 2、拦截器
// 2.1 请求拦截
instance.interceptors.request.use(config => {
  /**
   *  1、一般做 加一些请求头
   *  2、对请求参数 格式的转换
   *  3、totenk登录信息的验证
   *  注意：加拦截器要把最后的请求信息  return  出去
   */
  console.log(config);
  return config;
}, error => {
  console.log(error);
})

// 2.2 响应拦截
instance.interceptors.response.use(res => {
  /**
   * res 服务器返回的数据
   * 一般只对服务器响应的数据返回出去
   * 也需要把数据  return  出去
   */
  console.log(res);
  return res.data
}, error => {
  console.log(error);
})

// 3、封装请求

export const request = function(config){
  return instance(config)
}
