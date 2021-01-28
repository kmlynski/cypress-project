/// <reference types="cypress" />

export class MainPage {

    clickCartButton(){
        cy.get('.svg-inline--fa').click()
    }

    clickSideMenuButton(){
        cy.get('.bm-burger-button > button').click()
    }
}