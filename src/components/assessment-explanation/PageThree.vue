<template>
  <div class="explanation">
    <h1>How does the NWEA MAP Work?</h1>
    <div class="traits">
      <div>
        <h2>Adaptive</h2>
        <div class="trait-description">
          <img
            src="~/assets/svg/adaptive-icon.svg"
            class="trait-icon"
          >
          <p>
            NWEA MAP responds to how your student is performing,
            getting harder or easier to gain a better understanding
            of their abilities.
          </p>
        </div>
      </div>
      <div>
        <h2>Subject Based</h2>
        <div class="trait-description">
          <p>
            Darryl takes one test per subject area. His most recent
            testing was in Reading and Math.
          </p>
          <img
            src="~/assets/svg/subject-based-icon.svg"
            class="trait-icon"
          >
        </div>
      </div>
      <div>
        <h2>Reoccurring</h2>
        <div class="trait-description">
          <img
            src="~/assets/svg/reoccuring-icon.svg"
            class="trait-icon"
          >
          <p>
            Darryl Takes the NWEA MAP assessment 3-4 times per year.

            Normally once in the in the fall, winter and spring.
          </p>
        </div>
      </div>
      <div>
        <h2>Normative</h2>
        <div class="trait-description">
          <p>
            Darryl’s NWEA MAP Scores can be easily compared to
            students in his grade level all across the country.
          </p>
          <img
            src="~/assets/svg/normative-icon.svg"
            class="trait-icon"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageThree'

}
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-blue;
  font-size: 40px;
  line-height: 48px;
}

.explanation {
  @apply flex flex-col items-center mt-40;
}

.traits {
  @apply grid grid-rows-2 grid-cols-2 mt-40 gap-50;
}

h2 {
  @apply text-center;
  font-size: 32px;
  line-height: 38.4px;
}

.trait-description {
  @apply flex flex-row mt-20 gap-20;
}

.trait-icon {
  width: 115px;
  height: 115px;
}

p {
  font-size: 15px;
  line-height: 18px;
}
</style>
