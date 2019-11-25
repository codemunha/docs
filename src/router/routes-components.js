import { addRoute } from './routes'
import Store from '@/store'

const version = Store.getters['appStore/docVersion']

addRoute({
  path: '/',
  name: 'components',
  redirect: '/home',
  component: () => import(/* webpackChunkName: "MainLayout" */ '@/layout/MainLayout'),
  children: [
    {
      name: 'auto-complete',
      path: '/auto-complete',
      component: () => import(/* webpackChunkName: "components" */`@/views/components/${version}/ComponentAutoComplete`),
      meta: {
        screen: 'AUTO-COMPLETE',
        hasPermission: ''
      }
    },
    {
      name: 'button',
      path: '/button',
      component: () => import(/* webpackChunkName: "components" */`@/views/components/${version}/ComponentButton`),
      meta: {
        screen: 'BUTTON',
        hasPermission: ''
      }
    },
    {
      name: 'date-picker',
      path: '/date-picker',
      component: () => import(/* webpackChunkName: "components" */`@/views/components/${version}/ComponentDatePicker`),
      meta: {
        screen: 'DATE-PICKER',
        hasPermission: ''
      }
    },
    {
      name: 'input',
      path: '/input',
      component: () => import(/* webpackChunkName: "components" */`@/views/components/${version}/ComponentInput`),
      meta: {
        screen: 'INPUT',
        hasPermission: ''
      }
    },
    {
      name: 'modal',
      path: '/modal',
      component: () => import(/* webpackChunkName: "components" */`@/views/components/${version}/ComponentModal`),
      meta: {
        screen: 'MODAL',
        hasPermission: ''
      }
    },
    {
      name: 'table',
      path: '/table',
      component: () => import(/* webpackChunkName: "components" */`@/views/components/${version}/ComponentTable`),
      meta: {
        screen: 'TABLE',
        hasPermission: ''
      }
    },
    {
      name: 'uploadfile',
      path: '/uploadfile',
      component: () => import(/* webpackChunkName: "components" */`@/views/components/${version}/ComponentUploadFile`),
      meta: {
        screen: 'UPLOADFILE',
        hasPermission: ''
      }
    }
  ]
})