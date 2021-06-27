<template>
  <div>
    <a href="http://localhost:3001/v0.1/login">Auth0 Login</a>
  </div>
</template>

<script>
export default {
  layout: 'no-auth',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        await this.$axios.post('/api/v0.1/users/login', {
          username: this.email,
          password: this.password
        })
        window.location = '/'
      } catch ($ex) {
        // eslint-disable-next-line no-console
        console.log($ex)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
a {
  @apply border
}
</style>
