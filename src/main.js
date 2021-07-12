import Vue from 'vue'
import App from './App.vue'

window.Vue = Vue;
require('../dist/common-components.js');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')