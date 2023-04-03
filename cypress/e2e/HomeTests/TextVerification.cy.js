describe('Home page', () => {
    it('Text verification', () => {
      cy.visit('https://muraho.tech/')
      // identify element
      cy.get('.elementor-element-3d6ed232 > .elementor-widget-container > .elementor-heading-title')
      .then(function(h){
        const t = h.text()
        expect(t).to.contains('Rwanda')
      })
      cy.get('.elementor-element-3d6ed232 > .elementor-widget-container > .elementor-heading-title')
      .should('have.text',"Rwanda's own Software Testing provider")
    })
})