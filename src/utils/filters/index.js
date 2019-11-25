import Vue from 'vue'
import DateFilter from './date.filter'
import fmtDateToBE from './fmtDateToBE'
import NumberFilter from './number.filter'
import ValidFilter from './valid.filter'

for (let item in DateFilter) {
  Vue.filter(item, DateFilter[item])
}

for (let item in fmtDateToBE) {
  Vue.filter(item, fmtDateToBE[item])
}

for (let item in NumberFilter) {
  Vue.filter(item, NumberFilter[item])
}

for (let item in ValidFilter) {
  Vue.filter(item, ValidFilter[item])
}