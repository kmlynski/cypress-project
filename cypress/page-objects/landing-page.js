/// <reference types="cypress" />

export class LandingPage {

    enterUsername(username){
        cy.get('[data-test=username]').type(username)
    }

    enterPassword(password){
        cy.get('[data-test=password]').type(password)
    }

    clickLogInButton(){
        cy.get('#login-button').click()
    }
    
    assertThatUserIsOnLandingPage(){
        cy.get('#login-button').should('be.visible')
    }
}