/// <reference types="cypress" />

export class BasePage {

    navigateToLandingPage(){
        cy.visit('/')
    }
}