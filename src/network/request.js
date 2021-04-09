import axios from 'axios'

export function request(config){
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // 2.axios 拦截器
  //请求拦截的作用
  instance.interceptors.request.use(config =>{
    // 1.config的某些信息不符合服务器要求
    // 2.每次发送网络请求时展示loading
    // 3.某些网络请求必须携带一些特殊信息 token
    // console.log(config)
    return config
  },err => {
    // console.log(err)
    return err
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data || res.json
  },err => {
    return err
  })

  // 3.发送真正的网络请求
  return instance(config)
} 
