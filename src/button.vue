<template>
  <button class="funk-button" :class="buttonClassed" @click="$emit('click')">
    <funk-icon class="icon" :name="icon" v-if="icon && !loading"></funk-icon>
    <funk-icon class="loading icon" name="#i-loading" v-if="loading"></funk-icon>
    <div class="content">
      <slot ref="a">按钮</slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon.vue";
export default {
  components: {
    "funk-icon": Icon
  },
  mounted() {
  },
  data() {
    return {};
  },
  props: {
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value !== "left" && value != "right");
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClassed(){
      let classArray = [`icon-${this.iconPosition}`]
      if(this.disabled){
        classArray.push(`button-disabled`)
      }
      return  classArray
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size : 14px;
$button-height: 32px;
$button-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
$button-bg: #fff;
$button-active-bg: #eee;
@keyframes spin {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
.funk-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  height: $button-height;
  font-size: $font-size;
  border-radius: $button-radius;
  color: $color;
  padding: 0 0.73em;
  font: inherit;
  border: 1px solid $border-color;
  background: $button-bg;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    border-color: $button-active-bg;
    box-shadow:inset 0px 0px 5px 1px rgb(114, 113, 113);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
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
  &.button-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>