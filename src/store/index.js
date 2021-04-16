// TODO Load these on the fly
import studentData from '@/assets/data/student'
import supports from '@/assets/data/supports'
import opportunities from '@/assets/data/opportunities'
import obstacles from '@/assets/data/obstacles'
import explanations from '@/assets/data/assessment-explanations'
import overviews from '@/assets/data/assessment-overviews'
import results from '@/assets/data/assessment-results'

const studentId = 1
const prefixedSettings = {
  currentStudent: studentId
}

const assessmentIds = [1, 2, 3, 4, 5]

export const actions = {
  async nuxtServerInit ({ commit }, { $axios }) {
    if (process.env.NUXT_ENV_STATIC) {
      commit('student/loadStudents', { students: [studentData] })
      commit('settings/loadSettings', { settings: prefixedSettings })
      commit('supports/loadSupports', { supports, studentId })
      commit('opportunities/loadOpportunities', { opportunities, studentId })
      commit('obstacles/loadObstacles', { obstacles, studentId })
      commit('assessments/loadOverviews', { overviews, studentId })
      assessmentIds.forEach((id) => {
        commit('assessments/loadExplanation', {
          explanation: explanations.find(e => e.assessmentId === id),
          assessmentId: id,
          studentId
        })
        commit('assessments/loadResult', {
          result: results.find(r => r.id === id),
          assessmentId: id,
          studentId
        })
      })
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
