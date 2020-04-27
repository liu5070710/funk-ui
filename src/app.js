import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'

Vue.component('funk-button',Button)
Vue.component('funk-icon',Icon)

new Vue({
   el:'#app',
   data:{
      loading1:false,
      loading2:false,
      loading3:true
   }
})