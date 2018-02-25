import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import FAQ from './components/pages/FAQ'
import Changelog from './components/pages/Changelog'
import ga from 'vue-ga'

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/changelog', component: Changelog },
    { path: '/faq', component: FAQ }
  ]
})

if (process.env.NODE_ENV === 'production') {
  ga(router, 'UA-51355575-8')
}

export default router
