<template>
  <nav>
    <div class="site-link">
      <nuxt-link to="/">
        Yardstick
      </nuxt-link>
    </div>
    <!-- TODO student dropdown -->

    <div class="flex-grow" />

    <div
      v-if="user"
      class="mx-10"
    >
      Hello {{ user.first_name }}
    </div>

    <div class="icons">
      <font-awesome-icon
        class="icon"
        :icon="['far', 'question-circle']"
      />
      <font-awesome-icon
        class="icon"
        :icon="['fas', 'user']"
      />
    </div>
    <div class="spacer" />
  </nav>
</template>

<script>
export default {
  name: 'TheTopNav',
  data () {
    return {
      user: null
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    async login () {
      try {
        await this.$axios.post('/api/v0.1/users/login', {
          username: 'ryan@echternacht.org',
          password: '123'
        })
        window.location.reload()
      } catch ($ex) {
        console.log($ex)
      }
    },
    async getUser () {
      try {
        const resp = await this.$axios.get('/api/v0.1/users/me')
        this.user = resp.data
      } catch ($ex) {
        console.log($ex)
      }
    }
  }
}
</script>

<style scoped lang="postcss">
nav {
  @apply sticky top-0 bg-blue flex items-center z-20;
}

.site-link {
  @apply text-white font-extrabold ml-20;
  font-size: 36px;
}

.icons {
  @apply flex items-center;
}

.icon {
  @apply text-white w-24 h-24 mr-30;
}

.spacer {
  @apply h-60;
}
</style>
