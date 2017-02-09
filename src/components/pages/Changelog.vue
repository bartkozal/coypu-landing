<template>
  <div class="has-container">
    <navbar title="Release notes"></navbar>
    <div class="has-clip-loader">
      <clip-loader :loading="isLoading" :color="'#4a4a4a'"></clip-loader>
    </div>
    <div class="container">
      <section v-for="release in releases">
        <header class="section-header">
          {{ release.version }}
          <date>{{ release.date }}</date>
        </header>
        <div v-html="release.summary"></div>
      </section>
    </div>
    <footnote></footnote>
  </div>
</template>

<script>
import Navbar from '../navbar'
import Footnote from '../footnote'
import axios from 'axios'
import marked from 'marked'
import moment from 'moment'
import ClipLoader from 'vue-spinner/src/ClipLoader'

export default {
  name: 'changelog',
  components: {
    Navbar,
    Footnote,
    ClipLoader
  },
  created () {
    const feedUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20atom%20where%20url%3D'https%3A%2F%2Fdownload.coypu.co%2Ffeed%2Fchannel%2Fall.atom'&format=json&_maxage=3600"
    axios.get(feedUrl).then(response => {
      this.feed = response.data.query.results.entry
      this.isLoading = false
    })
  },
  data () {
    return {
      feed: [],
      isLoading: true
    }
  },
  computed: {
    releases () {
      return this.feed.map(entry => {
        return {
          version: `v${entry.title.content}`,
          date: moment(entry.updated).format('MMM Do, YYYY'),
          summary: marked(entry.summary.content)
        }
      })
    }
  }
}
</script>

<style scoped>
@import '../../variables.css';

.section-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: var(--spacing-unit);
  color: var(--color-muted);
}

.has-clip-loader {
  margin-bottom: var(--spacing-unit);
}
</style>
