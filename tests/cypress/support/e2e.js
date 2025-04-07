// Import custom commands
import './commands'

// Optional: Setup code coverage
import '@cypress/code-coverage/support'

// You can also hook into test lifecycle events here
beforeEach(() => {
  cy.log('Starting test...')
})

afterEach(() => {
  cy.log('Test completed.')
})
