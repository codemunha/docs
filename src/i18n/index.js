import Vue from 'vue'
import VueI18n from 'vue-i18n'
import merge from 'lodash/merge'
import DslEn from 'dsl-core/src/i18n/dsl-en'
import DslTh from 'dsl-core/src/i18n/dsl-th'
import LangEn from './lang-en'
import LangTh from './lang-th'

Vue.use(VueI18n)

// merge lang
const en = merge(DslEn, LangEn)
const th = merge(DslTh, LangTh)

function getCookie (cname) {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return 'th'
}

let getLocale = getCookie('locale')

export default new VueI18n({
  locale: getLocale,
  fallbackLocale: getLocale === 'th' ? 'en' : 'th',
  messages: {
    en,
    th
  },
  silentTranslationWarn: true
})
