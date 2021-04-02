<script>
export default {
  middleware ({ redirect, params }) {
    const studentId = params.studentId
    redirect(`/${studentId}/obstacles-and-opportunities/opportunities`)
  }
}
</script>
