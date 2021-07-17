export default function ({ $axios }) {
  if (process.server) {
    // TODO how do we want this? (like this or a local .env)
    $axios.setBaseURL(process.env.BASE_URL || 'http://localhost:4000')
  } else if (process.client) {
    $axios.setBaseURL('/')
  }
}
