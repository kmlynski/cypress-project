/// <reference types="cypress" />

export class MainPage {

    clickCartButton(){
        cy.get('.svg-inline--fa').click()
    }
}