import toast from './toast.vue'
export default {
   install(Vue, options) {
      Vue.prototype.$toast = function (message, toastOpts) {
         if (currtoast) {
            currtoast.close()
         }
         let currtoast = createToast(Vue, message, toastOpts)
         console.log(currtoast);
      }
   }
}

function createToast(Vue, message, toastOpts) {
   let constructor = Vue.extend(toast)
   let toastCom = new constructor({
      propsData: {
         closeButton: toastOpts
      }
   })
   toastCom.$slots.default = [message]
   toastCom.$mount()
   document.body.appendChild(toastCom.$el)
   return toastCom
}