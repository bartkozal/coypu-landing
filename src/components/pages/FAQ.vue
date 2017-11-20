<template>
  <div class="has-container">
    <navbar title="Frequently asked questions"></navbar>
    <div class="container">
      <div v-for="topic in faq">
        <p class="faq-question">{{ topic.question }}</p>
        <p v-html="topic.answer"></p>
      </div>
    </div>
    <footnote></footnote>
  </div>
</template>

<script>
import Navbar from '../navbar'
import Footnote from '../footnote'

export default {
  name: 'faq',
  components: {
    Navbar,
    Footnote
  },
  data () {
    return {
      faq: [
        {
          question: 'How does it work?',
          answer: `The idea behind Coypu is to make a weekly planner with
            the text-editor-like interface to input data. It means you can f.e.
            add new tasks using enter, jump between todos with arrow keys,
            use backspace to remove existing entries or complete tasks with
            the tab key.`
        },
        {
          question: 'Where do you store my data?',
          answer: `On your local machine. We don't have access to your data.
            We only ping our server when you start the app to check for updates.`
        },
        {
          question: 'Is it free?',
          answer: `Yes it is. It's free and <a href="https://github.com/bkzl/coypu">open-sourced</a>.`
        },
        {
          question: 'Does it work offline?',
          answer: `Yes it does.`
        },
        {
          question: 'How can I request a feature or report a bug?',
          answer: `The easiest way is to
            <a href="https://github.com/bkzl/coypu/issues">create an issue on GitHub</a>.`
        },
        {
          question: 'What is your roadmap?',
          answer: `Multiline copy-and-paste, web, mobile (iOS, Android), Chrome Web Store and
            Mac App Store releases, hour-specific and recurring entries.
            We aim for <a href="https://medium.com/lost-bananas/coypu-case-study-143968f9a441">this design</a>.`
        },
        {
          question: 'What is your tech stack?',
          answer: `<a href="https://vuejs.org/">Vue.js</a>,
            <a href="http://electron.atom.io/">Electron</a> and
            <a href="https://pouchdb.com/">PouchDB</a>`
        }
      ]
    }
  }
}
</script>

<style scoped>
.faq-question {
  font-weight: bold;
}
</style>
