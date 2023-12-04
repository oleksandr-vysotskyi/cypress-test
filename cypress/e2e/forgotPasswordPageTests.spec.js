/// <reference types="cypress"/>

import { ForgotPasswordPage } from '../pages/ForgotPassword.page.js'


describe('Forgot password page check', () => {
    const forgotPasswordPage = new ForgotPasswordPage()

    it('email input validation check', () => { 
        forgotPasswordPage.open()
        forgotPasswordPage.elements.emailInput().type('testmail.com').blur()
        forgotPasswordPage.elements.emailValidationMessage().should('be.visible')
      })

    it('"Request password" button check', () => { 
        forgotPasswordPage.open()
        forgotPasswordPage.elements.emailInput().type('test@mail.com')
        forgotPasswordPage.elements.requestPasswordButton().click()
        forgotPasswordPage.verifyUrlRequestPassword()
      })

      it('"Register" link check', () => { 
        forgotPasswordPage.open()
        forgotPasswordPage.elements.registerLink().click()
        forgotPasswordPage.verifyUrlRegister()
      })

      it('"Back to Log In" link check', () => { 
        forgotPasswordPage.open()
        forgotPasswordPage.elements.backToLogInLink().click()
        forgotPasswordPage.verifyUrlLogin()
      })
    })