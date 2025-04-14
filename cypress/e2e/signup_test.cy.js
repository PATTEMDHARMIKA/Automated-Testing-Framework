describe('Sign Up Tests', () => {
    // Update this URL based on how you're hosting the project locally.
    // For example, if you use VSCode Live Server, it might be: http://localhost:8080/signup.html
    beforeEach(() => {
      cy.visit('http://localhost:8080/signup.html');
    });
  
    it('Signs up with valid details', () => {
      cy.get('#username').type('newuser');
      cy.get('#password').type('StrongPass1!');
      cy.get('#confirmPassword').type('StrongPass1!');
      cy.get('button').click();
  
      // Verify the alert message on successful signup
      cy.on('window:alert', (txt) => {
        expect(txt).to.contains('Signup Successful');
      });
      // After alert, verify redirection to the login page (index.html)
      cy.url().should('include', 'index.html');
    });
  
    it('Shows error when passwords do not match', () => {
      cy.get('#username').type('newuser');
      cy.get('#password').type('StrongPass1!');
      cy.get('#confirmPassword').type('DifferentPass!');
      cy.get('button').click();
      cy.get('#error').should('contain', 'Passwords do not match');
    });
  
    it('Checks password strength indication', () => {
      cy.get('#password').type('Weak');
      cy.get('#strengthIndicator').should('contain', 'Weak');
      cy.get('#password').clear().type('Moderate123');
      cy.get('#strengthIndicator').should('contain', 'Moderate');
      cy.get('#password').clear().type('StrongPass1!');
      cy.get('#strengthIndicator').should('contain', 'Strong');
    });
  });
  