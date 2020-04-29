<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
function validator(value) {
  let flag = true;
  let keys = Object.keys(value);
  keys.forEach(key => {
    if (!["span", "offset", "gutter"].includes(key)) flag = false;
  });
  return flag;
}
export default {
  name: "Funk-Col",
  props: {
    span: { type: [Number, String] },
    offset: { type: [Number, String] },
    gutter: { type: [Number, String] },
    phone: { type: Object, validator },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator }
  },
  computed: {
    colClass() {
      let { span, offset, phone, ipad, narrowPc, pc, widePc } = this;
      // let phoneClass = [];
      console.log(narrowPc);
      
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        phone && `col-phone-${phone.span}`,
        ipad && `col-ipad-${ipad.span}`,
        narrowPc && `col-narrow-pc-${narrowPc.span}`,
        pc && `col-pc-${pc.span}`,
        widePc && `col-wide-pc-${widePc.span}`
      ];
    },
    colStyle() {
      let { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    }
  },
  mounted() {
  }
};
</script>
<style lang="scss">
.col {
  height: 100px;
  background: #2c3e50;
  width: 50%;
  border: 1px solid #e74c3c;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  // 手机
  @media (max-width: 576px) {
    $class-prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  //ipad
  @media (min-width: 577px) and (max-width: 768px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  //窄屏pc
  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  //pc
  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  //宽屏pc
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>