import store from '@/store'

/** handle version before add routes */
const version = store.getters['appStore/docVersion']
const versionList = store.getters['appStore/docVersionList']
if (!version || !versionList.find(v => v.value === version)) {
  store.commit('appStore/VERSION', versionList[0].value)
}
store.commit('appStore/VERSION_LIST', versionList)

/** add routes */
const routes = []

function addRoute(route) {
  routes.push(route)
}

export {
  routes,
  addRoute
}
