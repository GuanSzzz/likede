<template>
  <div class="navbar">
    <div class="navbar-logo">
      <img src="~@/assets/images/imglogo.png" alt="" />
    </div>
    <div class="right-menu">
      <div class="block">
        <el-avatar
          :size="35"
          :src="$store.state.user.userInfo.image"
        ></el-avatar>
      </div>
      <div class="welcome">
        欢迎您，<span>{{ $store.state.user.userInfo.userName }}</span>
      </div>
      <span @click="loginout" class="login-out"
        >退出<i class="el-icon-caret-bottom"></i
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginout() {
      this.$store.state.user.token = ''
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  background-image: url('~@/assets/images/navbar.png');
  display: flex;
  justify-content: space-between;
  .navbar-logo {
    width: 88px;
    height: 35.81px;
    img {
      width: 100%;
    }
    margin-top: 10px;
    margin-left: 15px;
  }
  .right-menu {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    width: 240px;
    height: 60px;
    align-items: center;
    color: #fff;
    margin-right: 24px;
    .block {
      margin-right: 10px;
    }
    .login-out {
      cursor: pointer;
    }
    .welcome {
      width: 140px;
    }
  }
}
</style>
