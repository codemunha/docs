import union from 'lodash/union'
import menuComponents from './menu-components'
import menuDemo from './menu-demo'
import Store from '@/store'

const menu = union(
  menuComponents,
  menuDemo
)

const menuObj = { menuList: menu }

Store.commit('coreStore/SET_MENU', menuObj)

export default menu
