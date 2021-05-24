// TODO Load these on the fly
import studentData from '@/assets/static-data/student'
import supports from '@/assets/static-data/supports'
import opportunities from '@/assets/static-data/opportunities'
import obstacles from '@/assets/static-data/obstacles'
import explanations from '@/assets/static-data/assessment-explanations'
import overviews from '@/assets/static-data/assessment-overviews'
import results from '@/assets/static-data/assessment-results'

const studentId = 1
const prefixedSettings = {
  currentStudent: studentId
}

const assessmentIds = [1, 2, 3, 4, 5]

export const actions = {
  async nuxtServerInit ({ commit }, { $axios }) {
    if (process.env.NUXT_ENV_STATIC) {
      commit('students/loadStudents', { students: [studentData] })
      commit('settings/loadSettings', { settings: prefixedSettings })
      commit('supports/loadSupports', { supports: { content: supports }, studentId })
      commit('opportunities/loadOpportunities', { opportunities: { content: opportunities }, studentId })
      commit('obstacles/loadObstacles', { obstacles: { content: obstacles }, studentId })
      commit('assessments/loadOverviews', { overviews: { content: overviews }, studentId })
      assessmentIds.forEach((id) => {
        commit('assessments/loadExplanation', {
          explanation: {
            content: explanations.find(e => e.assessmentId === id)
          },
          assessmentId: id,
          studentId
        })
        commit('assessments/loadResult', {
          result: {
            content: results.find(r => r.id === id)
          },
          assessmentId: id,
          studentId
        })
      })
    } else {
      // TODO This also needs to support loading multiple at a time
      const [studentsReq, settingsReq] = await Promise.all([
        $axios.get('/api/v0.1/students'),
        $axios.get('http://localhost:3001/v0.1/settings')
      ])

      commit('students/loadStudents', { students: studentsReq.data })
      commit('settings/loadSettings', { settings: settingsReq.data })
    }
  }
}
