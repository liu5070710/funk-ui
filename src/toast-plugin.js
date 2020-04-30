import toast from './toast.vue'
export default {
   install(Vue, options) {
      Vue.prototype.$toast = function (message, toastOpts) {
         // console.log(toastOpts);
         //propsData
         let constructor = Vue.extend(toast)
         let toastCom = new constructor({
            propsData:{
               closeButton:toastOpts
            }
         })
         toastCom.$slots.default = [message]
         toastCom.$mount()
         document.body.appendChild(toastCom.$el)
      }
   }
}