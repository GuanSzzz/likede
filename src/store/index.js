import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import workorder from './modules/workorder'

// 引入自动保存的包
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    workorder
  },
  getters,
  plugins: [
    createVuexPersisted({
      reducer(state) {
        return {
          user: {
            token: state.user.token,
            data: state.user.data
          }
        }
      }
    })
  ]
})

export default store
