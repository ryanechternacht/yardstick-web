<template>
  <div class="c">
    <div class="content">
      <h2 class="text-center">
        Based on 27 data points we would say
      </h2>

      <h1 class="text-center mt-24">
        Darryl is <span class="at-risk">At Risk</span> in Reading and
        <span class="advanced">Advanced</span> in Mathematics
      </h1>

      <div class="links">
        <h2 class="">
          What should we show you next
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.content {
  @apply flex flex-col items-center;
  margin-top: 100px;
}

h2 {
  font-size: 40px;
  line-height: 48px;
}

h1 {
  font-size: 70px;
  line-height: 84px;
}

.at-risk {
  @apply text-orange underline;
}

.advanced {
  @apply text-purple underline;
}

.links {
  margin-top: 200px;
}
</style>
