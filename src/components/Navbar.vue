<template>
  <div>
    <h2>{{ title }}</h2>
    <router-link to="/">
      Back to the homepage
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    title: {
      required: true
    }
  }
}
</script>
