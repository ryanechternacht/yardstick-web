export default function ({ $axios, $config }) {
  if (process.server) {
    // TODO how do we want this? (like this or a local .env)
    $axios.setBaseURL($config.baseUrl)
  } else if (process.client) {
    $axios.setBaseURL('/')
  }
}
