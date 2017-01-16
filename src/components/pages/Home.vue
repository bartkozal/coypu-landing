<template>
  <div class="grid text-center">
    <div class="grid-item 1/2 compact-1/1 compact-margin-bottom">
      <p class="text-center margin-2/1-top">
        <img src="../../assets/brand.png" srcset="../../assets/brand@2x.png 2x" alt="Coypu Logo">
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

      <p class="text-small">
        <router-link to="/changelog" class="text-muted">
          {{ currentVersion }}
        </router-link>
      </p>

      <p>Read our <router-link to="/faq">FAQ</router-link> to learn more.</p>

      <p>
        Follow <a href="//twitter.com/_bkzl">@_bkzl</a> and <a href="//twitter.com/_mac">@_mac</a> for updates.
      </p>

      <footnote></footnote>
    </div>

    <div class="grid-item 1/2 compact-1/1">
      <video autoplay="autoplay" loop="loop" src="./static/demo.mp4" poster="./static/poster.png" class="video"></video>
    </div>
  </div>
</template>

<script>
import Footnote from '../footnote'

export default {
  name: 'home',
  data () {
    return {
      currentVersion: 'v1.0.2'
    }
  },
  components: {
    Footnote
  }
}
</script>
