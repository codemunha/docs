import moment from 'moment'
var vd1 = 'DD/MM/YYYY'
var vd11 = 'DD/MM/YYYY HH:mm:ss'
var vd12 = 'YYYY/MM/DD'
var vd2 = 'DD-MM-YYYY'
var vd22 = 'YYYY-MM-DD'

export default {
  dfDateTH: val => {
    if (val === null || val === undefined || val === '' || val === '-') {
      return val
    }
    var d
    if (typeof val === 'object') {
      d = moment(val)
    } else if (val.indexOf('/') === 2) {
      d = moment(val, vd1)
    } else if (val.indexOf('/') === 4) {
      d = moment(val, vd12)
    } else if (val.indexOf('-') === 2) {
      d = moment(val, vd2)
    } else if (val.indexOf('-') === 4) {
      d = moment(val, vd22)
    }
    return (
      d.format('DD') +
        '/' +
        d.format('MM') +
        '/' +
        (543 + Number(d.format('YYYY')))
    )
  },
  dfDatetimeTH: val => {
    if (val === null || val === undefined || val === '' || val === '-') {
      return val
    }
    var d
    if (typeof val != 'string') {
      d = moment(val)
    } else if (val.indexOf('/') > 0) {
      d = moment(val, vd11)
    } else if (val.indexOf('-') > 0) {
      d = moment(val, vd2)
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
  },
  dfTime: val => {
    if (val === null || val === undefined || val === '') {
      return val
    }
    var d
    if (typeof val != 'string') {
      d = moment(val)
    } else if (val.indexOf('/') > 0) {
      d = moment(val, vd11)
    } else if (val.indexOf('-') > 0) {
      d = moment(val, vd2)
    }

    return d.format('HH:mm:ss')
  }
}
