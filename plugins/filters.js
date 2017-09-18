import Vue from 'vue'

Vue.filter('percentage', (value = 0, decimals = 0) => {
  value *= 100
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals) + ' %'
})

Vue.filter('fullname', (value) => {
  return `${value.name.first} ${value.name.last}`
})
