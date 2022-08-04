<template>
  <div class="main">
    <!-- 头部搜素框 -->
    <el-card class="box-card">
      <MyInput title="工单编号" @enter="enter"></MyInput>
      <MyInput title="工单状态" @enter="enter" class="selectdown"></MyInput>
      <MyButton> 查询</MyButton>
    </el-card>
    <el-card class="table-card">
      <MyTable></MyTable>
    </el-card>
  </div>
</template>

<script>
import MyButton from '@/components/Mybutton'
import MyInput from '@/components/MyInput'
import MyTable from './MyTable'
export default {
  data() {
    return {}
  },

  created() {
    // 调用获取运营工单页面数据
    this.$store.dispatch('workorder/getWorkorderList')
  },

  methods: {
    enter(val) {
      console.log(val)
    }
  },
  components: {
    MyButton,
    MyInput,
    MyTable
  }
}
</script>

<style scoped lang="scss">
.main {
  background-color: #f8fafd;
  padding: 20px;
  .box-card {
    ::v-deep .el-card__body {
      display: flex;
      align-items: center;
      .selectdown {
        margin: 0 10px;
      }
    }
  }
}
</style>
