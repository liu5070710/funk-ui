import Vue from 'vue'
import Button from './button.vue'
// import Icon from './icon.vue'
import ButtonGroup from './buttonGroup.vue'
import Input from './input.vue'
import Row from './row.vue';
import Col from './col.vue';
import Layout from './layout.vue';
import Header from './header.vue';
import Container from './container.vue';
import Slider from './slider.vue';
import Footer from './footer.vue';

import toastPlugin from './toast-plugin.js'
Vue.use(toastPlugin)

Vue.component('funk-button',Button)
// Vue.component('funk-icon',Icon)
Vue.component('funk-button-group',ButtonGroup)
Vue.component('funk-input',Input)
Vue.component('funk-row',Row)
Vue.component('funk-col',Col)

Vue.component('funk-layout',Layout)
Vue.component('funk-header',Header)
Vue.component('funk-container',Container)
Vue.component('funk-slider',Slider)
Vue.component('funk-footer',Footer)

new Vue({
   el:'#app',
   data:{
      loading1:false,
      loading2:false,
      loading3:true,
      msg:'hi'
   },
   methods:{
      inputChange({target}){
         console.log(target.value);
      },
      toastTest(){
         // this.$toast() 第二个参数传关闭按钮的配置参数
         this.$toast('这是一条提示信息',{
            text:'ok',
            callback(toast){
               console.log('用户点击ok');
               console.log('回传的toast实例',toast);
            }
         })
      }
   },
   mounted(){
      
   }
})