<template>
  <div class="l-toast" :class="toastClasses" ref="toast">
    <div class="l-message">
      <div>{{message}}</div>
    </div>

    <span class="l-line" ref="line"></span>
    <span v-if="closeButton" class="l-close-btn" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  components: {},

  computed: {
    toastClasses() {
      return `l-position-${this.position}`;
    }
  },

  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 2000,
      validator(value) {
        return value === false || typeof value === "number";
      }
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "close",
          callback: undefined
        };
      }
    },
    message: {
      type: String
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "middle", "bottom"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
    };
  },

  created() {},

  mounted() {
    this.updateStyles();
    this.execAutoClose();
  },

  methods: {
    updateStyles() {
      //父元素min-height拿不到高度
      this.$nextTick(() => {
        this.$refs.line.style.height =
          this.$refs.toast.getBoundingClientRect().height + "px";
      });
    },

    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose);
      }
    },

    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      // 首先关闭后处理用户关闭逻辑
      this.close()
      if (
        this.closeButton.callback &&
        typeof this.closeButton.callback === "function"
      ) {
        this.closeButton.callback(this);
      }
    }
  }
};
</script>
<style lang='scss' scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
  100% {
    opacity: 100%;
    transform: translate(-50%, 0%);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  100% {
    opacity: 100%;
    transform: translate(-50%, 0%);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}

$animation-duration: 0.4s;

.l-toast {
  display: flex;
  align-items: center;
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 50%;

  color: #fff;
  padding-left: 16px;
  .l-message {
    padding: 8px 0;
    width: 200px;
  }
  .l-line {
    border-right: 1px solid rgba(102, 102, 102, 1);
    height: 100%;
    margin-left: 16px;
  }
  .l-close-btn {
    padding: 0 16px;
    height: $toast-min-height;
    line-height: $toast-min-height;
    flex-shrink: 0;
  }
  &.l-position-top {
    top: 0;
    z-index: 20;
    transform: translateX(-50%);
    animation: slide-down $animation-duration;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  &.l-position-bottom {
    bottom: 0;
    transform: translateX(-50%);
    animation: slide-up $animation-duration;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  &.l-position-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fade-in $animation-duration;
  }
}
</style>
