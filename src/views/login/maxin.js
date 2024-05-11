/**
 * 登陆界面交互混入
 */
export default {
  data () {
    return {
      reckonTimeFlag: 60, // 倒计时
      reckonTime: null, // 定时器
      otherLoginFlag: false
    }
  },
  created () {

  },
  computed: {
    veriCodeTips () {
      return document.querySelector('.veri-code-tips')
    },
    veriCode () {
      return document.querySelector('.veri-code')
    },
    phone () {
      return document.querySelector('.phone')
    },
    pwdBtn () {
      return document.querySelector('.pwd')
    },
    user () {
      return document.querySelector('.user')
    },
    otherLoginBtn () {
      return document.querySelector('.sms-login-btn')
    }
  },
  methods: {
    /** 切换登录方式 */
    otherLoginClick () {
      if (this.otherLoginFlag) {
        this.veriCode.style.opacity = '0'
        this.veriCode.style.zIndex = '0'
        this.veriCode.style.transform = 'translate(0, -90px)'
        this.phone.style.opacity = '0'
        this.phone.style.zIndex = '0'
        this.phone.style.transform = 'translate(0, -0px)'

        this.user.style.opacity = '1'
        this.pwdBtn.style.opacity = '1'
        this.otherLoginBtn.innerHTML = 'SMS Login'
        this.otherLoginFlag = false
      } else {
        this.phone.style.opacity = '1'
        this.phone.style.zIndex = '1'
        this.phone.style.transform = 'translate(0, -175px)'

        this.veriCode.style.opacity = '1'
        this.veriCode.style.zIndex = '1'
        this.veriCode.style.transform = 'translate(0, -175px)'
        this.user.style.opacity = '0'
        this.pwdBtn.style.opacity = '0'
        this.otherLoginBtn.innerHTML = 'Password Login'
        this.otherLoginFlag = true
      }
    },
    // 定时器
    countDown () {
      this.veriCodeTips.innerHTML = `RESEND(${this.reckonTimeFlag})`
      this.reckonTimeFlag--
      if (this.reckonTimeFlag < 0) {
        clearInterval(this.reckonTime)
        this.reckonTimeFlag = 60
        this.veriCodeTips.innerHTML = 'Click To Get'
        this.veriCodeTips.style.color = 'rgb(39, 150, 247)'
      }
    },

    // 点击事件触发的方法
    veriCodeTipsClick () {
      this.veriCodeTips.onclick = null
      if (this.reckonTime) return
      this.veriCodeTips.style.color = 'rgb(153, 151, 151)'
      this.reckonTime = setInterval(this.countDown, 1000)
      this.countDown()
    }

  }
}
