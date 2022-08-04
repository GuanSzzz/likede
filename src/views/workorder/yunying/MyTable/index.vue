<template>
  <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%"
  >
    <el-table-column type="index" label="序号" width="50"> </el-table-column>
    <el-table-column property="taskCode" label="工单编号" width="120">
    </el-table-column>
    <el-table-column property="innerCode" label="设备编号" width="120">
    </el-table-column>
    <el-table-column property="" label="工单类型"> </el-table-column>
    <el-table-column property="" label="工单方式"> </el-table-column>
    <el-table-column property="taskStatus" label="工单状态"> </el-table-column>
    <el-table-column property="" label="运营人员"> </el-table-column>
    <el-table-column property="" label="创建日期"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: this.$store.state.workorder.workorderlist,
      currentRow: null
    }
  },
  created() {},

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val
    }
  }
}
</script>

<style scoped></style>
