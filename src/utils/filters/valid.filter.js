
export default {
  chkEmpty: val => {
    if (val === null || val === undefined || typeof val === 'undefined' || val === '') {
      return '-'
    }
    return val
  },
  chkMaxComment: val => {
    if (val === null || val === undefined || typeof val === 'undefined' || val === '') {
      return '-'
    }
    return val.slice(0, 100) + '...'
  },
  /**
   * INPUT:   1900600044289
   * RETURN:  1-9006-00044-28-9
   *
   * this filter copy logic from DslInputCid (the same pattern)
   */
  chkCID: val => {
    let reg = /(\d)(?=(\d{12}|\d{8}|\d{3}|\d{1})$)/g
    if (val !== null && val !== undefined && typeof val !== 'undefined' && val.length === 13) {
      return val.replace(reg, `$1-`)
    } else {
      return val
    }
  }
}
