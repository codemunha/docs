import Vue from 'vue'
import i18n from '@/i18n'

// https://vuejs.org/v2/guide/list.html#Caveats
export default {
  notEmpty(error, value, name, label) {
    let msg = ''

    if (value == undefined || value.length == 0) {
      msg = i18n.t('msg.validator.notEmpty', {
        label: i18n.t(label)
      })
      // msg = label
    }

    Vue.set(error, name, msg)
    return msg === ''
  },
  thaiId(error, value, name, label) {
    let msg = ''
    if (value) {
      let num = value.toString()
      if (num.length == 13) {
        let sum = 0
        let i = 0
        for (i = 0; i < 12; i++) {
          sum += parseFloat(num.charAt(i)) * (13 - i)
        }
        if ((11 - (sum % 11)) % 10 == parseFloat(num.charAt(12))) {
          // console.log(value)
          msg = ''
        } else {
          msg = i18n.t('msg.validator.notFormat', {
            label: i18n.t(label)
          })
        }
      } else {
        msg = i18n.t('msg.validator.notFormat', {
          label: i18n.t(label)
        })
      }
    } else {
      msg = i18n.t('msg.validator.notEmpty', {
        label: i18n.t(label)
      })
    }

    Vue.set(error, name, msg)
    return msg === ''
  },
  validEmail (str) {
    if (str) {
      let mail = str.trim()
      let patt = /^(([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)(\s*;\s*|\s*$))*$/i
      // let patt = /^[A-Za-z0-9]+[A-Za-z0-9._-]+@[A-Za-z]+(\.[A-Za-z]{2,5})+(\.[A-Za-z]{2,4})?$/
      return patt.test(mail)
    }
  },
  formatEmail (str) {
    if (str) {
      str = str.replace(/ /gim, ';')
      str = str.replace(/,/gim, ';')
      while (str.search(';;') != -1) {
        str = str.replace(/;;/gim, ';')
      }
      if (str.length == (str.lastIndexOf(';') + 1)) {
        str = str.substring(0, str.lastIndexOf(';'))
      }
      if (str.indexOf(';') == 0) {
        str = str.substring(1)
      }
      return str
    }
  }
}
