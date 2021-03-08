describe('Test cases to enter data',function(){

// it('testcase1',function(){
// cy.visit('https://cmd.com/')
// cy.title().should('eq','Secure Production Linux | Cmd')
// })

it('Search functionality', function(){

cy.visit('http://demo.nopcommerce.com/');

    cy.viewport('macbook-15')
    cy.screenshot()
    cy.wait(700)

// cy.getTitle();
// ID uses hash
// Dot uses Class

    cy.get('#small-searchterms').type("Apple MacBook Pro 13-inch") // Search box
    cy.get('.search-box-button').click() // Clicking on the Search button
    cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()

    cy.get("#product_enteredQuantity_4[class='qty-input']").clear()  // Clearing old value
    cy.get("#product_enteredQuantity_4[class='qty-input']").type('4') // Providing new value

    cy.get('#add-to-cart-button-4').click() // Clicking on Add to cart after adding the quantity

    // cy.wait(4000)

    cy.get('.bar-notification-container').click() // Clicking the cross button

    // cy.wait(8000)  

    // cy.get('#topcartlink > a > span.cart-label').click()
    // cy.get('#bar-notification > div > p > a').click()

    // cy.wait(4000)

    cy.get('.product-unit-price').contains('$1,800.00')

})

})