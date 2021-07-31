<template>
  <div class="login-layout">
    <div class="testimonials-section">
      <div class="testimonial testimonial-image-left">
        <div class="text">
          <div class="quote">
            “Yardstick has totally transformed how I talk with
            my daughters about their learning”
          </div>
          <div class="attribution">
            Janet Sales (Mother of 2)
          </div>
        </div>
        <img
          class="avatar"
          src="/images/testimonial-1.png"
          height="150"
          width="150"
        >
      </div>
      <div class="testimonial testimonial-image-right">
        <div class="text">
          <div class="quote">
            “Time is always tight. Yardstick makes it easy to know what I can
            focus on at home to help my kiddos”
          </div>
          <div class="attribution">
            Scott Boyce (Father of 3)
          </div>
        </div>
        <img
          class="avatar"
          src="/images/testimonial-2.png"
          height="150"
          width="150"
        >
      </div>
      <div class="testimonial testimonial-image-left">
        <div class="text">
          <div class="quote">
            “Grades were showing a misleading view of how my daughter
            was doing. Yardstick gave me clarity”
          </div>
          <div class="attribution">
            Chen Chen Jackel (Mother)
          </div>
        </div>
        <img
          class="avatar"
          src="/images/testimonial-3.png"
          height="150"
          width="150"
        >
      </div>
    </div>
    <div>
      <a href="/api/v0.1/login/google">Google Login</a>

      <br>
      <br>

      <a href="/api/v0.1/login/facebook">Facebook Login</a>

      <br>
      <br>

      <a href="/api/v0.1/login/microsoft">Microsoft Login</a>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'no_siderail'
}
</script>

<style lang="postcss" scoped>
a {
  @apply border
}

.login-layout {
  @apply grid;
  grid-template-columns: 40% 60%;
}

.testimonials-section {
  @apply w-full h-full bg-blue
}

.testimonial {
  @apply flex p-50;
}

.testimonial-image-left {
  @apply flex-row-reverse;
}

.avatar {
  width: 150px;
  height: 150px;
}

.text {
  @apply bg-gray-graph;
}

.testimonial-image-left .text {
  margin-left: -75px;
  padding-left: 75px;
}

.testimonial-image-right .text {
  margin-right: -75px;
  padding-right: 75px;
}
</style>
