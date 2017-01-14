<template>
  <div class="margin-bottom">
    <h2 class="margin-1/4-bottom">{{ title }}</h2>
    <router-link to="/" class="text-muted">
      <i class="icon ion-ios-arrow-back margin-1/4-right"></i>
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
