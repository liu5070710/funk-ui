<template>
  <div>
    <funk-button @click="toastTest">点我</funk-button>
  </div>
</template>

<script>
import Button from "../../../src/button.vue";
import ToastPlugin from "../../../src/toast-plugin.js";
import Vue from "vue";
Vue.use(ToastPlugin);
export default {
  components: {
    "funk-button": Button
  },

  computed: {},

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {
    toastTest() {
      this.$toast(`你掷出:${parseInt(Math.random() * 100)}(0-100)`, {
        autoClose: false,
        position: "top",
        closeButton: {
          text: "点击触发回调",
          callback: toast => {
            console.log("用户做一些事...");
            console.log("toast实例", toast);
          }
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>