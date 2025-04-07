beforeEach(() => {
  cy.fixture('user').as('userData');
  cy.fixture('document').as('docData');
  cy.fixture('chat').as('chatData');

  cy.intercept('POST', '/api/auth/login', (req) => {
    req.reply({
      statusCode: 200,
      body: {
        token: 'mocked-jwt-token',
        user: {
          name: 'Test User',
          email: 'testuser@example.com'
        }
      }
    });
  });

  cy.intercept('GET', '/api/documents/doc123', { fixture: 'document.json' });
  cy.intercept('GET', '/api/chat/messages', { fixture: 'chat.json' });
});
