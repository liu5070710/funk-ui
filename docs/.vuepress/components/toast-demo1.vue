<template>
  <div>
    <funk-button @click="$toast('弹出提示1')">上方弹出</funk-button>
    <funk-button @click="$toast('弹出提示2',{position:'middle'})">中间弹出</funk-button>
    <funk-button @click="$toast('弹出提示3',{position:'bottom'})">底部弹出</funk-button>
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

  methods: {}
};
</script>
<style lang='scss' scoped>
</style>