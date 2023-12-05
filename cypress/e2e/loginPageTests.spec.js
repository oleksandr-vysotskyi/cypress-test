/// <reference types="cypress"/>

import { LoginPage } from '../pages/LoginAuth.page.js'
import { HeaderNavigationElements } from '../pages/HeaderNavigationElements.page.js'

describe('Login form test', () => {
    const loginPage = new LoginPage()
    const headerNavigationElements = new HeaderNavigationElements()

    it('inputs validation check', () => { 
        loginPage.open()
        loginPage.elements.emailInput().type('testgmail.comm')
        loginPage.elements.passwordInput().click().type('12').blur()
        loginPage.elements.emailValidationMessage().should('have.text', ' Email should be the real one! ')
        loginPage.elements.passwordValidationMessage().should('have.text', ' Password should contain from 4 to 50 characters ')
      })

    it('Successfull login check', () => { 
        loginPage.open()
        loginPage.elements.emailInput().click().type('test@gmail.comm')
        loginPage.elements.passwordInput().click().type('123456')
        loginPage.elements.loginButton().click()
        loginPage.verifyUrlLogin()
        headerNavigationElements.elements.userIcon().should('be.visible')
      })
    })


   