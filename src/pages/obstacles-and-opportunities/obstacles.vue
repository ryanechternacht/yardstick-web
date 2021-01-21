<template>
  <div>
    <h1>Obstacles</h1>

    <div class="flex flex-col mt-50 space-y-50">
      <p class="first">
        All kids have enormous potential to learn and grow, but almost all of them have
        some areas of their learning that are holding them back.
      </p>
      <p class="second">
        {{ second }}
      </p>
      <p class="third">
        The conversation should take around 3-4 minutes and we recomemend engaging with it,
        start to finish, in a single sitting.
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('student', ['student']),
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
h1 {
  @apply text-blue;
  font-size: 40px;
  line-height: 48px;
}

.first {
  @apply text-blue font-bold text-center;
  font-size: 32px;
  line-height: 38.4px;
}

.second {
  @apply text-center;
  font-size: 28px;
  line-height: 33.6px;
}

.third {
  @apply text-center;
  font-size: 24px;
  line-height: 28.8px;
}
</style>
