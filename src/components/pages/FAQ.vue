<template>
  <div>
    <navbar title="Frequently asked questions"></navbar>
    <div v-for="topic in faq">
      <p class="margin-1/4-bottom text-bold">{{ topic.question }}</p>
      <p v-html="topic.answer"></p>
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
          answer: `The idea behind Coypu is to make a week planner with
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
          answer: `Yes it is. In the future, we plan to add synchronization between clients
            (i.e. macOS <-> Android) and this will cost a small fee
            to cover servers and maintenance costs.`
        },
        {
          question: 'Does it work offline?',
          answer: `Yes it does.`
        },
        {
          question: 'Do you plan to release mobile apps?',
          answer: `Yes. We will release both iOS and Android versions.`
        },
        {
          question: 'How can I request a feature or report a bug?',
          answer: `The easiest way is to ask us on Twitter
            (<a href="https://twitter.com/@_bkzl">@_bkzl</a> or
            <a href="https://twitter.com/@_mac">@_mac</a>).
            You can also <a href="mailto:hello@lostbananas.com">send us an email</a>.`
        },
        {
          question: 'What is your roadmap?',
          answer: `Fix editing imperfections (i.e. multiline selection),
            release mobile apps, support all calendar formats
            and languages, notes for tasks, hour-specific and repeatable entries.
            We aim for <a href="https://twitter.com/_mac/status/819966993369595905">this design</a>.`
        },
        {
          question: 'Who are you?',
          answer: `We are brothers who like to
            <a href="//lostbananas.com">build software</a>.`
        },
        {
          question: 'What is your tech stack?',
          answer: `<a href="https://vuejs.org/">Vue.js</a>,
            <a href="http://electron.atom.io/">Electron</a>,
            <a href="https://pouchdb.com/">PouchDB</a> and
            <a href="http://couchdb.apache.org/">CouchDB</a>.`
        }
      ]
    }
  }
}
</script>
