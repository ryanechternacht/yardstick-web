<script>
export default {
  asyncData ({ redirect, store }) {
    const settings = store.getters['settings/settings']()
    const studentId = settings.currentStudent
    redirect(`/students/${studentId}`)
  }
}
</script>
