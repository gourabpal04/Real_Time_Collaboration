// Custom command to login a test user
Cypress.Commands.add('login', (email = 'testuser@example.com', password = 'testpass') => {
  cy.request('POST', 'http://localhost:5000/api/auth/login', {
    email,
    password,
  }).then((response) => {
    localStorage.setItem('token', response.body.token);
  });
});
