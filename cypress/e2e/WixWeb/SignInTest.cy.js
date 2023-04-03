describe('Login page', () => {
    it('Login successful', () => {

      cy.visit('https://www.wix.com')
      cy.get('#comp-le5hiwnh > [data-testid="linkElement"] > .StylableButton2545352419__container > [data-testid="stylablebutton-label"]').click()
      cy.get('.BnD5F')
      cy.get('.s-o-XrT').type('muraho@getnada.com')
      
      cy.get('.s2wB_nN > .s1WKT_l').click()
      cy.get(':nth-child(2) > .s2H-CTt > .s3fH0Uw > [data-hook="labelledElement-children"] > .s1OVpWG > .s-o-XrT')
      .type('Antman2023!')
      cy.get('[style="width: 304px; height: 78px;"] > div > iframe').check()
      cy.get('[style="margin-top: 24px; --Box693919056-gap:6px;"] > .s3D-uNU')
      cy.get('[style="margin-top: 24px; --Box693919056-gap:6px;"] > .s3D-uNU > .s1WKT_l')
      .click()
    })
})