/// <reference types="cypress" />

describe('Teste', function() {
    this.beforeEach(function() {
        cy.visit('./../src/index.html')
    })

    it('verifica', function() {
       
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('verifica', function() {
        cy.get('#firstName').type('Rafael')
        cy.get('#lastName').type('Mundim')
        cy.get('#email').type('teste@teste.com')
        cy.get('#open-text-area').type('Abrobra')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')

    })

    it('Valida telefone', function() {
        cy.get('#phone').type('gdffafad').should('be.value', '')
    })

    it('verificaFill', function() {
        cy.fillCampos()
        cy.get('.success').should('be.visible')

    })

    it('Botao', function() {
        cy.get('#firstName').type('Rafael')
        cy.get('#lastName').type('Mundim')
        cy.get('#email').type('teste@teste.com')
        cy.get('#open-text-area').type('Abrobra')
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')

    })

    it('Select', function() {
        cy.get('#product').select((1)).should('have.value', 'blog')

    })

    it('Checa', function() {
        cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')

    })

    it('envia arquivo', function() {
        cy.get('input[type="file"]').should('not.have.value').selectFile('./cypress/fixtures/example.json')
        .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json')
        })
    
    })

    it('sai da minha aba', function() {
        cy.get('#privacy a').should('have.attr', 'target', '_blank').click()
    })

})

