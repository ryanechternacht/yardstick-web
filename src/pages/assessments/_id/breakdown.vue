<template>
  <div>
    <h1>{{ assessment.name }} - {{ subject.name }} Breakdown</h1>
    <h2 class="mt-50">
      Growth v. Achievement ({{ term.fullName }})
    </h2>
    <percentile
      name="Achievement"
      :percentile="achievement"
      :width="1200"
    />
    <percentile
      name="Growth"
      :percentile="growth"
      :width="1200"
    />
  </div>
</template>

<script>
import Percentile from '@/components/graphs/Percentile'

export default {
  components: {
    Percentile
  },
  data () {
    return {
      // TODO where does these come from?
      assessment: {
        name: 'NWEA MAP',
        shortName: 'MAP'
      },
      subject: {
        name: 'Mathematics'
      },
      term: {
        fullName: 'Winter 2021'
      },
      achievement: 72,
      growth: 98
    }
  }
}
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-blue;
  font-size: 40px;
  line-height: 48px;
}

h2 {
  font-size: 32px;
  line-height: 38.4px;
}
</style>
