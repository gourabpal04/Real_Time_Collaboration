import './commands'
import '@cypress/code-coverage/support'

beforeEach(() => {
  cy.log('Starting test...')
})

afterEach(() => {
  cy.log('Test completed.')
})
