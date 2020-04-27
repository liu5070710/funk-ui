<template>
  <svg class="f-icon">
    <use :xlink:href="name"></use>
  </svg>
</template>

<script>
export default {
   props:['name']
};
</script>

<style lang="scss" scoped>
.f-icon {
  width: 1em;
  height: 1em;
  margin-right: 0.3em;
}
</style>