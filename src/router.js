import VueRouter from 'vue-router'
import Home from 'components/pages/home'
import FAQ from 'components/pages/faq'
import Changelog from 'components/pages/changelog'

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/changelog', component: Changelog },
    { path: '/faq', component: FAQ }
  ]
})
