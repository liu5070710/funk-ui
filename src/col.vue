<template>
  <div class="col" :class="[`col-${span}`,offset &&`offset-${offset}`]">
    <slot></slot>
  </div>
</template>
<script>
export default {
   name:"Funk-Col",
   props:{
      span:{
         type:[Number,String]
      },
      offset:{
         type:[Number,String]
      }
   },
   created(){
      console.log(typeof this.span);
   }
}
</script>
<style lang="scss">
.col {
  height: 100px;
  background: gray;
  width: 50%;
  border: 1px solid red;
  $class-prefix: col-; 
  @for $n from 1 through 24 {
  &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
  &.#{$class-prefix}#{$n}{
     margin-left: ($n / 24) * 100%;
    } 
  }
}
</style>