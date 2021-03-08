// / <reference types="Cypress"/>


describe('-------Function FILES 2-----------', function () {

    it('check Header', function () {

        //Desktop view
        cy.viewport(600, 600)
        cy.visit('https://goaskalice.columbia.edu/')
        cy.get('#rcc-confirm-button').click()

})

})