<template>
  <div>
    <nav>
      <div class="site-link">
        Yardstick
      </div>
      <!-- TODO student dropdown -->

      <div class="flex-grow" />

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
    </nav>
    <Nuxt />
  </div>
</template>

<style lang="postcss" scoped>
nav {
  @apply bg-blue flex items-center h-60;
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
</style>
