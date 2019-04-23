// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { NavBar, Swipe, SwipeItem, Button } from 'vant'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
// 导入时间格式化
import moment from 'moment'
// 导入axios
import axios from 'axios'
// 使用axios
axios.defaults.baseURL = ''
Vue.prototype.http = axios
Vue.use(NavBar)
  .use(Swipe)
  .use(SwipeItem)
  .use(Button)

Vue.config.productionTip = false

// 定义全局时间格式化过滤器
Vue.filter('dataFormat', function (dataStr, pattern = 'YYYY-MM-DD HH-mm-ss') {
  return moment(dataStr).format(pattern)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
