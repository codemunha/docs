import Vue from 'vue'
// core
import '@babel/polyfill'
import 'dsl-core/src/plugins'
import DslPlugin from 'dsl-core/src/components/dsl-components/index.js'
// app
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'
import Components from '@/components'
import '@/plugins'
import '@/theme/index.less'
import '@/utils'
import VueZoomer from 'vue-zoomer'

Vue.config.productionTip = false
Vue.use(DslPlugin)
Vue.use(VueZoomer)
Vue.use(Components)
new Vue({
  router,
  store,
  i18n,
  DslPlugin,
  Components,
  render: h => h(App)
}).$mount('#app')
