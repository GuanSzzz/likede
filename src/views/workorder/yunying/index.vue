<template>
  <div class="main">
    <!-- 头部搜素框 -->
    <el-card class="box-card">
      <MyInput title="工单编号" @enter="enterFn"></MyInput>
      <MyDropdown
        title="工单状态"
        class="selectdown"
        @select="selectFn"
        :taskStatusArr="selectArr"
      ></MyDropdown>
      <MyButton @click.native="searchList">查询</MyButton>
    </el-card>
    <el-card class="table-card">
      <div class="add-btn">
        <MyButton bgcolor="#ff7d33" class="add">
          <i class="el-icon-circle-plus-outline icon-add"></i>
          新建</MyButton
        >
        <MyButton bgcolor="#fbf4f0" fscolor="#000">工单配置</MyButton>
      </div>
      <MyTable></MyTable>
    </el-card>
  </div>
</template>

<script>
import MyButton from '@/components/Mybutton'
import MyInput from '@/components/MyInput'
import MyDropdown from '@/components/Mydropdown'

import MyTable from './MyTable'
export default {
  data() {
    return {
      selectArr: ['待办', '进行', '取消', '完成'],
      params: {
        status: '',
        taskCode: ''
      }
    }
  },

  created() {
    // 调用获取运营工单页面数据
    this.$store.dispatch('workorder/getWorkorderList')
  },

  methods: {
    // 搜索输入框
    enterFn(val) {
      // console.log(val)
      this.params.taskCode = val.trim()
    },
    // 搜索下拉框
    selectFn(index) {
      console.log(index)
      this.params.status = index
    },
    // 搜索按钮
    async searchList() {
      // console.log(111)
      await this.$store.dispatch('workorder/getWorkorderList', this.params)
    }
  },
  components: {
    MyButton,
    MyInput,
    MyTable,
    MyDropdown
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
  .add-btn {
    display: flex;
    .add {
      margin-right: 10px;
    }
    .icon-add {
      padding-right: 5px;
    }
  }
}
</style>
