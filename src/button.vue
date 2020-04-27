<template>
  <button class="funk-button" :class="`icon-${iconPosition}`">
    <funk-icon class="icon" :name="icon" v-if="icon"></funk-icon>
    <funk-icon class="loading" name="#i-loading" v-if="icon"></funk-icon>
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
@keyframes spin {
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(360deg);
   }
}
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
  &:hover {border-color: var(--border-color-hover);}
  &:active {border-color: var(--button-active-bg);}
  &:focus {outline: none;}
  > .icon {order: 1;}
  > .content {order: 2;}
  &.icon-right {
    > .icon {order: 2;margin-left: 0.3em;margin-right: 0;}
    > .content {order: 1;}
  }
  .loading {
   //   transform-origin:(.15em .15em);
     animation: spin 1s infinite linear;
  }
}
</style>