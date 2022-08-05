<template>
  <div>
    <el-table
      ref="singleTable"
      :data="workorderlist"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
      <el-table-column type="index" label="序号" width="50"> </el-table-column>
      <el-table-column property="taskCode" label="工单编号"> </el-table-column>
      <el-table-column property="innerCode" label="设备编号"> </el-table-column>
      <el-table-column property="taskType.typeName" label="工单类型">
      </el-table-column>
      <el-table-column property="createType" label="工单方式">
      </el-table-column>
      <el-table-column property="taskStatus" label="工单状态">
      </el-table-column>
      <el-table-column property="updateTime" label="运营人员">
      </el-table-column>
      <el-table-column property="userName" label="创建日期"> </el-table-column>
      <el-table-column label="操作"
        ><span style="color: blue">查看详情</span>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block">
    <div class="left">
      <span>共{{ workorderData.totalCount }}条记录</span>
      <span
        >第{{ workorderData.pageIndex }}/{{
       workorderData.totalPage
        }}页</span
      >
    </div>
    <div class="right">
  <el-button type="info" plain size="small" @click="prevClick" :disabled="preDisplay">上一页</el-button>
    <el-button type="info" plain size="small" @click="nextClick" :disabled="nextDisplay">下一页</el-button>

    </div>
    </div>
  </div>
</template>

<script>
import {workorderList} from '@/api/workorder'
export default {
  data() {
    return {
      currentRow: null,
      currentPage1: 1,
      preDisplay:true,
      nextDisplay:false
    }
  },
  created() {},

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val
    },
    // 上一页
   async prevClick() {
      if(this.workorderData.pageIndex==1) {
        return this.preDisplay=true;
      }
      this.preDisplay=true
      const page=parseInt(this.workorderData.pageIndex) -1
      await this.$store.dispatch('workorder/getWorkorderList',{pageIndex:page} )
        this.preDisplay=false
   },
    // 下一页
  async nextClick() {
    if(this.workorderData.pageIndex===this.workorderData.totalPage) {
      return this.nextDisplay=true;
    }
     this.nextDisplay=true
    const page=parseInt(this.workorderData.pageIndex) +1
    await this.$store.dispatch('workorder/getWorkorderList',{pageIndex:page} )
        this.nextDisplay=false
        this.preDisplay=false
  }
  },
  computed: {
    workorderlist() {
      return this.$store.state.workorder.workorderlist
    },
    workorderData() {
      return this.$store.state.workorder.workorderData
    }
  }
}
</script scoped>

<style scoped lang='scss'>
.block{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  span{
    margin: 20px; 
    color:#dbdfe5;
  }
}
</style>
