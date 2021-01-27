/// <reference types="cypress" />

export class CartPage {

    assertThatTitleIsCorrect(){
        cy.get('.subheader').should('contain.text','Your Cart')
    }
}