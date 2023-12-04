export class LoginPage {

    elements = {
      title: () => cy.get('#title'),
      emailInput: () => cy.get('[placeholder="Email address"]'),
      passwordInput: () => cy.get('[placeholder="Password"]'),
      forgotPassword: () => cy.get('span.label-with-link>a'),
      rememberMeCheckbox: () => cy.get('label.label:last-child'),
      loginButton: () => cy.get('[status="primary"]'),
      gitHubIcon: () => cy.get('.github'),
      facebookIcon: () => cy.get('.facebook'),
      twitterIcon: () => cy.get('.twitter'),
      registerButton: () => cy.get('section>a.text-link'),
      emailValidationMessage: () => cy.get('p.status-danger').eq(0),
      passwordValidationMessage: () => cy.get('p.status-danger').eq(1)
    }
  
  open() {
    return cy.visit('/auth/login')
  }

  verifyUrlLogin() {
    return cy.url().should('include', '/pages')
  }
}