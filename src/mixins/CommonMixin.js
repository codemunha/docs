import moment from 'moment'
import Constants from '@/utils/constants.js'
import ApplicationApi from '@/api/application/ApplicationApi'
import _ from 'lodash'
export default {
  data() {
    return {
      APP: Constants.APP,
      PAGING: { ...Constants.PAGING },
      TODAY: '',
      TODAY_MOMENT: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const date = await this.getCurrentDate()
      this.TODAY = date
      this.TODAY_MOMENT = moment(date, 'DD/MM/YYYY')
    },
    birdAlert(title, content) {
      this.$Modal.error({
        title: title,
        content: content
      })
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    focusValidate() {
      console.log('focusValidate------')
      var divs = document.querySelectorAll('.ivu-form-item-error input')
      // console.log(divs[1])
      // console.log('focusValidate------')
      // console.log(divs.length)
      // console.log(divs)
      // console.log('focusValidate------')
      try {
        if (divs[0].focus() != undefined)
        {
          divs[0].focus()
        }
        else if (divs[1].focus() != undefined)
        {
          divs[1].focus()
        }
        else
        {
          divs[2].focus()
        }
      } catch (e)
      {}
      // try {
      //   divs[0].focus()
      // }
      // catch {
      //   divs[1].focus()
      // }

      // alert('ok')
    },
    async getCurrentDate() {
      const resp = await ApplicationApi.getCurrentDate() // e.g. { "response": "07/10/2019" }
      return resp.response
    },
    isAfterToday(date) {
      return moment(date, 'DD/MM/YYYY').isAfter(this.TODAY_MOMENT)
    },
    compareDate(date1, date2, offset1, offset2) {
      const d1 = moment(date1, 'DD/MM/YYYY').add(offset1 || 0, 'days')
      const d2 = moment(date2, 'DD/MM/YYYY').add(offset2 || 0, 'days')
      if (d1.isSame(d2)) return 0
      else if (d1.isAfter(d2)) return 1
      else if (d1.isBefore(d2)) return -1
      return null
    },
    diffDate(date1, date2) {
      date1 = moment(date1, 'DD/MM/YYYY')
      date2 = moment(date2, 'DD/MM/YYYY')
      return Math.abs(date1.diff(date2, 'days'))
    },
    equals(value, other) {
      return _.eq(value, other)
    },
    equalsIgnoreCase(value, other) {
      return _.eq(String(value).toLowerCase(), String(other).toLowerCase())
    },
    // enable screen loading to wait all requests finish at once
    startLoading() {
      this.$store.commit('coreStore/HTTP_REQ')
    },
    // hide loading after all requests finish
    endLoading() {
      this.$store.commit('coreStore/HTTP_REQ_DONE')
    },
    clearLoading() {
      this.$store.commit('coreStore/HTTP_REQ_CLEAR')
    }
  }
}
