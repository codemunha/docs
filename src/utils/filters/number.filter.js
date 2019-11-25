import StringMask from 'string-mask'

export default {
  nfInteger: num => {
    if (num === null || num === undefined || isNaN(num)) {
      return num
    }
    return Number(num).toLocaleString()
  },
  nfIntegerNoComma: num => {
    if (num === null || num === undefined || isNaN(num)) {
      return num
    }
    return parseInt(num)
  },
  nfCurrency: num => {
    if (num === null || num === undefined || isNaN(num)) {
      return num
    }
    return parseFloat(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  },
  nfPhoneNumber: num => {
    var formatter = new StringMask('000-000-0000')
    var result = formatter.apply(num) // 089-999-9999
    return result
  },
  nfAccountNo: num => {
    var formatter = new StringMask('000-0-00000-0')
    var result = formatter.apply(num) // 100-0-01263-8
    return result
  },
  nfIdentificationNo: num => {
    var formatter = new StringMask('0-0000-00000-00-0')
    var result = formatter.apply(num) // 9-9999-99999-99-9
    return result
  }
}
