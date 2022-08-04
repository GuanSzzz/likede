// 工单管理
import request from '@/utils/request'

/**
 * 工单搜索
 * @returns
 */
export const workorderList = () => {
  return request({
    url: '/api/task-service/task/search'
  })
}
