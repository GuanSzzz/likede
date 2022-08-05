<template>
  <div class="dropdown">
    <span>{{ title }}：</span>
    <el-input
      placeholder="请选择"
      v-model="input"
      class="input-with-select input"
      size="small"
    >
      <el-select v-model="input" slot="append">
        <el-option
          :value="item"
          v-for="(item, index) in taskStatusArr"
          :key="index"
          @click.native="selectvalue(index)"
        ></el-option>
      </el-select>
    </el-input>
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
    },
    taskStatusArr: {
      type: Array,
      require: true
    }
  },

  created() {},

  methods: {
    selectvalue(index) {
      this.$emit('select', index)
    }
  }
}
</script>

<style scoped>
.dropdown {
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
