require('dotenv').config()

module.exports = {
  client: {
    service: {
      name: 'togetherappclient',
      // URL to the GraphQL API
      url: process.env.VITE_APOLLO_URL,
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}