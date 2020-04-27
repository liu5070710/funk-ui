<template>
   <button class="funk-button">按钮</button>
</template>
<script>
export default {}
</script>
<style lang="scss">
   .funk-button {
      height: var(--button-height);
      font-size: var(--font-size);
      border-radius: var(--border-radius);
      color: var(--color);
      padding: 0 1em;
      font: inherit;
      border: 1px solid var(--border-color);
      background: var(--button-bg);
      &:hover {
         border-color: var(--border-color-hover);
      }
      &:active {
         border-color: var(--button-active-bg);
      }
      &:focus {
         outline: none;
      }
   }
</style>