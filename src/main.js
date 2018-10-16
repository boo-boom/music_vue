import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './assets/css/reset.css'
import './assets/font/iconfont.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
