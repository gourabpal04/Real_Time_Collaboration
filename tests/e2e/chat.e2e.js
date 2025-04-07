describe('Chat Messaging', () => {
  beforeEach(() => {
    cy.login(); // Custom login helper
    cy.visit('/chat');
  });

  it('should send and receive messages', () => {
    cy.get('input[name="message"]').type('Hello team!');
    cy.get('button').contains('Send').click();

    cy.get('.chat-message').last().should('contain.text', 'Hello team!');
  });
});
