describe('Automation', () => {
    it('passes', () => {
    
    cy.visit('https://demo.zenar.io/admin')
    cy.get('#username').type('admin');
    cy.get('#password').type('demo123');
    cy.get('#login').click();
    cy.get('#continue').click();
    
    cy.get('#zenario_organizer_button').click()

    // mouse over
    cy.get(':nth-child(2) > .organizer_item > .organizer_legend > .organizer_top_level_image').realHover('mouse')
    })
    
    })