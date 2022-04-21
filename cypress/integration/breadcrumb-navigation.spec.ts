describe('Breadcrumb navigation', () => {
  beforeEach(() => {
    cy.intercept('GET', '/members/*').as('getMember')
    cy.visit('/member/10')
    cy.wait('@getMember')
  })

  it('visit detail page', () => {
    cy.get('.page-layout__title').contains('mr. quévin cavalcanti')
  })

  it('go back to home page', () => {
    cy.get('.breadcrumb__route').first().contains('Home').click()
    cy.get('.page-layout__title').contains('Lista de membros')
  })
})
