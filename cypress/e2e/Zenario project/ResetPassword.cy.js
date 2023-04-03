describe('Automation', () => {
    it('passes', () => {
    
    cy.visit('https://demo.zenar.io/admin')

    cy.get('#forgot').click()
    cy.get('#email').type('muraho@getnada.com')
    cy.get('#reset').click()
    
    })
})