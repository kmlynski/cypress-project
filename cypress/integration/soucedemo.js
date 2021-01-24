/// <reference types="cypress" />

it('should navigate to the landing page', () => {
    cy.visit('https://www.saucedemo.com/')
})

it('should be able to log in as standard_user', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.product_label').should('be.visible').should('have.css','position','absolute')

})