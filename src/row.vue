<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Funk-Row",
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String
    },
  },
  computed:{
    rowStyle(){
      let {gutter} =this
      return {marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}
    },
    rowClass(){
      let {align} =this
      return [align && `align-${align}`]
    }
  },
  mounted() {
    console.log(this.$children);
    this.$children.forEach(child => child.gutter = this.gutter);
  }
};
</script>
<style lang="scss" >
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>