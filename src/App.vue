<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$font-family-base: 'Clear Sans', sans-serif;;
$font-size-base: 18px;
$grid-container: 414px;
$color-brand: #ea7362;
$color-link: $color-brand;
$link-underline: false;

@import 'node_modules/hocus-pocus/hocus-pocus';

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  padding: 8vh;
}

.video {
  max-height: 80vh;
  border: 1px solid rgba($color-ui, .5);
  box-shadow: 0 -20px 0 0 rgba($color-ui, .5);
  border-radius: $ui-border-radius;
}
</style>
