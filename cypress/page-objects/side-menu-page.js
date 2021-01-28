/// <reference types="cypress" />

export class SideMenuPage {

    clickLogOutButton(){
        cy.get('#logout_sidebar_link').click()
    }
}