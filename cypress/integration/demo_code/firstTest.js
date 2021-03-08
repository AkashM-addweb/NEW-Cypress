/// <reference types="cypress" />

context('Window', () => {
    beforeEach(() => {
      cy.visit('https://goaskalice.columbia.edu/')

      cy.get('#rcc-confirm-button').click()
      cy.wait(700)
    })
  
    it('open in Mac 15', () => {
      // https://on.cypress.io/window
      cy.viewport('macbook-15')
      cy.screenshot()
      cy.wait(700)
    })

    it('Open in Macbook 13', () => {
        // https://on.cypress.io/window
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(500)
      })
  
      it('open in ipad-2', () => {
        // https://on.cypress.io/window
        cy.viewport('ipad-2')
        cy.screenshot()
        cy.wait(500)
      })

      it('open in iPhone- 5', () => {
        // https://on.cypress.io/window
        cy.viewport('iphone-5')
        cy.screenshot()
        cy.wait(200)
      })
  
    })