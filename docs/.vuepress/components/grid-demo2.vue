<template>
  <div>
    <funk-row :gutter="20">
      <funk-col span="12">
        <div class="bg-purple"></div>
      </funk-col>
      <funk-col span="12">
        <div class="bg-purple-light"></div>
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