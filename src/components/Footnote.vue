<template>
  <div class="text-small margin-2/1-top text-center">
    <ul class="list-divided margin-1/4-bottom">
      <li>
        <router-link to="/" class="text-muted">Home</router-link>
      </li>
      <li>
        <router-link to="/changelog" class="text-muted">Release notes</router-link>
      </li>
      <li>
        <router-link to="/faq" class="text-muted">FAQ</router-link>
      </li>
    </ul>
    <a href="//lostbananas.com" class="text-muted">
      &copy; {{ currentYear }} Bartłomiej Kozal &amp; Maciej Kozal
    </a>
  </div>
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
