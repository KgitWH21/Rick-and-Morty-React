describe('HomePage', () => {
    it('renders at the root URL', () => {
        cy.visit('/')
    })

    it('displays an attention getter', () => {
        cy.visit('/')
        cy.contains('Jump into the portal').should('be.visible')
        cy.contains('WUBBA').should('be.visible')
    })

    it('links to About page', () => {
        cy.visit('/')
        cy.contains('a', 'Why watch?').click()
        cy.url().should('include', '/about')
    })
})