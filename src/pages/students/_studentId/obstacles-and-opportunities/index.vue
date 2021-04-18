<script>
export default {
  middleware ({ redirect, params }) {
    const studentId = parseInt(params.studentId, 10)
    redirect(`/students/${studentId}/obstacles-and-opportunities/opportunities`)
  }
}
</script>
