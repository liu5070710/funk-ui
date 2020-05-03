<!-- tabs-demo -->
<template>
  <div style="margin: 40px 0">
    <funk-tabs selected="focus">
      <funk-tabs-head>
        <funk-tabs-item name="focus">关注</funk-tabs-item>
        <funk-tabs-item name="recommend" disabled>推荐</funk-tabs-item>
        <funk-tabs-item name="technology">科技</funk-tabs-item>
        <funk-tabs-item name="music">音乐</funk-tabs-item>
      </funk-tabs-head>
      <hr />
      <funk-tabs-body>
        <funk-tabs-pane name="focus">关注相关<br />关注相关<br />关注相关</funk-tabs-pane>
        <funk-tabs-pane name="recommend">推荐相关<br />推荐相关<br />推荐相关</funk-tabs-pane>
        <funk-tabs-pane name="technology">科技相关<br />科技相关<br />科技相关</funk-tabs-pane>
        <funk-tabs-pane name="music">音乐相关<br />音乐相关<br />音乐相关</funk-tabs-pane>
      </funk-tabs-body>
    </funk-tabs>
  </div>
</template>

<script>
import Tabs from "../../../src/tabs";
import TabsHead from "../../../src/tabsHead";
import TabsBody from "../../../src/tabsBody";
import TabsItem from "../../../src/tabsItem";
import TabsPane from "../../../src/tabsPane";
import Button from "../../../src/button";
import Icon from "../../../src/icon";

export default {
  components: {
    "funk-tabs": Tabs,
    "funk-tabs-head": TabsHead,
    "funk-tabs-body": TabsBody,
    "funk-tabs-item": TabsItem,
    "funk-tabs-pane": TabsPane,
    "funk-button": Button,
    "funk-icon": Icon
  },

  computed: {},

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {
    //  handleSelected(e) {
    //    console.log(e);
    //  }
  }
};
</script>
<style lang='scss' scoped>
</style>