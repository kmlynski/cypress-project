/// <reference types="cypress" />

import { BasePage } from "../page-objects/base-page"
import { LandingPage } from "../page-objects/landing-page"

describe('anonymousLandingPage', () => {
    const basePage = new BasePage()
    const landingPage = new LandingPage()
    
    beforeEach(() =>{
        basePage.navigateToLandingPage()
    })
    
    it('should be able to log in as standard_user', () => {
        landingPage.enterUsername('standard_user')
        landingPage.enterPassword('secret_sauce')
        landingPage.clickLogInButton()
    
        cy.get('.product_label')
        .should('be.visible').should('have.css','position','absolute')
    })
    
    it('should display error on incorrect credentials', () => {
        landingPage.enterUsername('incorrect')
        landingPage.enterPassword('credentials')
        landingPage.clickLogInButton()

    
        cy.get('[data-test=error]')
        .should('contain.text','Username and password do not match any user')
    })
    
    it('locked_out_user should not be able to log in', () => {
        landingPage.enterUsername('locked_out_user')
        landingPage.enterPassword('secret_sauce')
        landingPage.clickLogInButton()

    
        cy.get('[data-test=error]')
        .should('contain.text','Sorry, this user has been locked out')
    })
    
    it('should not be able to log in with empty password', () => {
    
        landingPage.enterUsername('locked_out_user')
        landingPage.clickLogInButton()
        
    
        cy.get('[data-test=error]')
        .should('contain.text','Password is required')
    })
    it('should not be able to log in with empty username', () => {
    
        landingPage.enterPassword('secret_sauce')
        landingPage.clickLogInButton()
    
        cy.get('[data-test=error]')
        .should('contain.text','Username is required')
    })
})
