<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="normalize.css"></style>
<style src="sensible.css"></style>
<style>
@import './variables.css';

body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--font-stack);
  color: var(--color-text);
  background-color: var(--color-background);
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

.btn {
  padding: calc(var(--spacing-unit) / 3) var(--spacing-unit);
  font-size: calc(1em * var(--font-ratio));
  color: white;
  text-align: left;
  background-color: var(--color-primary);
  border-radius: 8px;
  box-shadow: 0 3px color(var(--color-primary) l(-20%));
}

.text-small {
  color: var(--color-muted);
}

.text-small > a {
  color: var(--color-muted);
  border-bottom: 1px solid color(var(--color-muted) l(+20%));
}

.text-lead {
  margin-bottom: calc(var(--spacing-unit) / 2);
  font-size: calc(1em * var(--font-ratio));
}
</style>
