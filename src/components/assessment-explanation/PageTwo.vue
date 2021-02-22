<template>
  <div class="explanation">
    <h1>What Type of Assessment is NWEA MAP?</h1>
    <div class="flex flex-row space-x-50 mt-50">
      <div
        class="flex-grow"
        style="flex-basis: 0"
      >
        <div class="flex flex-col items-center space-y-50">
          <p class="">
            NWEA MAP is considered a growth assessment
          </p>
          <img
            src="~/assets/svg/growth-icon.svg"
            class="growth-image"
          >
        </div>
      </div>
      <div
        class="flex-grow"
        style="flex-basis: 0"
      >
        <div class="flex flex-col items-center space-y-50">
          <p>
            This means MAP can measure Darryl’s growth from the start
            to end of a school year, as well as his growth over time.
          </p>
          <div class="sub-text">
            <sup>*</sup>Growth Assessments similar to NWEA MAP are very
            common in K-12 Education
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTwo'

}
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-blue text-center;
  font-size: 40px;
  line-height: 48px;
}

.explanation {
  @apply flex flex-col items-center mt-40;
}

.growth-image {
  max-width: 200px;
}

p {
  @apply text-center;
  font-size: 32px;
  line-height: 38.4px;
}

p.sub-text {
  @apply text-center italic;
  font-size: 28px;
  line-height: 33.6px;
}
</style>
