describe('Automation', () => {
    it('passes', () => {
    
    cy.visit('https://demo.zenar.io/admin')
    cy.get('#username').type('admin');
    cy.get('#password').type('demo123');
    cy.get('#login').click();
    cy.get('#continue').click();

    cy.get('#nav').select('Español')
    })
})