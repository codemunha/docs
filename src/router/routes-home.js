import { addRoute } from './routes'

addRoute({
  path: '/',
  redirect: '/home',
  component: () => import(/* webpackChunkName: "HomeLayout" */ '@/layout/HomeLayout.vue'),
  children: [
    {
      name: 'home',
      path: '/home',
      component: () => import(/* webpackChunkName: "home" */'@/views/Home')
    }
  ]
})