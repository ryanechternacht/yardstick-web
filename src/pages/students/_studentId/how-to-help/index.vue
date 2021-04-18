<template>
  <div>
    <h1 class="mt-50">
      How to Help
    </h1>
    <div class="recommendations">
      <div
        v-for="(support, ri) in supports"
        :key="ri"
        class="recommendation"
      >
        <h2 class="font-bold my-10">
          {{ renderTemplate(support.overview.title, { student }) }}
        </h2>
        <div class="tags">
          <p
            v-for="(tag, ti) in support.overview.tags"
            :key="ti"
            class="small tag"
          >
            {{ tag.text }}
          </p>
        </div>
        <div>
          {{ renderTemplate(support.overview.description, { student }) }}
        </div>
        <div class="flex flex-row-reverse">
          <nuxt-link
            class="open-recommendation"
            :to="`/students/${studentId}/how-to-help/${support.id}`"
          >
            <p class="small">
              {{ support.overview.action }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { useRenderTemplate } from '@/composables/render-template'

export default {
  setup () {
    const { renderTemplate } = useRenderTemplate()

    return {
      renderTemplate
    }
  },
  async asyncData ({ params, store }) {
    const studentId = parseInt(params.studentId, 10)

    await store.dispatch('supports/fetchSupports', { studentId })

    return {
      studentId
    }
  },
  computed: {
    ...mapGetters('students', ['getStudentById']),
    ...mapGetters('supports', ['getSupportsByStudent']),
    student () {
      return this.getStudentById(this.studentId)
    },
    supports () {
      return this.getSupportsByStudent(this.studentId)
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
