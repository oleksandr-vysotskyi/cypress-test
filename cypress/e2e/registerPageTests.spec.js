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
        registerPage.elements.fullNamelValidationMessage().should('have.text', ' Full name should contains from 4 to 50 characters ')
        registerPage.elements.emailValidationMessage().should('have.text', ' Email should be the real one! ')
        registerPage.elements.passwordValidationMessage().should('have.text', ' Password should contain from 4 to 50 characters ')
        registerPage.elements.repeatPasswordValidationMessage().should('have.text', ' Password confirmation is required! ')
      })

    it('Successful registration check', () => { 
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
