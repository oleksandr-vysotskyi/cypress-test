/// <reference types="cypress"/>

import { RegisterPage } from '../pages/RegisterPage.page.js'
import { HeaderNavigationElements } from '../pages/HeaderNavigationElements.page.js'

describe('Login form test', () => {
    const registerPage = new RegisterPage()
    const headerNavigationElements = new HeaderNavigationElements()

    it('inputs validation check', () => { 
        registerPage.open()
        registerPage.elements.fulleNameInput().click().type('tes')
        registerPage.elements.emailInput().click().type('testmail.com')
        registerPage.elements.passwordInput().click().type('111')
        registerPage.elements.repeatPassword().click().blur()
        registerPage.elements.fullNamelValidationMessage().should('be.visible')
        registerPage.elements.emailValidationMessage().should('be.visible')
        registerPage.elements.passwordValidationMessage().should('be.visible')
        registerPage.elements.repeatPasswordValidationMessage().should('be.visible')
      })

    it.only('Successful registration check', () => { 
        registerPage.open()
        registerPage.elements.fulleNameInput().click().type('Test test')
        registerPage.elements.emailInput().click().type('test@mail.com')
        registerPage.elements.passwordInput().click().type('11111')
        registerPage.elements.repeatPassword().click().type('11111')
        registerPage.elements.agreeToTermsAndConditions().click()
        registerPage.elements.registerButton().click()
        registerPage.verifyUrlRegister()
        headerNavigationElements.elements.userIcon().should('be.visible')
      })
    })
