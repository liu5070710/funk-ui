<template>
  <button class="funk-button" :class="`icon-${iconPosition}`">
    <svg class="icon" v-if="icon">
      <use :xlink:href="icon" />>
    </svg>
    <div class="content">
      <slot ref="a">按钮</slot>
    </div>
  </button>
</template>
<script>
export default {
  mounted() {
    console.log(this.iconPosition);
  },
  created() {
    if (this.iconPosition === "right") {
    }
  },
  data() {
    return {};
  },
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value !== "left" && value != "right");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.funk-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  height: var(--button-height);
  font-size: var(--font-size);
  border-radius: var(--border-radius);
  color: var(--color);
  padding: 0 0.73em;
  font: inherit;
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    border-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    width: 1em;
    height: 1em;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
}
</style>