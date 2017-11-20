<template>
  <div class="wrapper">
    <github-corner></github-corner>
    <div class="container-home">
      <header>
        <img class="header-logo" src="../../assets/logo.svg" alt="Coypu Logo">
        <div class="header-heading">
          <h1 class="header-title">Coypu</h1>
          <p class="header-tagline">Text-editor-like weekly planner</p>
        </div>
      </header>

      <div class="list-versions">
        <a href="//download.coypu.co/download/mac" class="btn btn-mac" @click="trackDownload('mac')">
          Download for macOS
        </a>

        <a href="//download.coypu.co/download/win" class="btn btn-win" @click="trackDownload('windows')">
          Download for Windows
        </a>

        <a href="//download.coypu.co/download/linux_deb" class="btn btn-linux" @click="trackDownload('linux')">
          Download for Linux
        </a>
      </div>

      <p class="text-small">
        Linux version (.deb) doesn't auto update.<br>
        For 64-bit processors. See <router-link to="/changelog" class="link-muted">release notes</router-link>.
      </p>

      <p class="text-lead">
        Read our <router-link to="/faq">FAQ</router-link> and <a href="https://medium.com/lost-bananas/coypu-case-study-143968f9a441">Case Study</a> to learn more.
      </p>

      <p class="text-lead">
        Follow <a href="//twitter.com/_bkzl">@_bkzl</a> and <a href="//twitter.com/_mac">@_mac</a> for updates.
      </p>
    </div>

    <div class="container-surface"></div>
    <div class="container-demo">
      <div class="has-video">
        <video autoplay="autoplay" loop="loop" src="/demo.mp4" poster="/poster.png"></video>
      </div>
    </div>
  </div>
</template>

<script>
import GitHubCorner from '../GitHubCorner'

export default {
  name: 'home',
  components: {
    'github-corner': GitHubCorner
  },
  methods: {
    trackDownload (platform) {
      window.ga('send', 'event', {
        eventCategory: 'Download',
        eventAction: 'click',
        eventLabel: platform,
        transport: 'beacon'
      })
    }
  }
}
</script>

<style scoped>
@import '../../variables.css';

@media (--breakpoint-tablet) {
  .wrapper {
    display: flex;
    padding: var(--spacing-unit);
  }
}

@media (--breakpoint-compact) {
  .wrapper {
    flex-direction: column;
  }
}

header {
  display: flex;
  justify-content: center;
  margin-right: auto;
  margin-bottom: calc(3 * var(--spacing-unit));
  margin-left: auto;
}

@media (--breakpoint-compact) {
  header {
    margin-bottom: calc(2 * var(--spacing-unit));
  }
}

.header-heading {
  margin-left: var(--spacing-unit);
  text-align: left;
}

.header-logo {
  max-width: 100%;
}

@media (--breakpoint-compact) {
  .header-logo {
    max-width: 40%;
  }
}

.header-title {
  margin-bottom: 0;
  font-size: calc(1em * var(--font-ratio) * var(--font-ratio) * var(--font-ratio) * var(--font-ratio) * var(--font-ratio));
  color: var(--color-primary);
}

@media (--breakpoint-compact) {
  .header-title {
    font-size: calc(1em * var(--font-ratio) * var(--font-ratio) * var(--font-ratio) * var(--font-ratio));
  }
}

.header-tagline {
  margin-top: calc(var(--spacing-unit) / 2);
  margin-bottom: 0;
  font-size: calc(1em * var(--font-ratio));
}

.list-versions {
  display: flex;
  flex-flow: column;
  align-content: center;
  width: 360px;
  margin: 0 auto;
}

@media (--breakpoint-compact) {
  .list-versions {
    width: 100%;
    max-width: 360px;
  }
}

.btn {
  padding-left: calc(3 * var(--spacing-unit));
  margin-bottom: var(--spacing-unit);
  background-repeat: no-repeat;
  background-position: var(--spacing-unit) center;
}

.btn-mac {
  background-image: url('../../assets/icon-mac.svg');
}

.btn-win {
  background-image: url('../../assets/icon-win.svg');
}

.btn-linux {
  background-image: url('../../assets/icon-linux.svg');
}

.container-home {
  position: relative;
  z-index: var(--z-index-home);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100vw - 728px);
  height: 88vh;
  text-align: center;
}

@media (--breakpoint-tablet) {
  .container-home {
    width: 50%;
    height: calc(100vh - var(--spacing-unit) * 2);
  }
}

@media (--breakpoint-compact) {
  .container-home {
    width: 100%;
    height: auto;
    margin-bottom: var(--spacing-unit);
  }
}

.container-surface {
  position: fixed;
  bottom: 0;
  z-index: var(--z-index-body);
  width: 100%;
  height: 12vh;
  background-image: linear-gradient(180deg, #e0dfdf, #f0f0f0);
}

@media (--breakpoint-tablet) {
  .container-surface {
    display: none;
  }
}

.has-video {
  position: absolute;
  top: 105px;
  right: 30%;
  height: 68vh;
  max-height: 560px;
}

@media (--breakpoint-tablet) {
  .has-video {
    position: static;
    top: auto;
    right: auto;
    height: auto;
    max-height: 90vh;
  }
}

@media (--breakpoint-compact) {
  .has-video {
    max-width: 100%;
  }
}

video {
  max-width: 100%;
  max-height: 100%;
  border-radius: 6px;
  box-shadow: 0 0 12px rgba(0, 0, 0, .35);
}

.container-demo {
  position: fixed;
  right: 0;
  bottom: 1vh;
  z-index: var(--z-index-body);
  width: 70vw;
  max-width: 864px;
  height: 97vh;
  max-height: 781px;
  background-image: url('../../assets/macbook.png');
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
}

@media (--breakpoint-tablet) {
  .container-demo {
    position: static;
    right: auto;
    bottom: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    max-width: none;
    height: calc(100vh - var(--spacing-unit) * 2);
    max-height: none;
    background-image: none;
  }
}

@media (--breakpoint-compact) {
  .container-demo {
    width: 100%;
    height: auto;
  }
}
</style>
