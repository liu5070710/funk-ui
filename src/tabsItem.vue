<template>
  <div class="tabs-item" @click="xxx" :class="itemClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "FunkTabsItem",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  computed: {
    itemClass() {
      return {
        active: this.active
      };
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: Number | String,
      required: true
    }
  },
  created() {
    //tabs的所有组件监听update:selected事件包括自己
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
        console.log(`${this.name}被选中了`);
        this.active = true;
      } else {
        console.log(`${this.name}未被选中`);
        this.active = false;
      }
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-item {
  display: flex;
  align-items: center;
  padding: 0 2em;
  flex-shrink: 0;
  &.active {
    background-color: rgb(64, 77, 189);
  }
}
</style>