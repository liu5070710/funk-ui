<template>
  <div class="wrapper">
    <input
      type="text"
      :class="{'error':error}"
      :value="value"
      :disabled="disabled"
      :readOnly="readOnly"
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    />
    <template v-if="error">
      <Icon name="#i-error" class="icon-error"></Icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  components: {
    Icon
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
// --button-height: 32px;
// --font-size: 14px;
// --button-bg: #fff;
// --button-active-bg: #eee;
// --border-radius: 4px;
// --color: #333;
// --border-color: #999;
// --border-color-hover: #666;
$border-color: #999;
$height: 32px;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: $font-size;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border: 1px solid $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $border-color;
      outline: none;
    }
    &[disabled],
    &[readOnly] {
      color: rgb(173, 173, 173);
      border: 1px solid rgb(173, 173, 173);
      cursor: not-allowed;
    }
  }
  > .icon-error {
    border-color: $red;
    fill: $red;
  }
  > .errorMessage {
    color: $red;
  }
}
</style>
