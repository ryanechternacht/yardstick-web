<template>
  <div class="full-height mt-20">
    <div class="template-grid">
      <div class="template-text">
        <h3 class="mb-10">
          Template Text
        </h3>
        <textarea
          v-model="inputText"
          class="input-text"
        />
      </div>
      <div class="data-sidebar">
        <h3>Data Fields</h3>
        <tree-view :data="{ student, assessment }" />
        <h3 class="mt-10">
          Acceptable Html
        </h3>
        <ul>
          <li>&lt;b&gt;<b>bold</b>&lt;/b&gt;</li>
          <li>&lt;u&gt;<u>underline</u>&lt;/u&gt;</li>
          <li>&lt;i&gt;<i>italics</i>&lt;/i&gt;</li>
        </ul>
      </div>
      <div class="w-full h-full">
        <h3 class="mb-10">
          Rendered Output
        </h3>

        <!-- eslint-disable vue/no-v-html -->
        <div
          class="rendered-output"
          v-html="renderedText"
        />
        <!-- eslint-enable vue/no-v-html -->
      </div>
    </div>
  </div>
</template>

<script>
import { useRenderTemplate } from '@/composables/render-template'

export default {
  setup () {
    const { renderTemplate } = useRenderTemplate()

    return {
      renderTemplate
    }
  },
  data () {
    return {
      student: {
        name: {
          first: 'Darryl',
          last: 'Hurt',
          full: 'Darryl Hurt',
          possessive: 'Darryl\'s'
        },
        pronouns: {
          nominative: 'he',
          nominativeUpper: 'He',
          possessive: 'his',
          possessiveUpper: 'His',
          accusative: 'him',
          accusativeUpper: 'Him'
        },
        grade: {
          ordinal: '8th',
          cardinal: 8
        }
      },
      assessment: {
        name: 'NWEA MAP',
        shortName: 'MAP'
      },
      // eslint-disable-next-line no-template-curly-in-string
      inputText: '${student.name.first} took a ${assessment.name} exam. ${student.pronouns.nominativeUpper} had to use <b>bold</b>, <u>underline</u>, and <i>italics</i> in ${student.pronouns.possessive} answers.'
    }
  },
  computed: {
    renderedText () {
      // Add debouncing to this
      try {
        return this.renderTemplate(this.inputText,
          {
            student: this.student,
            assessment: this.assessment
          })
      } catch (ex) {
        return ex
      }
    }
  }
}
</script>

<style scoped lang="postcss">
.full-height {
  /* 60px is the header, 20px is top margin
     it feels like there should be an easier way to do this... */
  height: calc(100vh - 80px);
}

.template-grid {
  @apply grid h-full;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr;
}

h3 {
  @apply font-medium;
  font-size: 24px;
  line-height: 28.8px;
}

.template-text {
  @apply flex flex-col border-b border-gray-graph-dark;
}
.input-text {
  @apply m-10 ml-0 p-10 border border-gray-graph-dark flex-grow;
}

.rendered-output {
  @apply border-gray-graph border-2 m-10 ml-0 p-10;
}

.data-sidebar {
  @apply border-l border-gray-graph-dark pl-10;
  grid-row-end: span 2;
}
</style>
