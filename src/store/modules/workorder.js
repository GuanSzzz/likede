import { workorderList } from '@/api/workorder'

export default {
  namespaced: true,
  state: {
    workorderlist: [],
    workorderData: {}
  },
  mutations: {
    setWorkorderList(state, payload) {
      state.workorderlist = payload
    },
    setWorkorderData(state, payload) {
      state.workorderData = payload
    }
  },
  actions: {
    async getWorkorderList(context, params) {
      const res = await workorderList(params)
      console.log(res)
      context.commit('setWorkorderData', res.data)
      const workorderlist = res.data.currentPageRecords
      workorderlist.forEach((item) => {
        item.createType = item.createType ? '手动' : '自动'
        item.taskStatus = { 1: '待办', 2: '进行', 3: '取消', 4: '完成' }[
          item.taskStatus
        ]
      })
      context.commit('setWorkorderList', workorderlist)
    }
  },
  getters: {}
}
