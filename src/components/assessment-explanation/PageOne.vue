<template>
  <div class="explanation">
    <h1>Why is the NWEA MAP Important</h1>
    <div class="explanation-text">
      Your school uses the NWEA MAP Assessment as it’s primary tool for determing
      student academic growth
    </div>
    <div class="explanation-text">
      Darryl’s scores at the end of the year maybe be a factor in determining what
      Math and ELA classes are available to him in high school
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageOne'

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

.explanation-text {
  @apply mt-40 text-center;
  font-size: 32px;
  line-height: 38.4px;
}
</style>
