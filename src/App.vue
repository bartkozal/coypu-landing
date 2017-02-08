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
  font-size: var(--font-base);
  color: var(--color-text);
  background-color: var(--color-background);
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

h1,
h2 {
  font-weight: normal;
}

.container {
  padding: var(--spacing-unit) calc(var(--spacing-unit) * 1.5);
}

.wrapper {
  width: 60vw;
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

.text-lead {
  margin-bottom: calc(var(--spacing-unit) / 2);
  font-size: calc(1em * var(--font-ratio));
}

.link-muted {
  color: var(--color-muted);
  border-bottom: 1px solid color(var(--color-muted) l(+20%));
}
</style>
