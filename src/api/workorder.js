// 工单管理
import request from '@/utils/request'

/**
 * 工单搜索
 * params  pageIndex页码 innerCode设备编号 status工单状态
 * @returns
 */
export const workorderList = (params) => {
  return request({
    url: '/api/task-service/task/search',
    params
  })
}
