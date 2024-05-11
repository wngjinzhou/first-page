import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueBus from 'vue-bus'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 初始化css
import 'normalize.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.config.devtools = false
Vue.use(VueBus)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
