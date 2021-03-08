/// <reference types="Cypress"/>



describe('test suite for visual testing', function(){

    // it('checkHover', function(){
        
    //     // cy.visit('https://hotfix-dev-lcy5sja-x7nlapda3rhfc.us-2.platformsh.site/')
    //     cy.viewport(1280, 760)
    //     cy.visit('https://cmdlinuxdev.wpengine.com/', {auth:{username:'cmdlinuxdev', password: '72bbec92'}})
    //     cy.wait(3000)
    //     // cy.get('.small-secondary-button').toMatchImageSnapshot()
    //     // cy.percySnapshot('header screenshot', { widths: [768, 992, 1200] })
    //     // cy.viewport('')
    //     cy.get('.small-secondary-button').should('be.visible')

    //     // cy.get('.site-header').should('be.visible').should('have.css','background','rgba(35,35,50,0)')

    //     // cy.get('.replaced-svg').should('be.visible').should('have.css','','')

    //     cy.get('.vc_custom_heading').should('be.visible').should('have.css','font-size','3vw !important')

    //     // .shadow('have.css','line-height','4.25rem!important').shadow('have.css','font-family','Roboto Mono,monospace,Arial,Helvetica,sans-serif!important')

    //     // cy.get('').should('be.visible').should('have.css','','')

    //     // cy.get('').should('be.visible').should('have.css','','')

    //     // cy.get('').should('be.visible').should('have.css','','')

    //     // cy.get('').should('be.visible').should('have.css','','')

    //     // cy.get('').should('be.visible').should('have.css','','')

    //     // // cy.get('.small-secondary-button').trigger('mouseover').should('have.css','background','rgba(85,171,148,.32)')
    //     // cy.get('.popover').should('be.visible')

    // })


    it('go ask alice', function(){

        cy.viewport(1280, 760)
        cy.visit('https://hotfix-dev-lcy5sja-x7nlapda3rhfc.us-2.platformsh.site/')

        //Blue bar
        cy.get('.upper-header').should('be.visible').should('have.css','display','inline-block').should('have.css','background-color','rgb(28, 69, 133)')
        cy.get('.header').toMatchImageSnapshot()
        
        //Search functionality [Padding]
        cy.get('[type=form-submit]').should('have.css','padding','6px 30px 6px 12px')
        .should('have.css','border-right-width','0px').should('have.css','border-top-width','0px')
        .should('have.css','display','block').should('have.css','height','38px')

        cy.wait(2000)
            
        cy.get('.align-items-end').should('have.css','display','flex').should('have.css','margin-right','-15px')
        .should('have.css','margin-left','-15px')

        cy.wait(2000)
        cy.get('.header__branding .image').should('have.css','height','71px').should('have.css','width','207px')
       
        // cy.wait(2000)

        // cy.get('').should('have.css','','').should('have.css','','')
        // .should('have.css','','')

        // cy.wait(2000)

        // cy.get('').should('have.css','','')

    })
    
})