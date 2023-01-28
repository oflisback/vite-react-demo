describe('Test the button', () => {
  it('should increment count', () => {
    cy.visit('/')
    cy.get('[data-test-id="button-increment-count"]').contains('count is 0')
    cy.get('[data-test-id="button-increment-count"]').click()
    cy.get('[data-test-id="button-increment-count"]').contains('count is 1')
  })
})
