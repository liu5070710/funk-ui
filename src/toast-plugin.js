import toast from './toast.vue'
export default {
   install(Vue, options) {
      Vue.prototype.$toast = function (message) {
         let constructor = Vue.extend(toast) 
         let toastCom =new constructor()
         toastCom.$slots.default = [message]
         toastCom.$mount()
         document.body.appendChild(toastCom.$el)
      }
   }
}