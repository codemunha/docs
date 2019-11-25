import Database from './db.json'
export default {
  getHisEducateHoldList (params) {
    const list = [...Database.hisEducateHoldList]
    if (!params) {
      return list
    }

    const sortFunction = (field, type) => (a, b) => (a[field] > b[field] ? (type === 'desc' ? -1 : 1) : ((type === 'desc' ? 1 : -1)))
    if (params.sortField && params.sortType) {
      list.sort(sortFunction(params.sortField, params.sortType))
    }

    const start = (params.pageIndex - 1) * params.pageSize
    const end = start + params.pageSize
    const PaginatedList = list.slice(start, end)

    return {
      pageIndex: params.pageIndex,
      pageSize: params.pageSize,
      fullListSize: list.length,
      list: PaginatedList,
      sortDirection: params.sortType || null,
      sortCriterion: params.sortField || null,
      reqParamMap: null,
      totalPages: Math.ceil(list.length / params.pageSize),
      sqlSortDirection: 'desc'
    }
  }
}