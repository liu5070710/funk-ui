<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "FunkCollapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String | Number
    }
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on("update:selected", name => { //向组件外通知组件内的选中状态
      this.$emit("update:selected", name); 
    });
    this.$children.forEach(vm =>{
      vm.single = this.single
    })
    
    
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    // if (this.single) {
    return {
      eventBus: this.eventBus
    };
    // }
  }
};
</script>

<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>