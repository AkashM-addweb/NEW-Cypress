/// <reference types="Cypress"/>


describe('test suite for visual testing', function(){

    // it('imageCompare', function(){

    //     cy.visit('https://photographylife.com/what-is-photography')
    //     cy.viewport('macbook-15')
    //     cy.wait(3000)
    //     cy.get('.fs-close-button').click()
    //     // cy.wait('5000'   )
    //     // cy.get('[src=https://photographylife.com/wp-content/uploads/2016/06/Brown-Anole-960x640.jpg]').matchImageSnapshot('promoHeader__promoMastheadLink')
    //     cy.get('.wp-image-127898').matchImageSnapshot('promoHeader__promoMastheadLink')
    // })



    // it('image compare 2', function(){

    //     cy.visit('https://css-tricks.com/')
    //     cy.viewport('macbook-15')
    //     cy.wait(3000)
    //     cy.get('.fs-close-button').click()
    //     // cy.wait('5000'   )
    //     // cy.get('[src=https://photographylife.com/wp-content/uploads/2016/06/Brown-Anole-960x640.jpg]').matchImageSnapshot('promoHeader__promoMastheadLink')
    //     cy.get('.wp-image-127898').matcclient/web?login=true#?hm=true&n=dfd81dc2-fbeb-3e78-8819-3c9d0d09d115&hImageSnapshot('.wp-image-127898')


    // })



    // it('image compare 2', function(){

    //     cy.visit('https://goaskalice.columbia.edu/')
    //     cy.viewport('iphone-x')
    //     cy.wait(3000)
    //     cy.get('.navbar-toggler').should('be.visible')
    //     // cy.wait('5000'   )
    //     // cy.get('[src=https://photographylife.com/wp-content/uploads/2016/06/Brown-Anole-960x640.jpg]').matchImageSnapshot('promoHeader__promoMastheadLink')
    //     // cy.get('.wp-image-127898').matchImageSnapshot('.wp-image-127898')

    // })


    it('check_Visual_percy', function(){
        
        // cy.visit('https://goaskalice.columbia.edu/')
        // cy.visit('https://hotfix-dev-lcy5sja-x7nlapda3rhfc.us-2.platformsh.site/answered-questions/does-diabetes-affect-sex')
        cy.visit('https://hotfix-dev-lcy5sja-x7nlapda3rhfc.us-2.platformsh.site/answered-questions/does-diabetes-affect-sexs')
        cy.wait(3000)
        cy.get('.h1').toMatchImageSnapshot()
        cy.percySnapshot('header screenshot', { widths: [768, 992, 1200] })

        // cy.visit('https://www.cypress.io/how-it-works/')        
        // cy.get('#rcc-confirm-button').click
        // cy.get('.coBPWl').toMatchImageSnapshot() // Original    
        // cy.get('.dYUQOe').toMatchSnapshot()
        

        cy.get('.menu-item').trigger('mouseover')
        cy.get('.popover').should('be.visible')

    })


    
})