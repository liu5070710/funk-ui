import toast from './toast.vue'

let currtoast;
export default {
   install(Vue) {
      Vue.prototype.$toast = (message, toastOpts) => {
         if (currtoast) {
            currtoast.close()
         }
         let onClose = () => {
            currtoast = null;
         };
          currtoast = createToast(Vue, message, toastOpts, onClose)

      }
   }
}

function createToast(Vue, message, toastOpts = {}, onClose) {
   toastOpts.message = message
   let constructor = Vue.extend(toast)
   let toastCom = new constructor({ propsData: toastOpts}).$mount()
   toastCom.$on("close", onClose);
   document.body.appendChild(toastCom.$el)
   return toastCom
}