<template>
  <fragment>
    <div>
      <div v-if="rating.score === 1">
        {{ rating.name }}
      </div>
    </div>
    <div>
      <div v-if="rating.score === 2">
        {{ rating.name }}
      </div>
    </div>
    <div>
      <div v-if="rating.score === 3">
        {{ rating.name }}
      </div>
    </div>
    <div>
      <div v-if="rating.score === 4">
        {{ rating.name }}
      </div>
    </div>
    <div>
      <div v-if="rating.score === 5">
        {{ rating.name }}
      </div>
    </div>
  </fragment>
</template>

<script>
export default {
  name: 'AssessmentOverviewRating',
  props: {
    rating: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
