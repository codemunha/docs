import { addRoute } from './routes'

addRoute({
  'path': '/',
  'name': 'demo',
  'redirect': '/home',
  component: () => import(/* webpackChunkName: "MainLayout" */ '@/layout/MainLayout'),
  'children': [
    {
      'name': 'demo-crud',
      'path': '/demo-crud',
      'component': () => import(/* webpackChunkName: "demo" */'@/views/demo/DemoPageCrud'),
      meta: {
        screen: 'DEMO-CRUD',
        hasPermission: ''
      }
    },
    {
      'name': 'demo-crud_create',
      'path': '/demo-crud/create',
      'component': () => import(/* webpackChunkName: "demo" */'@/views/demo/DemoPageCrudCreate'),
      meta: {
        screen: 'DEMO-CRUD-CREATE',
        hasPermission: ''
      }
    },
    {
      'name': 'demo-crud_update',
      'path': '/demo-crud',
      'component': () => import(/* webpackChunkName: "demo" */'@/views/demo/DemoPageCrudUpdate'),
      meta: {
        screen: 'DEMO-CRUD-UPDATE',
        hasPermission: ''
      }
    },
    {
      'name': 'demo-crud2',
      'path': '/demo-crud2',
      'component': () => import(/* webpackChunkName: "demo" */'@/views/demo/DemoPageCrud2'),
      meta: {
        screen: 'DEMO-CRUD2',
        hasPermission: 'demoCrud2:menu'
      }
    },
    {
      'name': 'demo-crud2_create',
      'path': '/demo-crud2/create',
      'component': () => import(/* webpackChunkName: "demo" */'@/views/demo/DemoPageCrud2Create'),
      meta: {
        screen: 'DEMO-CRUD2-CREATE',
        hasPermission: 'demoCrud2:create'
        // hasPermission: ''
      }
    },
    {
      'name': 'demo-crud2_edit',
      'path': '/demo-crud2/edit/:id',
      'component': () => import(/* webpackChunkName: "demo" */'@/views/demo/DemoPageCrud2Detail'),
      meta: {
        screen: 'DEMO-CRUD2-EDIT',
        hasPermission: 'demoCrud2:edit'
      }
    },
    {
      'name': 'demo-crud2_view',
      'path': '/demo-crud2/view/:id',
      'component': () => import(/* webpackChunkName: "demo" */'@/views/demo/DemoPageCrud2Detail'),
      meta: {
        screen: 'DEMO-CRUD2-VIEW',
        hasPermission: 'demoCrud2:view'
      }
    }
  ]
})