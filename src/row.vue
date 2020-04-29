<template>
  <div class="row" :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Funk-Row",
  props: {
    gutter: {
      type: [Number, String]
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
}
</style>