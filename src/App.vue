<template>
  <div class="wrapper">
    <div class="grid text-center">
      <div class="grid-item 1/2 compact-1/1">
        <p class="text-center">
          <img src="./assets/brand.png" srcset="./assets/brand@2x.png 2x" alt="Coypu Logo">
        </p>

        <p>
          Text-editor-like week planner
        </p>

        <p class="margin-1/2-bottom">
          <a href="//download.coypu.co/download/osx" class="btn btn-brand">
            <i class="icon ion-social-apple margin-1/4-right"></i>
            Download for macOS
          </a>
        </p>

        <p class="text-muted text-small">
          Windows, Linux, iOS and Android versions in development!
        </p>

        <p class="margin-2/1-bottom">
          Follow <a href="//twitter.com/_bkzl">@_bkzl</a> and <a href="//twitter.com/_mac">@_mac</a> for updates.
        </p>

        <p>
          <a href="//lostbananas.com" class="text-muted text-small">
            &copy; {{ currentYear }} Bartłomiej Kozal &amp; Maciej Kozal
          </a>
        </p>
      </div>

      <div class="grid-item 1/2 compact-1/1">
          <video autoplay="autoplay" loop="loop" src="./static/demo.mp4" poster="./static/poster.png" class="video"></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
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
