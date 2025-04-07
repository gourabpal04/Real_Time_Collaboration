const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
    specPattern: 'tests/e2e/**/*.js',
    supportFile: 'tests/cypress/support/e2e.js'
  },
  video: false,
  screenshotOnRunFailure: true,
})
