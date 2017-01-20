<template>
  <div class="grid text-center">
    <div class="grid-item 1/2 compact-1/1 compact-margin-bottom">
      <p class="text-center margin-2/1-top">
        <img src="/static/brand.png" srcset="/static/brand@2x.png 2x" alt="Coypu Logo">
      </p>

      <p>
        Text-editor-like week planner
      </p>

      <ul class="list-reset margin-1/2-bottom">
        <li>
          <a href="//download.coypu.co/download/mac" class="btn btn-brand">
            <i class="icon ion-social-apple margin-1/4-right"></i>
            Download for macOS
          </a>
        </li>
        <li class="margin-1/4-vertical">
          <a href="//download.coypu.co/download/win" class="btn btn-brand">
            <i class="icon ion-social-windows margin-1/4-right"></i>
            Download for Windows
          </a>
        </li>
        <li>
          <a href="//download.coypu.co/download/linux" class="btn btn-brand">
            <i class="icon ion-social-tux margin-1/4-right"></i>
            Download for Linux
          </a>
        </li>
      </ul>

      <p class="text-small text-muted">
        <router-link to="/changelog" class="text-muted">
          x64, v{{ currentVersion }}
        </router-link>
        <br>
        Note: Linux version doesn't auto update
      </p>

      <p>Read our <router-link to="/faq">FAQ</router-link> to learn more.</p>

      <p>
        Follow <a href="//twitter.com/_bkzl">@_bkzl</a> and <a href="//twitter.com/_mac">@_mac</a> for updates.
      </p>

      <footnote></footnote>
    </div>

    <div class="grid-item 1/2 compact-1/1">
      <video autoplay="autoplay" loop="loop" src="/static/demo.mp4" poster="/static/poster.png" class="video"></video>
    </div>
  </div>
</template>

<script>
import Footnote from '../footnote'

export default {
  name: 'home',
  data () {
    return {
      currentVersion: '1.1.0'
    }
  },
  components: {
    Footnote
  }
}
</script>
