<script>
export default {
  middleware ({ redirect, params }) {
    const studentId = params.studentId
    redirect(`/students/${studentId}/obstacles-and-opportunities/opportunities`)
  }
}
</script>
