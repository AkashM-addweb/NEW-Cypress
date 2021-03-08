// / <reference types="Cypress"/>


describe('-------Function FILES 1-----------', function () {

    // it('check Header', function () {

    //     //Desktop view
    //     cy.viewport(1280, 760)
    //     cy.visit('https://goaskalice.columbia.edu/')
    //     cy.get('#rcc-confirm-button').click()

    //     // cy.get('.post').first().screenshot('first command')
    //     // cy.get('.post').first().screenshot({ padding: 10 })

    //     // cy.get('.sticky-header').invoke('css', 'position', 'absolute')
    //     //  cy.screenshot()
    //     // cy.get('.sticky-header').invoke('css', 'position', null)


    //     //Blue bar
    //     cy.get('.upper-header').should('be.visible').should('have.css', 'display', 'inline-block')
    //         .should('have.css', 'background-color', 'rgb(27, 69, 133)')

    //     cy.get('.header').toMatchImageSnapshot()
    //     // cy.get('.header').matchImageSnapshot()

    //     //Search functionality
    //     cy.get('[type=form-submit]').should('have.css', 'padding', '6px 30px 6px 12px')
    //         .should('have.css', 'border-right-width', '0px').should('have.css', 'border-top-width', '0px')
    //         .should('have.css', 'display', 'block').should('have.css', 'height', '38px')

    //     cy.wait(2000)

    //     //Logo and Search bar Div
    //     cy.get('.align-items-end').should('have.css', 'display', 'flex').should('have.css', 'margin-right', '-15px')
    //         .should('have.css', 'margin-left', '-15px')

    //     cy.wait(2000)

    //     //Check Header logo
    //     cy.get('.header__branding .image').should('have.css', 'height', '71px').should('have.css', 'width', '207px')

    //     cy.wait(2000)

    //     //Search logo in the search bar
    //     cy.get('input.form-submit.search-icon.form-control').should('be.visible').should('have.css', 'position', 'absolute')
    //         .should('have.css', 'right', '6px').should('have.css', 'top', '19px')

    //     // //Menu bar on the Homepage
    //     // cy.get('[data-layer=Content]').should('be.visible').should('have.css','background-color','rgb(49, 158, 107)')
    //     // .should('have.css','font-family','"Open Sans", sans-serif')

    //     // cy.get('.navbar-collapse').should('have.css','width','1110px')

    // })
    // // Cypress.SelectorPlayground.defaults(options)

    // it('to check the menu options', function () {
    //     cy.wait(2000)
    //     //Health topics
    //     cy.get('.main-menu__item--with-sub:nth-child(1) > .link').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
    //         .should('have.css', 'width', '191px').should('have.text', ' Health Topics ')

    //     cy.wait(2000)
    //     //Quizzes 
    //     cy.get('.main-menu__item--with-sub:nth-child(2) > .link').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
    //         .should('have.css', 'width', '191px').should('have.text', ' Quizzes ')

    //     cy.wait(2000)
    //     //Quizzes 
    //     cy.get('.main-menu__item--with-sub:nth-child(4) > .link').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
    //         .should('have.css', 'width', '191px').should('have.text', ' About Alice! ')


    // })

    it('to check the site in responsive', function () {

        cy.visit('https://goaskalice.columbia.edu/')
        cy.viewport("iphone-7")
        cy.get('#rcc-confirm-button').click()

        // cy.get('')
        //Blue bar - Background color
        cy.get('.upper-header').should('have.css','background-color','rgb(27, 69, 133)')

        // //blue bar -- content justified
        // cy.get('.upper-header__logo').should('have.css','justify-content','center').should('have.css','width','360px')

        // //blue bar - columbia logo
        // cy.get('.upper-header__logo > .link > .image').should('be.visible')


        // //Header section
        // // cy.get('.header').toMatchSnapshot()
        // // cy.get('.align-items-end').toMatchImageSnapshot('snapshot2')

        // cy.get('.navbar-toggler').should('have.css','font-weight','400').should('have.css','background-color','rgb(255, 255, 255)')
        // .should('have.css','padding','8px')

        // cy.get('.search-toggle').should('be.visible').should('have.css','font-family','"Droid Serif"').should('have.text','Search')
        // .should('have.css','line-height','28px')

        // cy.get('.new-qa__cta-wrapper').should('be.visible').toMatchImageSnapshot('snapshot1')
        // cy.get('.new-qa__cta-wrapper').should('have.css','padding-right','28px')
        // cy.get('.navbar-toggler').toMatchSnapshot()


        // cy.get('.post').first().screenshot()
    })


})