import axios from 'axios'
import store from '@/store/index'
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = store.state.user.token
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
// request.interceptors.response.use((res) => {
//   const { data } = res
//   return res
// })
export default request // 导出axios实例
