<template>
   <div class="toast">
      <slot></slot>
   </div>
</template>
<script>
export default {
   name:'FunkToast',
   props:{
      autoClose: {type: Boolean,default:true},
      delay: {type: [Number, String],default: 2}
   },
   data(){return {}},
   mounted(){
      setTimeout(()=>{
         this.close() 
      },this.delay * 1000)
   },
   methods:{
      close(){
         this.$el.remove()
         this.$destroy()
      }
   },
}
</script>
<style lang="scss" scoped>
.toast {
   $font-size: 14px; $toast-height: 40px;position: fixed;display: flex; align-items: center; transform: translateX(-50%);
   left: 50%;padding: 0 15px; height: $toast-height; border-radius: 3px;font-size: $font-size;
   background-color: rgba($color: #000000, $alpha: .75); color: #fff;
}
</style>