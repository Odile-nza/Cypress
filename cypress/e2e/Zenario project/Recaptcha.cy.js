describe('Automation', () => {
    it('passes', () => {
    
    cy.visit('https://demo.zenar.io/admin')
    cy.get('#username').type('admin');
    cy.get('#password').type('demo123');
    cy.get('#login').click();
    cy.get('#continue').click();
    cy.get('#plgslt_Slot_Contact_Popup_form_wrapper > h2').click()
    cy.get('#plgslt_Slot_Contact_Popup__field_34').type("Hello!")
    cy.get('#plgslt_Slot_Contact_Popup__field_35').type("Admin")
    cy.get('#plgslt_Slot_Contact_Popup__field_37').type("muraho@getnada.com")
    cy.get('#plgslt_Slot_Contact_Popup_field_42 > .field_title').click()
    
// recaptcha

    Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
        // Wait until the iframe (Google reCAPTCHA) is totally loaded
        //cy.wait(500);
        cy.get('#plgslt_Slot_Contact_Popup_google_recaptcha > [style="width: 304px; height: 78px;"] > div > iframe')
          .then($iframe => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body)
              .find('.recaptcha-checkbox-border')
              .should('be.visible')
            .click();
             });
             cy.get('#plgslt_Slot_Contact_Popup_user_form > form > .form_buttons > .next').click()     
    });
   
 })
})


    
