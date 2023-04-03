describe('Muraho test', () => {
  it('Home page', () => {
    cy.visit('https://muraho.tech/')

    //testing get started button on home page

    const element = cy.get('.elementor-element-6f1a1016')
    element.trigger('mouseover')

    cy.get('.elementor-element-6f1a1016').click()
    cy.get('#menu-item-623 > .menu-link').click()
    cy.get('#menu-item-623 > .menu-link').go('back')

    //testing learn more button on home page
    
     cy.get('.elementor-element-d2b52cd > .elementor-container > .elementor-row > .elementor-column > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click()
     cy.get('#menu-item-625 > .menu-link').go('back')

     //testing home tab 
     cy.get('#menu-item-627 > .menu-link').click()

     //testing our team tab
     cy.get('#menu-item-755 > .menu-link').click()

     //testing about tab
     cy.get('#menu-item-626 > .menu-link').click()

     //testing services tab
     cy.get('#menu-item-625 > .menu-link').click()

     //testing Partners tab
     cy.get('#menu-item-624 > .menu-link').click()

     //testing news tab
     cy.get('#menu-item-671 > .menu-link').click()

     //testing contact tab
     cy.get('#menu-item-623 > .menu-link').click()
    
  })
})