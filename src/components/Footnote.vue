<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/changelog">Release notes</router-link>
      </li>
      <li>
        <router-link to="/faq">FAQ</router-link>
      </li>
      <li>
        <a href="//lostbananas.com">
          &copy; {{ currentYear }} Bartłomiej Kozal &amp; Maciej Kozal
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'footnote',
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>
