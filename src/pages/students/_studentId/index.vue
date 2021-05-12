<template>
  <div class="content">
    <h1>{{ home.preHeadline }}</h1>

    <!-- eslint-disable vue/no-v-html -->
    <div
      class="headline mt-24"
      v-html="renderTemplate(home.headline, { student })"
    />
    <!-- eslint-enable vue/no-v-html -->

    <div class="links">
      <h1>{{ home.nav }}</h1>

      <div class="button-links">
        <nuxt-link
          class="button-link"
          :to="`/students/${studentId}/how-to-help`"
        >
          <h4 class="p-20">
            {{ renderTemplate(home.navHowToHelp, { student }) }}
          </h4>
        </nuxt-link>
        <nuxt-link
          class="button-link"
          :to="`/students/${studentId}/assessments`"
        >
          <h4 class="p-20">
            {{ renderTemplate(home.navAssessment, { student }) }}
          </h4>
        </nuxt-link>
        <nuxt-link
          class="button-link"
          :to="`/students/${studentId}/obstacles-and-opportunities`"
        >
          <h4 class="p-20">
            {{ renderTemplate(home.navObstaclesAndOpportunities, { student }) }}
          </h4>
        </nuxt-link>
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
  asyncData ({ params }) {
    return {
      studentId: parseInt(params.studentId, 10)
    }
  },
  computed: {
    ...mapGetters('students', ['getStudentById']),
    ...mapGetters('layout', { home: 'getHome' }),
    student () {
      return this.getStudentById(this.studentId)
    }
  }
}
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-black text-center;
}

.content {
  @apply flex flex-col items-center;
  margin-top: 100px;
  margin-bottom: 200px;
}

.headline {
  @apply text-center;
  font-size: 70px;
  line-height: 84px;
}

>>> .at-risk {
  @apply text-orange-at-risk underline;
}

>>> .advanced {
  @apply text-purple-advanced underline;
}

.links {
  margin-top: 200px;
}

.button-links {
  @apply flex items-center mt-50;
}

.button-link {
  @apply flex flex-row items-center text-center mx-24 border-3 border-blue-lighter
    rounded-lg text-blue-lighter;
  height: 180px;
}

.button-link:hover {
  @apply bg-blue-lighter text-white;
}
</style>
