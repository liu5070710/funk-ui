<template>
  <div class="tabs-item" @click="itemClick" :class="itemClass">
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
        active: this.active,
        disabled: this.disabled
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
    itemClick() {
       if(this.disabled) {return}
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
    font-weight: 600;
    border-bottom: 2px solid rgb(91, 136, 149);
    transition: all 0.1s;
  }
  &.disabled {
     color: gray
  }
}
</style>