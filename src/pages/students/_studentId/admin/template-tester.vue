<template>
  <div class="full-height mt-20">
    <div class="template-grid">
      <div class="template-text">
        <h4 class="mb-10">
          Template Text
        </h4>
        <textarea
          v-model="inputText"
          class="input-text"
        />
      </div>
      <div class="data-sidebar">
        <h4>Data Fields</h4>
        <tree-view :data="{ student, assessment }" />
        <h4 class="mt-10">
          Acceptable Html
        </h4>
        <ul>
          <li>&lt;b&gt;<b>bold</b>&lt;/b&gt;</li>
          <li>&lt;u&gt;<u>underline</u>&lt;/u&gt;</li>
          <li>&lt;i&gt;<i>italics</i>&lt;/i&gt;</li>
        </ul>
      </div>
      <div class="w-full h-full">
        <h4 class="mb-10">
          Rendered Output
        </h4>

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
import studentData from '@/assets/static-data/student'

export default {
  setup () {
    const { renderTemplate } = useRenderTemplate()

    return {
      renderTemplate
    }
  },
  data () {
    return {
      student: studentData,
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

h4 {
  @apply font-medium;
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
