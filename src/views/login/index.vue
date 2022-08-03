<template>
  <div class="bg">
    <div class="login-form">
      <img src="../../assets/images/logo.png" alt="" class="login-logo" />
      <!-- 表单 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginFormRules">
        <el-form-item prop="loginName">
          <el-input
            v-model="loginForm.loginName"
            prefix-icon="el-icon-mobile"
            placeholder="请输入账号"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            show-password
            placeholder="请输入密码"
          />
        </el-form-item>

        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            prefix-icon="el-icon-s-claim"
            placeholder="请输入验证码"
          >
            <template #suffix>
              <img
                @click="getimgCode"
                class="login-authcode"
                :src="$store.state.user.imgCode"
                alt=""
              />
            </template>
          </el-input>
        </el-form-item>

        <el-button
          type="primary"
          style="width: 100%; margin-bottom: 30px"
          @click="login"
          :loading="isload"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions: mapCodeActions } = createNamespacedHelpers('user')
export default {
  data() {
    return {
      loginForm: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        loginType: 0,
        clientToken: 2
      },
      loginFormRules: {
        loginName: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      isload: false
    }
  },

  created() {
    this.getImgCode(2)
  },

  methods: {
    ...mapCodeActions(['getImgCode', 'getToken']),
    // 点击或者刷新时更新验证码图片
    getimgCode() {
      this.getImgCode(2)
    },
    // 点击登录
    async login() {
      this.isload = true
      try {
        // 表单提交前验证
        await this.$refs.loginForm.validate()
        await this.getToken(this.loginForm)
        // 判断验证码提示信息
        if (!this.$store.state.user.data.success) {
          this.$message({
            message: this.$store.state.user.data.msg,
            type: 'warning'
          })
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.isload = false
      }
    }
  }
}
</script>

<style scoped>
.bg {
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  background-image: url('../../assets/images/bg.png');
}
.login-form {
  box-sizing: border-box;
  position: absolute;
  width: 518px;
  height: 388px;
  top: 50%;
  left: 50%;
  margin-top: -194px;
  margin-left: -259px;
  padding: 76px 35px 0;
  background: #fff;
  box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
  border-radius: 10px;
}
.login-logo {
  position: absolute;
  width: 96px;
  height: 96px;
  top: -46px;
  left: 50%;
  margin-left: -48px;
  border-style: none;
}
::v-deep .el-input__inner {
  width: 446px;
  height: 52px;
}
::v-deep .el-button {
  width: 448px;
  height: 52px;
  background: linear-gradient(262deg, #2e50e1, #6878f0);
}
.login-authcode {
  height: 52px;
  position: relative;
  right: -2px;
  top: 1px;
}
</style>
