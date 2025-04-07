// Custom Cypress commands to reuse in tests

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('createDocument', (title = 'Test Document') => {
  cy.request('POST', '/api/editor', { title }).then((response) => {
    expect(response.status).to.eq(201);
    Cypress.env('docId', response.body._id);
  });
});

Cypress.Commands.add('sendMessage', (message = 'Hello World') => {
  cy.get('[data-testid="chat-input"]').type(message);
  cy.get('[data-testid="chat-send-button"]').click();
});
