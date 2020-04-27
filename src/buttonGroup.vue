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
         console.warn('funk-button-group can only contain funk-button components')
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
  }
  > .funk-button:first-child {
    border-bottom-left-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius);
  }
  > .funk-button:last-child {
    border-bottom-right-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }
  > .funk-button:not(:first-child) {
    position: relative;
    margin-left: -1px;
  }
}
</style>