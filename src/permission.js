import router from '@/router'
import store from '@/store'
const whileList = ['/login', '/404']

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = store.state.user.token
  if (token) {
    // 获取用户信息
    if (!store.state.user.userInfo.userId) {
      store.dispatch('user/getUserInfo')
    }
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    const isCludes = whileList.includes(to.path)
    if (!isCludes) {
      next('/login')
    } else {
      next()
    }
  }
})
