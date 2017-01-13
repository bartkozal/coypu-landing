<template>
  <div class="grid text-center">
    <div class="grid-item 1/2 compact-1/1">
      <p class="text-center">
        <img src="../assets/brand.png" srcset="../assets/brand@2x.png 2x" alt="Coypu Logo">
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
          v1.0.0
        </router-link>
      </p>

      <p>Read our <router-link to="/help">manual</router-link> to learn more.</p>

      <p class="margin-2/1-bottom">
        Follow <a href="//twitter.com/_bkzl">@_bkzl</a> and <a href="//twitter.com/_mac">@_mac</a> for updates.
      </p>

      <ul class="list-divided text-small">
        <li>
          <a href="//lostbananas.com" class="text-muted">
            &copy; {{ currentYear }} Bartłomiej Kozal &amp; Maciej Kozal
          </a>
        </li>
        <li>
          <router-link to="/help" class="text-muted">Help</router-link>
        </li>
        <li>
          <router-link to="/changelog" class="text-muted">Release notes</router-link>
        </li>
      </ul>
    </div>

    <div class="grid-item 1/2 compact-1/1">
      <video autoplay="autoplay" loop="loop" src="./static/demo.mp4" poster="./static/poster.png" class="video"></video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>
