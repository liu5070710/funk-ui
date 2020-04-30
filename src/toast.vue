<template>
   <div class="toast">
      <slot></slot>
      <span class="closeButton" v-if="closeButton" @click="closeButtonClick()">{{closeButton.text}}</span>
   </div>
</template>
<script>
export default {
   name:'FunkToast',
   props:{
      autoClose: {type: Boolean,default:true},
      delay: {type: [Number, String],default: 2},
      closeButton:{
         type:Object,
         default(){
            return {
               text:'关闭',
               callback:undefined
            }
         }
      }
   },
   data(){return {}},
   mounted(){
      setTimeout(()=>{
         this.close() 
      },this.delay * 1000)
   },
   methods:{
      close(){
         this.$el.remove() //toast节点从dom真实DOM树上删除
         this.$destroy() //toast节点从AST(内存)中删除
      },
      closeButtonClick(){
         this.close()
         if(this.closeButton && typeof this.closeButton.callback === 'function')this.closeButton.callback(this)
      }
   },
}
</script>
<style lang="scss" scoped>
.toast {
   $font-size: 14px; $toast-height: 40px; position: fixed; display: flex; align-items: center; transform: translateX(-50%);
   left: 50%;padding: 0 15px; height: $toast-height; border-radius: 3px;font-size: $font-size;
   background-color: rgba($color: #000000, $alpha: .75); color: #fff;
   & .closeButton {
      display: inline-block;
      height: $toast-height;
      line-height: 40px;
      border-left: 1px solid rgb(136, 136, 136);
      padding-left: 13px;
      margin-left: 15px;
   }
}
</style>