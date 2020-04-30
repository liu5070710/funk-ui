<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "FunkTabsHead",
  inject: ["eventBus"],
  created() {
   //  console.log(this.eventBus);
  }
};
</script>
<style lang="scss" scoped>
$tab-height:40px;
.tabs-head {
  border: 1px solid red;
  height: $tab-height;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  > .actions-wrapper {
     margin-left: auto;
  }
}
</style>