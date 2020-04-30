<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>
<script>
export default {
  name: "FunkTabsHead",
  inject: ["eventBus"],
  created() {
    console.log(this.eventBus);
  }
};
</script>
<style lang="scss" scoped>
.tabs-head {
}
</style>