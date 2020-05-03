<template>
  <svg class="f-icon">
    <use :xlink:href="name" />
  </svg>
</template>

<script>
import './svg'
export default {
  props: ["name"],
  created() {}
};
</script>

<style lang="scss" scoped>
.f-icon {
  width: 1em;
  height: 1em;
  margin-right: 0.3em;
}
</style>