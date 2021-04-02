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
  async nuxtServerInit ({ commit }, { $axios }) {
    // replace false flag with call to backend
    const req = process.env.NUXT_ENV_STATIC
      ? { data: studentPreloaded }
      : await $axios.get('http://localhost:3001/v0.1/student')

    commit('student/loadStudent', { student: req.data })
  }
}
