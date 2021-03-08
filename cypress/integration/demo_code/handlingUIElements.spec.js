/// <reference types="Cypress"/>

describe('Handling UI elements', function(){ 

    it('Checking radio and dropdown', function(){

        // cy.visit('https://www.techlistic.com/p/selenium-practice-form.html')

        // cy.viewport('iphone-5') // To view on different viewports

        cy.visit('http://demo.guru99.com/test/newtours/') // Visit URL
        
        cy.url().should('include','newtours') // url() will return the current url of the page and should() will check if the url contains that word

        /* The code below is checking if the element is visible 
        and if it is enabled, then after that we are typing the Name*/
        
        //Entering Username and Password: 
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type('JOHNNY username')
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type('JOHNNY password')
        
        cy.get('input[value=Submit][name=submit]').click()

        cy.screenshot()
        // cy.scrollIntoView()  

        var titlePage= cy.title()

        cy.title().should('eq','Welcome: Mercury Tours')

        //Radio buttons
        cy.get(':nth-child(2) > [width="80"] > a').click()

        cy.get('[value=roundtrip]').should('be.visible').should('be.checked') // Visibility checked
        cy.get('[value=oneway]').should('be.visible').should('not.be.checked').click() // Visibility checked for the next radio button
        
        cy.screenshot()

        cy.get('[name=findFlights]').click()

    })

    it('Checking Checkbox and Dropdown', function(){

        //code

        // cy.visit('https://demoqa.com/automation-practice-form')
        
        //To select the checkbox there is a direct method of check()
        // cy.get('#hobbies-checkbox-1').check()
          
        cy.visit('http://www.demo.guru99.com/test/radio.html')

        // Getting the data         //Checking the values   //Also comparing the value within 
        cy.get('#vfb-6-0').check().should('be.checked').and('have.value','checkbox1')
        
        cy.get('#vfb-6-1').check().should('be.checked').and('have.value','checkbox2')
        cy.get('#vfb-6-2').check().should('be.checked').and('have.value','checkbox3')
        cy.get('[type=checkbox]').uncheck(['checkbox1','checkbox2','checkbox3'])
            
        //To select all checkboxes at once...........................
        cy.get('[type=checkbox]').check(['checkbox1','checkbox2','checkbox3'])
    
    })

    it('Checking dropdown', function(){


   // Handling Dropdowns
        
   cy.visit('https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html')
   
   // The value we need to select, we need to provide that value to the select function
   cy.get('#select-demo').select('Tuesday').should('have.value','Tuesday')

    })

    it('searchDropdownSelect', function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        // cy.get('.row').click()
        cy.get('.select2-selection--single').click()
        cy.get('.select2-search__field').type('Australia')
        cy.get('.select2-search__field').type('{enter}')
        
    })

    it('Multi select', function(){
        cy.get('#msdd').click()
        cy.wait(3000)
        cy.get('.ui-corner-all').contains('Bulgarian').click()
        cy.get('.ui-corner-all').contains('Lithuanian').click()

    })

   
})