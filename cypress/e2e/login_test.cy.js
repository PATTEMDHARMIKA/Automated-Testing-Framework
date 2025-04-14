describe('Custom Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('/practice-test-login/');
  });

  it('Logs in with valid credentials', () => {
    cy.get('#username').type('student');
    cy.get('#password').type('Password123');
    cy.get('#submit').click();
    cy.url().should('include', '/logged-in-successfully/');
    cy.contains('Congratulations student. You successfully logged in!').should('be.visible');
  });

  it('Shows error on invalid login', () => {
    cy.get('#username').type('wrong');
    cy.get('#password').type('wrongpass');
    cy.get('#submit').click();
    cy.get('#error').should('contain', 'Your username is invalid!');
  });

  it('Shows error when fields are empty', () => {
    cy.get('#submit').click();
    cy.get('#error').should('contain', 'Your username is invalid!');
  });
});
