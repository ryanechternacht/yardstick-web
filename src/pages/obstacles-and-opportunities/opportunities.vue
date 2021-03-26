<template>
  <div>
    <h1>Opportunities</h1>

    <div class="awards">
      <div
        v-for="o in opportunities"
        :key="o.id"
        class="award"
      >
        <h4 class="my-20">
          {{ o.title }}
        </h4>
        <img :src="o.image">
        <h4 class="award-description">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="renderTemplate(o.description, { student, assessment })" />
        </h4>
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
    const { renderTemplate } = useRenderTemplate()

    return {
      renderTemplate
    }
  },
  data () {
    return {
      opportunities,
      // TODO Where should this come from?
      assessment: {
        name: 'NWEA MAP',
        shortName: 'MAP'
      }
    }
  },
  computed: {
    ...mapGetters('student', ['student'])
  }
}
</script>

<style lang="postcss" scoped>
.awards {
  @apply w-full grid grid-cols-3;
  column-gap: 100px;
}

.award {
  @apply flex flex-col items-center;
  margin-top: 70px;
}

.award-description {
  @apply w-full p-20 mt-20 bg-gray-graph text-center;
}

.obstacles-link {
  @apply mt-50 text-center;
  font-size: 25px;
  line-height: 30px;
}
</style>
