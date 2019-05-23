// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import {setCookie,getCookie,delCookie} from '@/cookie.js';

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http=Axios
Vue.prototype.$cookie ={
  setCookie,
  getCookie,
  delCookie
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
