Cypress.Commands.add('fillCampos', function(){
    cy.get('#firstName').type('Rafael')
    cy.get('#lastName').type('Mundim')
    cy.get('#email').type('teste@teste.com')
    cy.get('#open-text-area').type('Abrobra')
    cy.get('button[type="submit"]').click()
})