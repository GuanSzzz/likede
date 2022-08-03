import store from '@/store'
import request from '@/utils/request'

/**
 *获取验证码图片
 * @param {Number} clientToken 随便一个随机数
 * @returns Promise
 */
export function getImgCode(clientToken) {
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
    method: 'GET',
    // 一个对象，解析图片
    responseType: 'blob'
  })
}

/**
 * 登录
 * @param {Object} data 传参loginName/password/clientToken/code/loginType=0
 * @returns Promise
 */
export const login = (data) => {
  return request({
    url: '/api/user-service/user/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
}
/**
 * 获取用户基本信息
 * @returns Promise
 */
export const getUserInfo = () => {
  return request({
    url: `/api/user-service/user/${store.state.user.data.userId}`
  })
}
