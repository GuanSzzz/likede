import axios from 'axios'
import store from '@/store/index'
import { getTokentime } from './auth'
import router from '@/router'
import { Message } from 'element-ui'
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

const isTimeout = () => {
  const tokenTime = getTokentime()
  const currentTime = Date.now()
  const timeOut = 3 * 60 * 60 * 1000
  return currentTime - tokenTime > timeOut
}
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = store.state.user.token
    if (token) {
      if (isTimeout()) {
        store.dispatch('user/logout')
        router.push('login')
        return Promise.reject(new Error('登录过期'))
      } else {
        config.headers.Authorization = token
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
request.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    if (error?.response?.status === 401) {
      Message.error('身份认证出错了')
      store.dispatch('user/logout')
      router.push('login')
    } else {
      Message.error(error.message)
    }
    return Promise.reject(error)
  }
)
export default request // 导出axios实例
