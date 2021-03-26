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
        <h2>{{ renderTemplate(recommendation.title, { student }) }}</h2>
        <div class="tags">
          <div
            v-for="(tag, ti) in recommendation.tags"
            :key="ti"
            class="tag"
          >
            {{ tag.text }}
          </div>
        </div>
        <div>
          {{ renderTemplate(recommendation.description, { student }) }}
        </div>
        <div class="flex flex-row-reverse">
          <nuxt-link
            class="open-recommendation"
            :to="{ path: `/how-to-help/${recommendation.id}` }"
          >
            {{ recommendation.action }}
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
  data () {
    return {
      recommendations
    }
  },
  computed: {
    ...mapGetters('student', ['student'])
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

h2 {
  @apply font-bold my-10;
  font-size: 32px;
  line-height: 38px;
}

.tags {
  @apply flex flex-row mb-20;
}

.tag {
  @apply mr-10 px-10 py-6 bg-gray-graph rounded-full;
  font-size: 14px;
  line-height: 17px;
}

.open-recommendation {
  @apply mt-20 bg-red text-white rounded-full px-16 py-10 uppercase float-right;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  line-height: 17px;
}
</style>
