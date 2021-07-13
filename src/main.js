import Vue from 'vue'
import App from './App.vue'
import commonComponent from '../dist/commonComponents.common.js'

Vue.use(commonComponent)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')