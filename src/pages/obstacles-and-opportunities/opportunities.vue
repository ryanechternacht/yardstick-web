<template>
  <div>
    <h1>Opportunities</h1>

    <div class="awards">
      <div
        v-for="o in opportunities"
        :key="o.id"
        class="award"
      >
        <div class="award-header">
          {{ o.title }}
        </div>
        <img :src="o.image">
        <div class="award-description">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="renderStudentTemplate(student, o.description)" />
        </div>
      </div>
    </div>

    <div class="obstacles-link">
      <nuxt-link
        to="/obstacles-and-opportunities/obstacles"
      >
        Explore {{ student.name.possessive }} Obstacles
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import opportunities from '@/assets/data/opportunities'
import { useRenderTemplate } from '@/composables/render-template'

export default {
  setup () {
    const { renderStudentTemplate } = useRenderTemplate()

    return {
      renderStudentTemplate
    }
  },
  data () {
    return {
      opportunities
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

.awards {
  @apply w-full grid grid-cols-3;
  column-gap: 100px;
}

.award {
  @apply flex flex-col items-center;
  margin-top: 70px;
}

.award-header {
  @apply my-20;
  font-size: 24px;
  line-height: 29px;
}

.award-description {
  @apply w-full p-20 mt-20 bg-gray-graph text-center;
  font-size: 24px;
  line-height: 29px;
}

.obstacles-link {
  @apply mt-50 text-center;
  font-size: 25px;
  line-height: 30px;
}
</style>
