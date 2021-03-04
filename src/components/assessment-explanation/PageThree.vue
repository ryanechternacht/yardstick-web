<template>
  <div class="explanation">
    <h1>{{ renderTemplate(pageThree.title, { assessment }) }}</h1>
    <div class="traits">
      <div>
        <h2>{{ pageThree.traits[0].title }}</h2>
        <div class="trait-description">
          <img
            :src="pageThree.traits[0].icon"
            class="trait-icon"
          >
          <!-- eslint-disable vue/no-v-html -->
          <p
            v-html="renderTemplate(
              pageThree.traits[0].description, { student, assessment })"
          />
          <!-- eslint-enable vue/no-v-html -->
        </div>
      </div>
      <div>
        <h2>{{ pageThree.traits[1].title }}</h2>
        <div class="trait-description">
          <!-- eslint-disable vue/no-v-html -->
          <p
            v-html="renderTemplate(
              pageThree.traits[1].description, { student, assessment })"
          />
          <!-- eslint-enable vue/no-v-html -->
          <img
            :src="pageThree.traits[1].icon"
            class="trait-icon"
          >
        </div>
      </div>
      <div>
        <h2>{{ pageThree.traits[2].title }}</h2>
        <div class="trait-description">
          <img
            :src="pageThree.traits[2].icon"
            class="trait-icon"
          >
          <!-- eslint-disable vue/no-v-html -->
          <p
            v-html="renderTemplate(
              pageThree.traits[2].description, { student, assessment })"
          />
          <!-- eslint-enable vue/no-v-html -->
        </div>
      </div>
      <div>
        <h2>{{ pageThree.traits[3].title }}</h2>
        <div class="trait-description">
          <!-- eslint-disable vue/no-v-html -->
          <p
            v-html="renderTemplate(
              pageThree.traits[3].description, { student, assessment })"
          />
          <!-- eslint-enable vue/no-v-html -->
          <img
            :src="pageThree.traits[3].icon"
            class="trait-icon"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import pageThree from '@/assets/data/page-three'
import { useRenderTemplate } from '@/composables/render-template'

export default {
  name: 'PageThree',
  setup () {
    const { renderTemplate } = useRenderTemplate()

    return {
      renderTemplate,
      pageThree
    }
  },
  props: {
    assessment: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('student', ['student'])
  }

}
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-blue;
  font-size: 40px;
  line-height: 48px;
}

.explanation {
  @apply flex flex-col items-center mt-40;
}

.traits {
  @apply grid grid-rows-2 grid-cols-2 mt-40 gap-50;
}

h2 {
  @apply text-center;
  font-size: 32px;
  line-height: 38.4px;
}

.trait-description {
  @apply flex flex-row mt-20 gap-20;
}

.trait-icon {
  width: 115px;
  height: 115px;
}

p {
  font-size: 15px;
  line-height: 18px;
}
</style>
