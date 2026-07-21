describe('CharactersPage', () => {
    it('shows a load state before data arrives', () => {
      cy.visit('/characters')
      cy.contains('Loading characters...')
    })

    it('displays a card for every character returned by API', () => {
      cy.visit('/characters')
      cy.contains('Loading characters...', { timeout: 20000 }).should('not.exist')
      cy.get('.character-card').should('have.length.greaterThan', 0)
    })

    it('shows character image, name, status, and species on each card', () => {
        cy.visit('/characters')
        cy.get('.character-card', { timeout: 20000 }).first().within(() => {
            cy.get('img').should('have.attr', 'src').and('include', 'http')
            cy.get('h2').should('not.be.empty')
            cy.contains('Status:')
            cy.contains('Species:')
        })
    })

})