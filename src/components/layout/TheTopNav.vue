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
      class="mx-10 text-white"
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
import { mapGetters } from 'vuex'

export default {
  name: 'TheTopNav',
  computed: {
    ...mapGetters('user', { user: 'getUser' })
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
