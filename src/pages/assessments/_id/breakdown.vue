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
    <rit
      :x-axis-label="`${assessment.name} ${subject.name} Domains`"
      :y-axis-label="assessment.scale"
      :domains="term.domains"
    />
    <div style="height: 50px" />
    <rit-html
      :x-axis-label="`${assessment.name} ${subject.name} Domains`"
      :y-axis-label="assessment.scale"
      :domains="term.domains"
    />
    <div style="height: 50px" />
  </div>
</template>

<script>
import Percentile from '@/components/graphs/Percentile'
import Rit from '@/components/graphs/Rit'
import RitHtml from '@/components/graphs/RitHtml'

// TODO nuxt screen size - https://www.npmjs.com/package/nuxt-ssr-screen-size
export default {
  components: {
    Percentile,
    Rit,
    RitHtml
  },
  data () {
    return {
      // TODO where does these come from?
      assessment: {
        name: 'NWEA MAP',
        shortName: 'MAP',
        scale: 'RIT Score'
      },
      subject: {
        name: 'Mathematics'
      },
      term: {
        fullName: 'Winter 2021',
        gradeLevelAverage: 280,
        domains: [
          {
            name: 'Geometry',
            score: 278
          },
          {
            name: 'Statistics and Probability',
            score: 282
          },
          {
            name: 'Operations and Algebraic Thinking',
            score: 283
          },
          {
            name: 'The REal and Complex Number System',
            score: 284
          }
        ]
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
