import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import * as appStore from './app.store.js'
import * as coreStore from 'dsl-core/src/store/index'
Vue.use(Vuex)

const localStore = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  modules: {
    coreStore,
    appStore
  },
  plugins: [localStore.plugin]
})
