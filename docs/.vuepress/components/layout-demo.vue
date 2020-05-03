<template>
  <div>
    <h3>1.经典上下布局</h3>
    <funk-layout style="height: 300px;">
      <funk-header class="funk-header">header</funk-header>
      <funk-container class="funk-container">container</funk-container>
      <funk-footer class="funk-footer">footer</funk-footer>
    </funk-layout>
    <h3>2.左侧边栏布局</h3>
    <funk-layout style="height: 300px;">
      <funk-slider class="funk-slider">sider</funk-slider>
      <funk-layout>
        <funk-header class="funk-header">header</funk-header>
        <funk-container class="funk-container">container</funk-container>
        <funk-footer class="funk-footer">footer</funk-footer>
      </funk-layout>
    </funk-layout>
    <h3>3.侧边栏于内容区平齐布局</h3>
    <funk-layout style="height: 378px;">
      <funk-header class="funk-header">header</funk-header>
      <funk-layout>
        <funk-slider class="funk-slider">sider</funk-slider>
        <funk-container class="funk-container" style="height: 320px">container</funk-container>
      </funk-layout>
      <funk-footer class="funk-footer">footer</funk-footer>
    </funk-layout>
  </div>
</template>
<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Slider from "../../../src/slider";
import Container from "../../../src/container";
import Footer from "../../../src/footer";
export default {
  components: {
    "funk-layout": Layout,
    "funk-header": Header,
    "funk-slider": Slider,
    "funk-container": Container,
    "funk-footer": Footer
  }
};
</script>
<style lang="scss">
.funk-slider {
  background-color: rgb(250, 163, 161);
  width: 90px;
}

.funk-header {
  background-color: rgb(193, 153, 197);
  height: 40px;
}

.funk-container {
  background-color: rgb(192, 240, 229);
  height: 100px;
}
.funk-footer {
  height: 30px;
  background-color: rgb(250, 235, 199);
}
</style>

