<template>
  <div>
      <funk-row >
         <funk-col style="background: #99a9bf" :phone="{span:2}" :ipad="{span:6}" :narrow-pc="{span:12}" :pc="{span:16}" :wide-pc="{span:22}">
         </funk-col>
         <funk-col :phone="{span:22}" :ipad="{span:18}" :narrow-pc="{span:12}" :pc="{span:8}" :wide-pc="{span:2}">
         </funk-col>
      </funk-row>
  </div>
</template>

<script>
import Row from "../../../src/row";
import Col from "../../../src/col";

export default {
  components: {
    "funk-row": Row,
    "funk-col": Col
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
* {
  box-sizing: border-box;
}
.l-row {
  margin-bottom: 20px;
}
.bg-purple-dark {
  background: #99a9bf;
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
  background: #99a9bf;
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple-light {
  background: #d3dce6;
  border-radius: 4px;
  min-height: 36px;
}
</style>