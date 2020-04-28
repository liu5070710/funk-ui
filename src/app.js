import Vue from 'vue'
import Button from './button.vue'
// import Icon from './icon.vue'
import ButtonGroup from './buttonGroup.vue'
import Input from './input.vue'


Vue.component('funk-button',Button)
// Vue.component('funk-icon',Icon)
Vue.component('funk-button-group',ButtonGroup)
Vue.component('funk-input',Input)

new Vue({
   el:'#app',
   data:{
      loading1:false,
      loading2:false,
      loading3:true
   }
})