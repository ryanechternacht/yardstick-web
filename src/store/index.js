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
      const [studentsReq, settingsReq] = await Promise.all([
        $axios.get('http://localhost:3001/v0.1/students'),
        $axios.get('http://localhost:3001/v0.1/settings')
      ])

      commit('student/loadStudents', { students: studentsReq.data })
      commit('settings/loadSettings', { settings: settingsReq.data })
    }
  }
}
