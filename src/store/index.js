const studentPreloaded = {
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
}

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {
    // replace false flag with call to backend
    const student = process.env.NUXT_ENV_STATIC
      ? studentPreloaded
      : await new Promise(resolve => setTimeout(resolve(studentPreloaded), 0))

    commit('student/loadStudent', { student })
  }
}
