<template>
  <div>
    <div class="container">
      <header>
        <img src="../../assets/logo.svg" alt="Coypu Logo">
        <div class="header-heading">
          <h1 class="header-title">Coypu</h1>
          <p class="header-tagline">Text-editor-like weekly planner</p>
        </div>
      </header>

      <div class="list-versions">
        <a href="//download.coypu.co/download/mac" class="btn btn-mac">
          Download for macOS
        </a>

        <a href="//download.coypu.co/download/win" class="btn btn-win">
          Download for Windows
        </a>

        <a href="//download.coypu.co/download/linux_deb" class="btn btn-linux">
          Download for Linux
        </a>
      </div>

      <p class="text-small">
        Linux version (.deb) doesn't auto update.<br>
        For 64-bit processors. See <router-link to="/changelog">release notes</router-link>.
      </p>

      <p class="text-lead">
        Read our <router-link to="/faq">FAQ</router-link> to learn more.
      </p>

      <p class="text-lead">
        Follow <a href="//twitter.com/_bkzl">@_bkzl</a> and <a href="//twitter.com/_mac">@_mac</a> for updates.
      </p>

      <!--<video autoplay="autoplay" loop="loop" src="/demo.mp4" poster="/poster.png"></video>-->
    </div>
    <div class="body-surface"></div>
    <div class="body-macbook"></div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
@import '../../variables.css';

.container {
  position: relative;
  z-index: var(--z-index-home);
  width: 44vw;
  text-align: center;
}

header {
  display: flex;
  justify-content: center;
  margin-top: calc(2 * var(--spacing-unit));
  margin-bottom: calc(3 * var(--spacing-unit));
}

.header-heading {
  margin-left: var(--spacing-unit);
  text-align: left;
}

.header-title {
  margin-bottom: 0;
  font-size: calc(1em * var(--font-ratio) * var(--font-ratio) * var(--font-ratio) * var(--font-ratio) * var(--font-ratio));
  font-weight: normal;
  color: var(--color-primary);
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

.btn {
  padding-left: calc(3 * var(--spacing-unit));
  margin-bottom: var(--spacing-unit);
  background-repeat: no-repeat;
  background-position: var(--spacing-unit) 8px;
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

.body-surface {
  position: fixed;
  bottom: 0;
  z-index: var(--z-index-body);
  width: 100%;
  height: 12vh;
  background-image: linear-gradient(180deg, #e0dfdf, #f0f0f0);
}

.body-macbook {
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
</style>
