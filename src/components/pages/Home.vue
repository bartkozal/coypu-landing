<template>
  <div>
    <img src="/static/brand.png" srcset="/static/brand@2x.png 2x" alt="Coypu Logo">
    <p>Text-editor-like weekly planner</p>

    <ul>
      <li>
        <a href="//download.coypu.co/download/mac">
          Download for macOS
        </a>
      </li>
      <li>
        <a href="//download.coypu.co/download/win">
          Download for Windows
        </a>
      </li>
      <li>
        <a href="//download.coypu.co/download/linux_deb">
          Download for Linux (.deb)
        </a>
      </li>
    </ul>

    <p>
      x64, v{{ currentVersion }}
      Note: Linux version doesn't auto update
    </p>

    <p>Read our <router-link to="/faq">FAQ</router-link> to learn more.</p>

    <p>
      Follow <a href="//twitter.com/_bkzl">@_bkzl</a> and <a href="//twitter.com/_mac">@_mac</a> for updates.
    </p>

    <footnote></footnote>

    <video autoplay="autoplay" loop="loop" src="/static/demo.mp4" poster="/static/poster.png"></video>
  </div>
</template>

<script>
import Footnote from '../footnote'

export default {
  name: 'home',
  data () {
    return {
      currentVersion: '1.2.1'
    }
  },
  components: {
    Footnote
  }
}
</script>
