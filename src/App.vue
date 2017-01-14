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
$font-weight-headings: 400;

@import 'node_modules/hocus-pocus/hocus-pocus';

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  padding: 5vh 5vw;
}

.video {
  max-height: 85vh;
  border: 1px solid rgba($color-ui, .5);
  margin-top: 3vh;
  box-shadow: 0 -2vh 0 0 rgba($color-ui, .5);
  border-radius: $ui-border-radius;
}
</style>
