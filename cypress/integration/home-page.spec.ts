describe('Home page actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('visit detail page on card', () => {
    cy.get('.members-list__card').first().click()
    cy.get('.member-detail__value').first()
      .should('be.visible')
  })

  it('members list is reordened by click', () => {
    cy.intercept('GET', '/members*').as('getMembers')
    cy.get('.members-list__card').first().contains('zenóbia da conceição')
    cy.get('.header-to-sort__icon').click()
    cy.wait('@getMembers')
    cy.get('.members-list__card').first().contains('abraim da costa')
  })

  it('filtering by state', () => {
    cy.intercept('GET', '/members*').as('getMembers')
    cy.get('.header-to-sort__info').contains('Exibindo 9 de 200 itens')
    cy.get('.checkbox-filter__input-group').first()
      .contains('minas gerais (14)')
      .click()
    cy.wait('@getMembers')
    cy.get('.header-to-sort__info').contains('Exibindo 9 de 14 itens')
    cy.get('.checkbox-filter__clear').contains('Limpar filtro').click()
    cy.wait('@getMembers')
    cy.get('.header-to-sort__info').contains('Exibindo 9 de 200 itens')    
  })

  it('expanding filter', () => {
    cy.get('.checkbox-filter__input-group').last()
      .should('not.be.visible')
    cy.get('.checkbox-filter__show-all').contains('Ver todos').click()
    cy.get('.home-view__states').scrollTo('bottom')
    cy.get('.checkbox-filter__input-group').last()
      .should('be.visible')
    cy.get('.checkbox-filter__show-all').contains('Mostrar menos').click()
    cy.get('.checkbox-filter__input-group').last()
      .should('not.be.visible')
  })

  it('navigating between pages', () => {
    cy.get('.pagination__page').first()
      .should('have.class', 'pagination__page--active')
    cy.get('.pagination__nav--left')
      .should('have.class', 'pagination__nav--disabled')
    cy.get('.pagination__nav--right').click()
    cy.get('.pagination__page').first()
      .should('not.have.class', 'pagination__page--active')
    cy.get('.pagination__nav--left').click()
    cy.get('.pagination__page').first()
      .should('have.class', 'pagination__page--active')
  })

  it('searching by name', () => {
    cy.intercept('GET', '/members*').as('getMembers')
    cy.get('.search-input__input').type('rui gonçalves')
    cy.wait('@getMembers')
    cy.get('.members-list__card').contains('rui gonçalves')
  })
})
