<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "FunkLayout",
  data() {
    return {
      layoutClass: {
        hasSlider: false
      }
    };
  },
  mounted() {
    console.log(this.$children);
    this.$children.forEach(child => {
      if (child.$options.name === "FunkSlider") {
        this.layoutClass.hasSlider = true;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSlider {
    flex-direction: row;
  }
}
</style>  