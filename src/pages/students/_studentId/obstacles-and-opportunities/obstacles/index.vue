<template>
  <div>
    <h1>Obstacles</h1>

    <div class="flex flex-col mt-50 space-y-50">
      <h2 class="text-blue font-medium text-center">
        All kids have enormous potential to learn and grow, but almost all of them have
        some areas of their learning that are holding them back.
      </h2>
      <h3 class="text-center">
        {{ second }}
      </h3>
      <h4 class="text-center">
        The conversation should take around 3-4 minutes and we recomemend engaging with it,
        start to finish, in a single sitting.
      </h4>
    </div>

    <div class="mt-50 text-center">
      <nuxt-link
        class="start-the-conversation"
        :to="`/students/${studentId}/obstacles-and-opportunities/obstacles/1`"
      >
        <p class="small inline">
          Start the Conversation
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  asyncData ({ params }) {
    return {
      studentId: parseInt(params.studentId, 10)
    }
  },
  computed: {
    ...mapGetters('students', ['getStudentById']),
    student () {
      return this.getStudentById(this.studentId)
    },
    second () {
      return `To learn about the obstacles ${this.student.name.first} is facing with regards to
        ${this.student.pronouns.possessive} learning, we will guide you through a digital
        conversation, in which you are in the drivers seat. During which we will hopefully
        answer all the question running through your head 😀.`
    }
  }
}
</script>

<style lang="postcss" scoped>
.start-the-conversation {
  @apply bg-red text-white rounded-full px-16 py-10 uppercase;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
