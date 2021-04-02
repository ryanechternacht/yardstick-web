<template>
  <div>
    <h1 class="mt-50">
      How to Help
    </h1>
    <div class="recommendations">
      <div
        v-for="(recommendation, ri) in recommendations"
        :key="ri"
        class="recommendation"
      >
        <h2 class="font-bold my-10">
          {{ renderTemplate(recommendation.title, { student }) }}
        </h2>
        <div class="tags">
          <p
            v-for="(tag, ti) in recommendation.tags"
            :key="ti"
            class="small tag"
          >
            {{ tag.text }}
          </p>
        </div>
        <div>
          {{ renderTemplate(recommendation.description, { student }) }}
        </div>
        <div class="flex flex-row-reverse">
          <nuxt-link
            class="open-recommendation"
            :to="{ path: `/how-to-help/${recommendation.id}` }"
          >
            <p class="small">
              {{ recommendation.action }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import recommendations from '@/assets/data/how-to-help'
import { useRenderTemplate } from '@/composables/render-template'

export default {
  setup () {
    const { renderTemplate } = useRenderTemplate()

    return {
      renderTemplate
    }
  },
  asyncData ({ params }) {
    return {
      studentId: params.studentId
    }
  },
  data () {
    return {
      recommendations
    }
  },
  computed: {
    ...mapGetters('student', ['studentById']),
    student () {
      return this.studentById(this.studentId)
    }
  }
}
</script>

<style lang="postcss" scoped>
.recommendations > :first-child {
  @apply mt-50;
}

.recommendation {
  @apply mb-50 py-20;
}

.tags {
  @apply flex flex-row mb-20;
}

.tag {
  @apply mr-10 px-10 py-6 bg-gray-graph rounded-full;
}

.open-recommendation {
  @apply mt-20 bg-red text-white rounded-full px-16 py-10 uppercase float-right;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
