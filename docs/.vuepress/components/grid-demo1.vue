<template>
  <div>
    <funk-row class="l-row">
      <funk-col span="24" class="bg-purple-dark"></funk-col>
    </funk-row>
    <funk-row class="l-row">
      <funk-col span="12" class="bg-purple"></funk-col>
      <funk-col span="12" class="bg-purple-light"></funk-col>
    </funk-row>
    <funk-row class="l-row">
      <funk-col span="8" class="bg-purple"></funk-col>
      <funk-col span="8" class="bg-purple-light"></funk-col>
      <funk-col span="8" class="bg-purple"></funk-col>
    </funk-row>
    <funk-row class="l-row">
      <funk-col span="6" class="bg-purple"></funk-col>
      <funk-col span="6" class="bg-purple-light"></funk-col>
      <funk-col span="6" class="bg-purple"></funk-col>
      <funk-col span="6" class="bg-purple-light"></funk-col>
    </funk-row>
    <funk-row>
      <funk-col span="4" class="bg-purple"></funk-col>
      <funk-col span="4" class="bg-purple-light"></funk-col>
      <funk-col span="4" class="bg-purple"></funk-col>
      <funk-col span="4" class="bg-purple-light"></funk-col>
      <funk-col span="4" class="bg-purple"></funk-col>
      <funk-col span="4" class="bg-purple-light"></funk-col>
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
  margin-bottom: 15px;
}
.bg-purple-dark {
  background: #99a9bf;
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
  background: #d3dce6;
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple-light {
  background: #e5e9f2;
  border-radius: 4px;
  min-height: 36px;
}
</style>