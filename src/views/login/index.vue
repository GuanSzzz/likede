<template>
  <div class="bg">
    <div class="login-form">
      <img src="../../assets/images/logo.png" alt="" class="login-logo">
      <!-- 表单 -->
      <el-form ref="loginForm" :model="loginForm">

        <el-form-item prop="username">
          <el-input
            ref="username"
            v-model="username"
            prefix-icon="el-icon-mobile"
            placeholder="Username"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">

          <el-input
            :key="passwordType"
            ref="password"
            v-model="password"
            prefix-icon="el-icon-lock"
            suffix-icon="el-icon-view"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />

        </el-form-item>

        <el-form-item prop="authcode">
          <el-input
            ref="username"
            v-model="username"
            prefix-icon="el-icon-s-claim"
            placeholder="请输入验证码"
            name="authcode"
            type="text"
            tabindex="1"
            auto-complete="on"
          >
            <template #suffix>
              <img
                class="login-authcode"
                src="https://likede2-java.itheima.net/api/user-service/user/imageCode/HA9fdVX81uQl9EoSI6BQs6oxnhRb56rA
"
                alt=""
              >
            </template>
          </el-input>
        </el-form-item>

        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>

      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  created() {

  },

  methods: {

  }
}
</script>

<style scoped>
.bg{
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  background-image: url('../../assets/images/bg.png');
}
.login-form{
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
.login-logo{
   position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
    border-style: none;
}
::v-deep .el-input__inner{
  width: 446px;
  height: 52px;
}
::v-deep .el-button{
  width: 448px;
  height: 52px;
  background: linear-gradient(262deg,#2e50e1,#6878f0);
}
.login-authcode{
  height:52px;
  position: relative;
  right: -2px;
  top: 1px;
}

</style>
