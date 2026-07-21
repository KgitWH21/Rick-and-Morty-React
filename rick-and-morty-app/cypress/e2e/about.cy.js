describe('AboutPage', () => {
    it('renders general information about the show', () => {
        cy.visit('/about')
        cy.contains('h1', 'About the show').should('be.visible')
        cy.contains('Rick Sanchez').should('be.visible')
    })

    it('links back home', () => {
        cy.visit('/about')
        cy.contains('a', 'Back through the portal').click()
        cy.url().should('eq', Cypress.config().baseUrl)
    })
})