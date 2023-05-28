describe('My First Test', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
      cy.url().should('include', 'io/commands/actions')
      cy.get('.action-email').type('fake@email.com')
      cy.get('.action-email').should('have.value', 'fake@email.com')
    })
  })