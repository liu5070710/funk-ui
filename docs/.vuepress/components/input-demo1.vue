<template>
  <div class="box">
    <funk-input value="张三" class="item"></funk-input>
    <funk-input value="李四" class="item" disabled></funk-input>
    <funk-input value="王五" class="item" readonly></funk-input>
    <funk-input value='赵'  class="item"  error="名字不得少于2字"></funk-input>
  </div>
</template>
<script>
import Input from "../../../src/input";
export default {
  components: {
    "funk-input": Input
  }
};
</script>
<style lang="scss">
.box {
  > .item{
    margin-bottom: 10px;
  }
}
</style>