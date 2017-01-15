<template>
  <div>
    <navbar title="Release notes"></navbar>
    <div v-for="release in releases">
      <div class="grid grid-bottom grid-pair">
        <div class="grid-item 1/2 text-brand">{{ release.version }}</div>
        <div class="grid-item 1/2 text-small text-muted">{{ release.date }}</div>
      </div>
      <hr class="margin-1/4-top margin-1/2-bottom">
      <p v-html="release.body"></p>
    </div>
    <footnote></footnote>
  </div>
</template>

<script>
import Navbar from '../navbar'
import Footnote from '../footnote'

export default {
  name: 'changelog',
  components: {
    Navbar,
    Footnote
  },
  data () {
    return {
      releases: [
        {
          version: 'v1.0.1',
          date: 'Jan 15th, 2017',
          body: `- Make <strong>Enter</strong> and <strong>Backspace</strong>
            keys depend on caret position (so, it's possible now to split, join
            or insert new task above existing)<br>
          - Allow to deselect tasks with <strong>Esc</strong><br>
          - Remember application window position and size between runs<br>
          - All labels (week number, week range and day) are now clickable<br>
          - Highlight current day<br>
          - Improve performance<br>
          - Adjust the icon size to match macOS guidelines`
        },
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
