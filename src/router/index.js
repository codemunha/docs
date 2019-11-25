import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import iView from 'iview'

// add routes
import './routes-home'
import './routes-components'
import './routes-demo'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})
