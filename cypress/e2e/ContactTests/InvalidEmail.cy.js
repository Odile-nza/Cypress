describe('Contact page', () => {
    it('Send data', () => {
      cy.visit('https://muraho.tech/')

     //testing contact tab
     cy.get('#menu-item-623 > .menu-link').click()
     cy.get(':nth-child(2) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').type('Odile')
     cy.get(':nth-child(3) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').type('odile@gmail')
     cy.get(':nth-child(4) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').type('A tester')
     cy.get(':nth-child(5) > label > .wpcf7-form-control-wrap > .wpcf7-form-control').type('I am testing')
     cy.get(':nth-child(6) > .wpcf7-form-control').click()

    })
})