<template>
  <div class="tabs-pane" :class="paneClass" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "FunkTabsPane",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  computed:{
     paneClass(){
        return {
           active: this.active
        }
     }
  },
  props: {
    name: {
      type: Number | String,
      required: true
    }
  },
  created() {
    //tabs的所有组件监听update:selected事件包括自己
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
        console.log(`${this.name}相关被选中了`);
        this.active = true;
      } else {
        console.log(`${this.name}相关未被选中`);
        this.active = false;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.tabs-pane {
  &.active {
    background-color: rgb(49, 185, 144);
  }
}
</style>