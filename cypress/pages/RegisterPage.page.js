export class RegisterPage {

    elements = {
      title: () => cy.get('#title'),
      fulleNameInput: () => cy.get('[placeholder="Full name"]'),
      emailInput: () => cy.get('[placeholder="Email address"]'),
      passwordInput: () => cy.get('[placeholder="Password"]'),
      repeatPassword: () => cy.get('[placeholder="Confirm Password"]'),
      agreeToTermsAndConditions: () => cy.get('span.custom-checkbox'),
      termsAndConditionsLink: () => cy.get('span.text strong'),
      registerButton: () => cy.get('[status="primary"]'),
      fullNamelValidationMessage: () => cy.get('p.status-danger').eq(0),
      emailValidationMessage: () => cy.get('p.status-danger').eq(1),
      passwordValidationMessage: () => cy.get('p.status-danger').eq(2),
      repeatPasswordValidationMessage: () => cy.get('p.status-danger').eq(3),
      gitHubIcon: () => cy.get('.github'),
      facebookIcon: () => cy.get('.facebook'),
      twitterIcon: () => cy.get('.twitter'),
      logInLink: () => cy.get('section .text-link')
    }
  
    open() {
      return cy.visit('/auth/register')
    }

    verifyUrlRegister() {
      return cy.url().should('include', '/pages')
    }
  }
  