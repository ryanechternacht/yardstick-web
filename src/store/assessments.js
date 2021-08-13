import { differenceInMinutes } from 'date-fns'

export const state = () => ({
  overviews: {},
  results: {},
  explanations: {}
})

// I'm really not sure where this should live, but this is
// as good as place as any for now
const buildExplanation = ({ traits, assessmentType }) => {
  /* eslint-disable no-template-curly-in-string */
  switch (assessmentType) {
    // TODO should just be growth
    default: return {
      overview: {
        title: 'Why is the ${assessment.name} important?',
        p1: 'Your school uses the ${assessment.name} as it’s primary tool for determing student academic growth',
        p2: '${student.name.possessive} scores at the end of the year maybe be a factor in determining what Math and ELA classes are available to ${student.pronouns.accusative} in high school'
      },
      type: {
        title: 'What Type of Assessment is ${assessment.name}?',
        p1: '${assessment.name} is considered a growth assessment',
        p2: 'This means ${assessment.shortName} can measure ${student.name.possessive} growth from the start to end of a school year, as well as ${student.pronouns.possessive} growth over time.',
        p3: '<sup>*</sup>Growth Assessments similar to ${assessment.name} are very common in K-12 Education'
      },
      traits: {
        title: 'How does the ${assessment.name} Work?',
        traits
      }
    }
  }
  /* eslint-enable no-template-curly-in-string */
}

export const getters = {
  // TODO use the ?. form?
  getOverviewsByStudent: state => studentId =>
    state.overviews[studentId].content,
  getResultsByStudentAndId: state => (studentId, assessmentId) =>
    state.results[studentId] && state.results[studentId][assessmentId].content,
  getExplanationById: state => assessmentId =>
    state.explanations[assessmentId].explanation
}

export const mutations = {
  loadOverviews (state, { overviews, studentId }) {
    state.overviews[studentId] = overviews
  },
  loadResult (state, { result, assessmentId, studentId }) {
    if (!state.results[studentId]) {
      state.results[studentId] = {}
    }
    state.results[studentId][assessmentId] = result
  },
  loadExplanation (state, { explanation, assessmentId }) {
    explanation.explanation = buildExplanation(explanation.content)
    state.explanations[assessmentId] = explanation
  }
}

export const actions = {
  async fetchOverviews ({ commit, state }, { studentId, forceRefresh }) {
    if (this.$config.staticRuntime) {
      return
    }

    const now = Date.now()
    if (!state.overviews[studentId] ||
        forceRefresh ||
        (differenceInMinutes(now, state.overviews[studentId].generatedAt) >= 10)) {
      const overviews = await this.$axios.$get(
        `/api/v0.1/student/${studentId}/assessments`)

      commit('loadOverviews', {
        studentId,
        overviews: {
          content: overviews,
          generatedAt: now
        }
      })
    }
  },

  async fetchResult ({ commit, state }, { studentId, assessmentId, forceRefresh }) {
    if (this.$config.staticRuntime) {
      return
    }

    const now = Date.now()
    if (!(state.results[studentId] && state.results[studentId][assessmentId]) ||
        forceRefresh ||
        (differenceInMinutes(now, state.results[studentId][assessmentId].generatedAt) >= 10)) {
      const result = await this.$axios.$get(
        `/api/v0.1/student/${studentId}/assessment/${assessmentId}`)

      commit('loadResult', {
        studentId,
        assessmentId,
        result: {
          content: result,
          generatedAt: now
        }
      })
    }
  },
  async fetchExplanation ({ commit, state }, { assessmentId, forceRefresh }) {
    if (this.$config.staticRuntime) {
      return
    }

    const now = Date.now()
    if (!(state.explanations[assessmentId]) ||
        forceRefresh ||
        (differenceInMinutes(now, state.explanations[assessmentId].generatedAt) >= 10)) {
      const explanation = await this.$axios.$get(
        `/api/v0.1/assessment/${assessmentId}/explanation`)

      commit('loadExplanation', {
        assessmentId,
        explanation: {
          content: explanation,
          generatedAt: now
        }
      })
    }
  }
}
