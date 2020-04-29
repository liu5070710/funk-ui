<template>
   <div class="toast">
      <slot></slot>
   </div>
</template>
<script>
export default {
   name:'FunkToast'
}
</script>
<style lang="scss" scoped>
.toast {
   position: fixed;
   display:flex;
   align-items: center;
   transform: translateX(-50%);
   left: 50%;
   padding: 0 15px;
   height: 50px;
   border-radius: 4px;
   font-size: 0.8em;
   background-color: rgba($color: #000000, $alpha: .75);
   color: #fff;
}
</style>