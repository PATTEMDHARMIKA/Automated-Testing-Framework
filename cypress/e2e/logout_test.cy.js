describe('Logout Test', () => {
    beforeEach(() => {
      cy.visit('https://practicetestautomation.com/practice-test-login/');
      cy.get('#username').type('student');
      cy.get('#password').type('Password123');
      cy.get('#submit').click();
    });
  
    it('Logs out successfully after login', () => {
      cy.url().should('include', '/logged-in-successfully');
      cy.contains('Log out').click();
      cy.url().should('include', '/practice-test-login');
    });
  });
  