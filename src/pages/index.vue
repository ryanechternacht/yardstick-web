<template>
  <div class="content">
    <h1>Based on 27 data points we would say</h1>

    <div class="headline mt-24">
      Darryl is <span class="at-risk">At Risk</span> in Reading and
      <span class="advanced">Advanced</span> in Mathematics
    </div>

    <div class="links">
      <h1>What should we show you next?</h1>

      <div class="button-links">
        <div class="button-link">
          <div class="p-20">
            How you can help Darryl be more prepared.
          </div>
        </div>
        <div class="button-link">
          <div class="p-20">
            How Darryl is doing across all of his assessments.
          </div>
        </div>
        <div class="button-link">
          <div class="p-20">
            Where Darryl is doing well and where he has room to grow.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
    rounded-lg text-blue-lighter cursor-pointer;
  height: 180px;
  font-size: 28px;
  line-height: 34px;
}

.button-link:hover {
  @apply bg-blue-lighter text-white;
}
</style>

<style>
/* TODO is there a better way to set this */
html * {
   font-family: 'Lato', sans-serif;
}
</style>
