// 引入Api
import { getImgCode, login } from '@/api/user'
import router from '@/router'
export default {
  namespaced: true,
  state: {
    imgCode: '',
    token: JSON.parse(localStorage.getItem('LKDtoken')) || '',
    data: {}
  },
  mutations: {
    setImgCode(state, payload) {
      state.imgCode = payload
    },
    setToken(state, payload) {
      state.token = payload.token
      state.data = payload
    }
  },
  actions: {
    // 发送获取验证码图片的请求
    async getImgCode(context, payload) {
      // payload.是接口需要的参数
      try {
        const res = await getImgCode(payload)
        // console.log(res)
        context.commit('setImgCode', URL.createObjectURL(res.data))
      } catch (error) {}
    },
    // 发送登录请求
    async getToken(context, payload) {
      try {
        const res = await login(payload)
        console.log(res)
        context.commit('setToken', res.data)
        if (res.data.success) {
          // 路由跳转
          localStorage.setItem('LKDtoken', JSON.stringify(res.data.token))
          router.push('/')
        }
        // token存本地
      } catch (error) {}
    }
  },
  getters: {}
}
