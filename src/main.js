// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics, { loadScript } from 'vue-analytics'
import App from './App'
import router from './router'

Vue.use(VueRouter)
Vue.use(VueAnalytics)

loadScript('UA-51355575-8')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
