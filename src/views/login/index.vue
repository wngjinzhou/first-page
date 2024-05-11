<template>
  <!-- 登陆界面 -->
  <div class="login">
    <!-- 粒子特效 -->
    <div id="particles-js"></div>
    <!-- 登陆页面框 -->
    <div class="wrapper" v-loading="loginLoding" element-loading-text="登录中">
      <div class="login-form">
          <div class="tips">
            <h1>Login in this web.</h1>
          </div>
          <div class="form-wrapper">
            <div class="input-wrapper user">
              <input
                type="text"
                class="inputs"
                v-model="accountForm.account"
                placeholder="手机号/用户名/邮箱"
              >
            </div>
            <div class="input-wrapper pwd">
              <form>
                <input
                type="password"
                class="inputs"
                autocomplete=“off”
                v-model="accountForm.password"
                placeholder="密码"
              >
              </form>
            </div>
            <div class="input-wrapper phone">
              <input
                type="text"
                class="inputs"
                v-model="smsFrom.sms"
                placeholder="手机号"
              >
            </div>
            <div class="input-wrapper veri-code">
              <input
                type="text"
                class="inputs veri-code-input"
                v-model="smsFrom.verification"
                placeholder="验证码"
              >
              <span class="veri-code-tips" @click="veriCodeTipsClick">Click To Get</span>
            </div>
            <div class="btn-wrapper">
              <button class="form-btn sms-login-btn" @click="otherLoginClick">SMS Login</button>
              <button class="form-btn login-btn" @click="login" >Login</button>
            </div>
            <div class="other-login">
              <div class="divider">
                <span class="line"></span>
                <span class="divider-text">or</span>
                <span class="line"></span>
              </div>
              <div class="other-login-wrapper">
                <div class="other-login-item">
                  <img
                    src="./asset/QQ.png"
                    alt="QQ"
                  >
                </div>
                <div class="other-login-item">
                  <img
                    src="./asset/WeChat.png"
                    alt="WeChat"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import particlesConfig from './particles.json'
import maxin from './maxin'
import { login } from '@/api/user'
export default {
  name: 'Login',
  data () {
    return {
      smsFrom: {
        sms: '',
        verification: ''
      },
      accountForm: {
        account: '',
        password: ''
      },
      loginLoding: false
    }
  },

  mixins: [maxin],
  mounted () {
    // 粒子特效
    require('particles.js')
    // eslint-disable-next-line no-undef
    particlesJS('particles-js', particlesConfig)
  },

  methods: {
    async login () {
      this.loginLoding = true
      try {
        const { status } = await login({
          ...this.accountForm
        })
        if (status === 200) this.$message.success('登陆成功')
      } finally {
        this.loginLoding = false
      }
    }

  }
}

</script>
<style lang='scss' scoped>
@import "./style.scss";
.login{
  ::v-deep .el-loading-mask{
    opacity: 0.4;
  }
}
</style>
