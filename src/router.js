import VueRouter from 'vue-router'
import Home from 'components/home'
import Help from 'components/help'
import Changelog from 'components/changelog'

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/changelog', component: Changelog },
    { path: '/help', component: Help }
  ]
})
