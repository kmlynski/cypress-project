/// <reference types="cypress" />

import { BasePage } from "../page-objects/base-page"
import { CartPage } from "../page-objects/cart-page"
import { LandingPage } from "../page-objects/landing-page"
import { MainPage } from "../page-objects/main-page"

describe('anonymousLandingPage', () => {
    const landingPage = new LandingPage()
    const basePage = new BasePage()
    const mainPage = new MainPage()
    const cartPage = new CartPage()

    beforeEach(() =>{
        basePage.navigateToLandingPage()
        landingPage.enterUsername('standard_user')
        landingPage.enterPassword('secret_sauce')
        landingPage.clickLogInButton()
    })

    it('should be able to enter cart', () => {
        mainPage.clickCartButton()
        
        cartPage.assertThatTitleIsCorrect()
    })
})