describe('Authentication Flow', () => {
  it('should allow a user to register and login', () => {
    cy.visit('/auth');

    // Registration
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('Test@1234');
    cy.get('button').contains('Register').click();

    // Should redirect to editor/dashboard
    cy.url().should('include', '/editor');

    // Logout and login again
    cy.get('button').contains('Logout').click();
    cy.visit('/auth');

    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('Test@1234');
    cy.get('button').contains('Login').click();

    cy.url().should('include', '/editor');
  });
});
