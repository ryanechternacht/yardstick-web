<script>
export default {
  asyncData ({ redirect, store }) {
    const settings = store.getters['settings/getSettings']
    const studentId = settings.currentStudent
    redirect(`/students/${studentId}`)
  }
}
</script>
