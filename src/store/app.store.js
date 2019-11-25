export const namespaced = true
export const state = {
  docVersionList: [
    // {
    //   value: '4.x',
    //   label: '4.x'
    // }
    // {
    //   value: '3.x',
    //   label: '3.x'
    // },
    {
      value: '2.x',
      label: '2.x'
    },
    {
      value: '1.x',
      label: '1.x'
    }
  ],
  docVersion: null
}
export const mutations = {
  VERSION_LIST (state, payload) {
    state.docVersionList = payload
  },
  VERSION (state, payload) {
    state.docVersion = payload
  }
}
export const getters = {
  docVersionList ({ docVersionList }) {
    return docVersionList
  },
  docVersion ({ docVersion }) {
    return docVersion
  }
}
export const actions = {
  setDocVersionList ({ commit }, version) {
    commit('VERSION_LIST', version)
  },
  setDocVersion ({ commit }, version) {
    commit('VERSION', version)
  }
}
