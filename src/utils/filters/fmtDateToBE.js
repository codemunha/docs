import moment from 'moment'
var DDMMYYYHHmmssBackSlashSep = 'DD/MM/YYYY HH:mm:ss'
var DDMMYYYHyphenSep = 'DD-MM-YYYY'
export default {
  dfDatetimeTH: val => {
    try {
      if (val === null || val === undefined || val === '') {
        return val
      }
      var d
      if (typeof val != 'string') {
        d = moment(val)
      } else if (val.indexOf('/') > 0) {
        d = moment(val, DDMMYYYHHmmssBackSlashSep)
      } else if (val.indexOf('-') > 0) {
        d = moment(val, DDMMYYYHyphenSep)
      }

      return (
        d.format('DD') +
        '/' +
        d.format('MM') +
        '/' +
        (543 + Number(d.format('YYYY'))) +
        ' ' +
        d.format('HH:mm:ss')
      )
    } catch (error) {
      return ''
    }
  },
  dfDateTH: val => {
    try {
      if (val === null || val === undefined || val === '') {
        return val
      }
      var d
      if (typeof val != 'string') {
        d = moment(val)
      } else if (val.indexOf('/') > 0) {
        d = moment(val, DDMMYYYHHmmssBackSlashSep)
      } else if (val.indexOf('-') > 0) {
        d = moment(val, DDMMYYYHyphenSep)
      }

      return (
        d.format('DD') +
        '/' +
        d.format('MM') +
        '/' +
        (543 + Number(d.format('YYYY')))
      )
    } catch (error) {
      return ''
    }
  }
}