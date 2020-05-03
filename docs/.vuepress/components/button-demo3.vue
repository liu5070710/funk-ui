<template>
  <div>
    <funk-button icon="#i-settings">icon左侧按钮</funk-button>
    <funk-button iconPosition="right" icon="#i-thumb">icon右侧按钮</funk-button>
    <funk-button icon="#i-left">上一页</funk-button>
  </div>
</template>

<script>
import Button from "../../../src/button";

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