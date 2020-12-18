<template>
  <div>
    <div
      v-for="(gist, index) in gists"
      :key="index"
      class="mb-20"
    >
      {{ gist }}
    </div>
  </div>
</template>

<script>
import gistData from '@/assets/data/gists'

export default {
  data () {
    return {
      gists: gistData
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
