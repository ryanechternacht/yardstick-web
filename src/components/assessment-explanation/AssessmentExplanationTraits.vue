<template>
  <div class="explanation">
    <h1>{{ renderTemplate(content.title, { assessment }) }}</h1>
    <div class="traits">
      <div>
        <h2>{{ content.traits[0].title }}</h2>
        <div class="trait-description">
          <img
            :src="content.traits[0].icon"
            class="trait-icon"
          >
          <!-- eslint-disable vue/no-v-html -->
          <p
            v-html="renderTemplate(
              content.traits[0].description, { student, assessment })"
          />
          <!-- eslint-enable vue/no-v-html -->
        </div>
      </div>
      <div>
        <h2>{{ content.traits[1].title }}</h2>
        <div class="trait-description">
          <!-- eslint-disable vue/no-v-html -->
          <p
            v-html="renderTemplate(
              content.traits[1].description, { student, assessment })"
          />
          <!-- eslint-enable vue/no-v-html -->
          <img
            :src="content.traits[1].icon"
            class="trait-icon"
          >
        </div>
      </div>
      <div>
        <h2>{{ content.traits[2].title }}</h2>
        <div class="trait-description">
          <img
            :src="content.traits[2].icon"
            class="trait-icon"
          >
          <!-- eslint-disable vue/no-v-html -->
          <p
            v-html="renderTemplate(
              content.traits[2].description, { student, assessment })"
          />
          <!-- eslint-enable vue/no-v-html -->
        </div>
      </div>
      <div>
        <h2>{{ content.traits[3].title }}</h2>
        <div class="trait-description">
          <!-- eslint-disable vue/no-v-html -->
          <p
            v-html="renderTemplate(
              content.traits[3].description, { student, assessment })"
          />
          <!-- eslint-enable vue/no-v-html -->
          <img
            :src="content.traits[3].icon"
            class="trait-icon"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRenderTemplate } from '@/composables/render-template'

export default {
  name: 'AssessmentExplanationTraits',
  setup () {
    const { renderTemplate } = useRenderTemplate()

    return {
      renderTemplate
    }
  },
  props: {
    assessment: {
      type: Object,
      required: true
    },
    content: {
      type: Object,
      required: true
    },
    student: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.explanation {
  @apply flex flex-col items-center mt-40;
}

.traits {
  @apply grid grid-rows-2 grid-cols-2 mt-40 gap-50;
}

h2 {
  @apply text-center;
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
