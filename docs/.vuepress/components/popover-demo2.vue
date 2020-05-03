<!-- popover-demo1 -->
<template>
  <div style="margin: 40px 0">
    <funk-popover position="top" trigger="hover">
      <template slot="content">这是一条弹窗</template>
      <funk-button>hover</funk-button>
    </funk-popover>

    <funk-popover position="bottom" trigger="hover">
      <template slot="content">这是一条弹窗</template>
      <funk-button>hover</funk-button>
    </funk-popover>

    <funk-popover position="left" trigger="hover">
      <template
        slot="content"
      >这是一条弹窗</template>
      <funk-button>hover</funk-button>
    </funk-popover>

    <funk-popover position="right" trigger="hover">
      <template slot="content">这是一条弹窗</template>
      <funk-button>hover</funk-button>
    </funk-popover>
  </div>
</template>

<script>
import Popover from "../../../src/popover";
import Button from "../../../src/button";

export default {
  components: {
    "funk-popover": Popover,
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