<template>
  <div>
    <navbar title="Release notes"></navbar>
    <clip-loader :loading="isLoading" :color="'#dddddd'"></clip-loader>
    <div v-for="release in releases">
      <div class="grid grid-bottom grid-pair">
        <div class="grid-item 1/2">
          <a href="//download.coypu.co/download">
            {{ release.version }}
          </a>
        </div>
        <div class="grid-item 1/2 text-small text-muted">{{ release.date }}</div>
      </div>
      <hr class="margin-1/4-top margin-1/2-bottom">
      <div v-html="release.summary"></div>
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
