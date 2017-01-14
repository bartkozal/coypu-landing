<template>
  <div>
    <navbar title="Release notes"></navbar>
    <div v-for="release in releases">
      <div class="grid grid-bottom grid-pair">
        <div class="grid-item 1/2 text-brand">{{ release.version }}</div>
        <div class="grid-item 1/2 text-small text-muted">{{ release.date }}</div>
      </div>
      <hr class="margin-1/4-top margin-1/2-bottom">
      <p>{{ release.body }}</p>
    </div>
</template>

<script>
import Navbar from '../navbar'

export default {
  name: 'changelog',
  components: {
    Navbar
  },
  data () {
    return {
      releases: [
        {
          version: 'v1.0.0',
          date: 'Jan 10th, 2017',
          body: 'Initial release'
        }
      ]
    }
  }
}
</script>
