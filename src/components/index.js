import AuthModal from './AuthModal.vue'
import CommonAlert from './CommonAlert.vue'
import CommonButton from './CommonButton.vue'
import CommonCard from './CommonCard.vue'
import DropdownMenu from './DropdownMenu.vue'
import CommonFilter from './Filter.vue'
import TextDetail from './TextDetail.vue'
import CommonSider from './Sider.vue'

const componentList = [
  AuthModal, 
  CommonAlert, 
  CommonButton, 
  CommonCard, 
  DropdownMenu, 
  CommonFilter, 
  TextDetail,
  CommonSider
]

const install = function(Vue) {
  componentList.forEach( component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
