export class ForgotPasswordPage {

    elements = {
      backArrow: () => cy.get('[aria-label="Back"]'),  
      title: () => cy.get('#title'),
      emailInput: () => cy.get('[placeholder="Email address"]'),
      emailValidationMessage: () => cy.get('p.status-danger'),
      requestPasswordButton: () => cy.get('[status="primary"]'),
      registerLink: () => cy.get('.text-link').eq(1),
      backToLogInLink: () => cy.get('.text-link').eq(0)
    }
  
  open() {
    return cy.visit('/auth/request-password')
  }

  verifyUrlRequestPassword() {
    return cy.url().should('include', '/pages')
  }

  verifyUrlLogin() {
    return cy.url().should('include', '/auth/login')
  }

  verifyUrlRegister() {
    return cy.url().should('include', '/auth/register')
  }
}
  