<template>
  <transition name="fade">
    <div class="slider" v-if="sliderShow">
      <slot></slot>
      <!-- <funk-button @click="sliderShow=false" class="button">close</funk-button> -->
    </div>
  </transition>
</template>
<script>
export default {
  name: "FunkSlider",
  data() {
    return {
      sliderShow: true
    };
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.slider {
  position: relative;
  > .button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: all .8s;
}
.fade-enter, .fade-leave-to  {
  margin-left: -150px;
}
</style>  