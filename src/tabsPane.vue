<template>
   <div class="tabs-pane">
      <slot></slot>
   </div>
</template>
<script>
export default {
   name:'FunkTabsPane',
   inject: ["eventBus"],
   created() {
     //tabs的所有组件监听update:selected事件包括自己
    this.eventBus.$on("update:selected", name => {
      console.log(name);
    });
  },
}
</script>
<style lang="scss" scoped>
   .tabs-pane {

   }
</style>