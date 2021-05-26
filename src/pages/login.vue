<template>
  <div>
    <label class="mr-10">
      Username:
    </label>
    <input
      v-model="email"
      type="email"
    >

    <br>

    <label class="mr-10">
      Passord:
    </label>
    <input
      v-model="password"
      type="password"
    >

    <br>

    <button
      @click="login"
    >
      Login
    </button>
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
          username: this.username,
          password: this.password
        })
        window.location.reload()
      } catch ($ex) {
        console.log($ex)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
input {
  @apply border
}

button {
  @apply border
}
</style>
