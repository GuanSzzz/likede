// 引入Api
import { getImgCode, login, getUserInfo } from '@/api/user'
import router from '@/router'
import { setTokentime } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    imgCode: '',
    token: '',
    data: {},
    userInfo: {}
  },
  mutations: {
    setImgCode(state, payload) {
      state.imgCode = payload
    },
    setToken(state, payload) {
      state.token = payload?.token
      state.data = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
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
        // console.log(res)
        context.commit('setToken', res.data)
        setTokentime()
        if (res.data.success) {
          // 路由跳转
          router.push('/')
        }
      } catch (error) {}
    },
    // 获取用户信息
    async getUserInfo(context) {
      try {
        const res = await getUserInfo()
        // console.log(res)
        context.commit('setUserInfo', res.data)
      } catch (error) {}
    },
    // 退出登录
    logout: function (context) {
      context.commit('setToken', {})
      context.commit('setUserInfo', {})
    }
  },
  getters: {}
}
