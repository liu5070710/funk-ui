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
      type: String,
      validator(value) {
        return ["left", "right", "center"].indexOf(value) >= 0;
      }
    }
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: `-${gutter / 2}px`,
        marginRight: `-${gutter / 2}px`
      };
    },
    rowClass() {
      let { align } = this;
      return [align && `align-${align}`];
    }
  },
  mounted() {
    this.$children.forEach(child => (child.gutter = this.gutter));
  }
};
</script>
<style lang="scss" >
.row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
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