<template>
  <div>
    <funk-button-group>
      <funk-button icon="#i-left">上一页</funk-button>
      <funk-button>更多</funk-button>
      <funk-button icon="#i-right" icon-position="right">下一页</funk-button>
    </funk-button-group>
  </div>
</template>

<script>
import ButtonGroup from "../../../src/buttonGroup";
import Button from "../../../src/button";

export default {
  components: {
    "funk-button-group": ButtonGroup,
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