import VueRouter from 'vue-router'
import Home from 'components/pages/home'
import FAQ from 'components/pages/faq'
import Changelog from 'components/pages/changelog'
import ga from 'vue-ga'

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/changelog', component: Changelog },
    { path: '/faq', component: FAQ }
  ]
})

ga(router, 'UA-51355575-8')

export default router
