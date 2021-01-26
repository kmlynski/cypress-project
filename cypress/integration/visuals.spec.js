/// <reference types="cypress" />

import { BasePage } from "../page-objects/base-page"
import { LandingPage } from "../page-objects/landing-page"

describe('visual validation', () =>{
    const basePage = new BasePage()
    const landingPage = new LandingPage()
    before(() =>{
        basePage.navigateToLandingPage()
    })
    beforeEach(() => {
        cy.eyesOpen()
    })
    afterEach(() => {
        cy.eyesClose()
    })


    it('products should be visible', () => {
        cy.eyesCheckWindow('landing page')
        landingPage.enterUsername('standard_user')
        landingPage.enterPassword('secret_sauce')
        landingPage.clickLogInButton()
        cy.eyesCheckWindow('product page')
    })

})