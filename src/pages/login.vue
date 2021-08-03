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
    <div class="login-section">
      <div class="login-pane">
        <img
          class="login-logo"
          src="~/assets/svg/logo-with-ruler.svg"
        >

        <a
          class="login-link"
          href="/api/v0.1/login/google"
        >
          Google Login
        </a>

        <a
          class="login-link"
          href="/api/v0.1/login/facebook"
        >
          Facebook Login
        </a>

        <a
          class="login-link"
          href="/api/v0.1/login/microsoft"
        >
          Microsoft Login
        </a>
      </div>
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
  @apply border p-4
}

.login-layout {
  @apply grid;
  grid-template-columns: 40% 60%;
}

.testimonials-section {
  @apply w-full h-full bg-blue;
}

.testimonial {
  @apply flex p-50 items-center;
}

.testimonial-image-left {
  @apply flex-row-reverse;
}

.text {
  @apply flex flex-col bg-gray-graph rounded-md p-20;
  min-height: 200px;
}

.avatar {
  width: 150px;
  height: 150px;
}

.testimonial-image-left .text {
  margin-left: -75px;
  padding-left: 95px; /* 75 + 20 */
}

.testimonial-image-right .text {
  margin-right: -75px;
  padding-right: 95px; /* 75 + 20 */
}

.quote {
  @apply italic flex-grow;
  grid-area: quote;
  font-size: 24px;
  line-height: 29px;
}

.attribution {
  @apply justify-self-center self-center mt-10;
  grid-area: attribution;
  font-size: 18px;
  line-height: 22px;
}

.login-section {
  @apply mx-auto my-auto;
}

.login-pane {
  @apply flex flex-col items-center justify-center
    bg-gray-graph rounded-md;
  width: 534px;
  height: 438px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.login-logo {
  margin-bottom: 40px;
}

.login-link {
  margin-bottom: 20px;
}
</style>
