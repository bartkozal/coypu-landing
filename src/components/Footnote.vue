<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/changelog">Release notes</router-link>
    <router-link to="/faq">FAQ</router-link>
    <a href="//lostbananas.com">
      &copy; {{ currentYear }} Bartłomiej Kozal &amp; Maciej Kozal
    </a>
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

<style scoped>
@import '../variables.css';

nav {
  display: flex;
  justify-content: space-between;
  max-width: 550px;
  margin-left: auto;
}

a {
  color: var(--color-muted);
  border-bottom: 1px solid color(var(--color-muted) l(+20%));
}
</style>
