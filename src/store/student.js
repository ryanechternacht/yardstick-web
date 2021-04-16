export const state = () => ({
  students: {}
})
// TODO make plural
export const getters = {
  studentById: state => studentId => state.students[studentId]
}

export const mutations = {
  loadStudents (state, { students }) {
    for (const s of students) {
      state.students[s.id] = s
    }
  }
}
