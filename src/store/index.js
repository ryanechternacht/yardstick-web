import studentData from '@/assets/data/student'

const prefixedSettings = {
  currentStudent: 1
}

export const actions = {
  async nuxtServerInit ({ commit }, { $axios }) {
    if (process.env.NUXT_ENV_STATIC) {
      commit('student/loadStudents', { students: [studentData] })
      commit('settings/loadSettings', { settings: prefixedSettings })
    } else {
      // TODO This also needs to support loading multiple at a time
      const req = await $axios.get('http://localhost:3001/v0.1/student')
      commit('student/loadStudents', { students: req.data })

      // TODO a route for this
      commit('settings/loadSettings', { settings: prefixedSettings })
    }
  }
}
