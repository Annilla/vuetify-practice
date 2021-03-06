// For IE11 must use 'require' not 'import'
require('babel-polyfill')

// Import Vue to start
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
