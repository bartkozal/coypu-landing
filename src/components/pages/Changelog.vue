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
          <time>{{ release.date }}</time>
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
    const feedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdownload.coypu.co%2Ffeed%2Fchannel%2Fall.atom'
    axios.get(feedUrl).then(response => {
      this.items = response.data.items
      this.isLoading = false
    })
  },
  data () {
    return {
      items: [],
      isLoading: true
    }
  },
  computed: {
    releases () {
      return this.items.map(item => {
        return {
          version: `v${item.title}`,
          date: moment(item.pubDate).format('MMM Do, YYYY'),
          summary: marked(item.content)
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
