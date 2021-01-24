/// <reference types="cypress" />

it('should navigate to the landing page', () => {
    cy.visit('https://www.saucedemo.com/')
})

it('should be able to log in as standard_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.product_label')
    .should('be.visible').should('have.css','position','absolute')
})

it('should display error on incorrect credentials', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test=username]').type('incorrect')
    cy.get('[data-test=password]').type('credentials')
    cy.get('#login-button').click()

    cy.get('[data-test=error]')
    .should('contain.text','Username and password do not match any user')
})

it('locked_out_user should not be able to log in', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test=username]').type('locked_out_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('[data-test=error]')
    .should('contain.text','Sorry, this user has been locked out')
})

it('should not be able to log in with empty password', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test=username]').type('locked_out_user')
    cy.get('#login-button').click()

    cy.get('[data-test=error]')
    .should('contain.text','Password is required')
})
it('should not be able to log in with empty username', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('[data-test=error]')
    .should('contain.text','Username is required')
})