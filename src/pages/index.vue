<template>
  <div class="content">
    <h1>Based on 27 data points we would say</h1>

    <div class="headline mt-24">
      {{ student.name.first }} is <span class="at-risk">At Risk</span> in Reading and
      <span class="advanced">Advanced</span> in Mathematics
    </div>

    <div class="links">
      <h1>What should we show you next?</h1>

      <div class="button-links">
        <nuxt-link
          class="button-link"
          to="/how-to-help"
        >
          <h4 class="p-20">
            How you can help {{ student.name.first }} be more prepared.
          </h4>
        </nuxt-link>
        <nuxt-link
          class="button-link"
          to="/assessments"
        >
          <h4 class="p-20">
            How {{ student.name.first }} is doing across all of {{ student.pronouns.possessive }} assessments.
          </h4>
        </nuxt-link>
        <nuxt-link
          class="button-link"
          to="/obstacles-and-opportunities"
        >
          <h4 class="p-20">
            Where {{ student.name.first }} is doing well and where {{ student.pronouns.nominative }} has room to grow.
          </h4>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  asyncData ({ params }) {
    return {
      studentId: params.studentId
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

.at-risk {
  @apply text-orange-at-risk underline;
}

.advanced {
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
