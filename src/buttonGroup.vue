<template>
  <div class="funk-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      if (node.nodeName !== "BUTTON") {
        console.warn(
          "funk-button-group can only contain funk-button components"
        );
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.funk-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .funk-button {
    border-radius: 0;
    &:first-child {
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
    }
    &:last-child {
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:hover {
       z-index:1
    }
  }
}
</style>