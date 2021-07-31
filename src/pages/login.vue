<template>
  <div>
    <a href="/api/v0.1/login/google">Google Login</a>

    <br>
    <br>

    <a href="/api/v0.1/login/facebook">Facebook Login</a>

    <br>
    <br>

    <a href="/api/v0.1/login/microsoft">Microsoft Login</a>
  </div>
</template>

<script>
export default {
  layout: 'no-auth'
}
</script>

<style lang="postcss" scoped>
a {
  @apply border
}
</style>
