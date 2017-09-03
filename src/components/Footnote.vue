<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/changelog">Release notes</router-link>
    <router-link to="/faq">FAQ</router-link>
    &copy; {{ currentYear }} Bart Kozal &amp; Maciej Kozal
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
  color: var(--color-muted);
}

@media (--breakpoint-compact) {
  nav {
    flex-direction: column;
    max-width: none;
  }
}

a {
  color: var(--color-muted);
  border-bottom: 1px solid color(var(--color-muted) l(+20%));
}
</style>
