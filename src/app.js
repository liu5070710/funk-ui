import Vue from 'vue'
import Button from './button.vue'

import Icon from './icon.vue'

import ButtonGroup from './buttonGroup.vue'
import Input from './input.vue'
import Row from './row.vue';
import Col from './col.vue';
import Layout from './layout.vue';
import Header from './header.vue';
import Container from './container.vue';
import Slider from './slider.vue';
import Footer from './footer.vue';

import Tabs from './tabs.vue';
import TabsHead from './tabsHead.vue'
import TabsItem from './tabsItem.vue';
import TabsBody from './tabsBody.vue';
import TabsPane from './tabsPane.vue';

import toastPlugin from './toast-plugin.js'

import Popover from './popover.vue'

import collapse from './collapse.vue'
import collapseItem from './collapse-item.vue'
Vue.use(toastPlugin)

Vue.component('funk-button', Button)

Vue.component('funk-icon', Icon)

Vue.component('funk-button-group', ButtonGroup)
Vue.component('funk-input', Input)
Vue.component('funk-row', Row)
Vue.component('funk-col', Col)

Vue.component('funk-layout', Layout)
Vue.component('funk-header', Header)
Vue.component('funk-container', Container)
Vue.component('funk-slider', Slider)
Vue.component('funk-footer', Footer)

Vue.component('funk-tabs', Tabs)
Vue.component('funk-tabs-head', TabsHead)
Vue.component('funk-tabs-item', TabsItem)
Vue.component('funk-tabs-body', TabsBody)
Vue.component('funk-tabs-pane', TabsPane)

Vue.component('funk-popover', Popover)
Vue.component('funk-collapse', collapse)
Vue.component('funk-collapse-item', collapseItem)

new Vue({
   el: '#app',
   data: {
      loading1: false,
      loading2: false,
      loading3: true,
      msg: 'hi',
      selectedTab: 'women',
      selectedTab: ['2'],
      single: false
   },
   methods: {
      inputChange({
         target
      }) {
         console.log(target.value);
      },
      toastTest() {
         // this.$toast() 第二个参数传关闭按钮的配置参数
         this.$toast(`你掷出:${parseInt(Math.random() * 100)}(0-100)`, {
            autoClose: false,
            position: "top",
            closeButton: {
               text: "触发回调",
               callback: toast => {
                  console.log("用户做一些事...");
                  console.log('toast实例',toast); //callback时把实例交给用户
               }
            }
         })
      }
   },
   created() {

   },
   mounted() {


   }
})