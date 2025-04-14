describe('Amazon Site Test', () => {
  it('Visits the example site and checks the title', () => {
    cy.visit('https://www.amazon.com/')       // Visit site
    cy.title().should('include', 'Amazon Domain') 
    cy.contains("This domain is for use in illustrative examples")// Check page title
  })
})
