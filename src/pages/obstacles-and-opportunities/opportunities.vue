<template>
  <div>
    <h1>Opportunities</h1>

    <div class="awards">
      <div class="award">
        <div class="award-header">
          Shooting Star
        </div>
        <img src="~/assets/images/opportunities-star.png">
        <div class="award-description">
          Holy Moly! Darry grew more than <span class="font-bold">88% of his peers</span> on
          the most recent NWEA MAP Assessment
        </div>
      </div>
      <div class="award">
        <div class="award-header">
          Shooting Star
        </div>
        <img src="~/assets/images/opportunities-award.png">
        <div class="award-description">
          Darryl has the highest NWEA MAP score in
          <span class="font-bold">The Real and Complex Number System</span>
          in his class. Is ice cream in order?
        </div>
      </div>
      <div class="award">
        <div class="award-header">
          Shooting Star
        </div>
        <img src="~/assets/images/opportunities-wizard.png">
        <div class="award-description">
          Darry might have some magic up his sleeves as he is
          <span class="font-bold">Proficient</span> or <span class="font-bold">On Track</span>
          across all of his math assessments
        </div>
      </div>
    </div>

    <div class="obstacles-link">
      <nuxt-link
        to="/obstacles-and-opportunities/obstacles"
      >
        Explore Darryl's Obstacles
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-blue;
  font-size: 40px;
  line-height: 48px;
}

.awards {
  @apply w-full grid grid-cols-3;
  column-gap: 100px;
}

.award {
  @apply flex flex-col items-center;
  margin-top: 70px;
}

.award-header {
  @apply my-20;
  font-size: 24px;
  line-height: 29px;
}

.award-description {
  @apply w-full p-20 bg-gray-graph text-center;
  font-size: 24px;
  line-height: 29px;
}

.obstacles-link {
  @apply mt-50 text-center;
  font-size: 25px;
  line-height: 30px;
}
</style>
