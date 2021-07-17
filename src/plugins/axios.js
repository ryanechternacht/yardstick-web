export default function ({ $axios }) {
  if (process.server) {
    $axios.setBaseURL(process.env.BASE_URL)
  } else if (process.client) {
    $axios.setBaseURL('/')
  }
}
