<template>
  <div class="box">
    <span>{{ title }}：</span>
    <el-input
      class="input"
      v-model="input"
      placeholder="请输入内容"
      @change="enterFn"
      size="small"
    ></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  props: {
    title: {
      type: String,
      default: '工单编号'
    }
  },

  created() {},

  methods: {
    enterFn() {
      // 将输入内容传给父组件
      this.$emit('enter', this.input.trim())
    }
  }
}
</script>

<style scoped>
.box {
  width: 277px;
  display: flex;
  align-items: center;
}
span {
  flex: 0.3;
}
.input {
  flex: 0.7;
}
</style>
