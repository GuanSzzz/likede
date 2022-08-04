import { workorderList } from '@/api/workorder'

export default {
  namespaced: true,
  state: {
    workorderlist: []
  },
  mutations: {
    setWorkorderList(state, payload) {
      state.workorderlist = payload
    }
  },
  actions: {
    async getWorkorderList(context) {
      const res = await workorderList()
      console.log(res)
      const workorderlist = res.data.currentPageRecords
      workorderlist.forEach((item) => {
        item.createType ? '手动' : '自动'
        item.taskStatus = { 1: '待办', 2: '进行', 3: '取消', 4: '完成' }[
          item.taskStatus
        ]
      })
      context.commit('setWorkorderList', workorderlist)
    }
  },
  getters: {}
}
