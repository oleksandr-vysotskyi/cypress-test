export class HeaderNavigationElements {

    elements = {
      logo: () => cy.get('.logo'),
      userIcon: () => cy.get('.user-picture'),
      light: () => cy.get('button.select-button'),
      dark: () => cy.get('nb-option').contains("Dark"),
      cosmic: () => cy.get('nb-option').contains("Cosmic"),
      corporate: () => cy.get('nb-option').contains("Corporate"),
      searchIcon: () => cy.get('button.start-search'),
      mailIcon: () => cy.get('[icon="email-outline"]'),
      ringIcon: () => cy.get('[icon="bell-outline"]')
    }
  
  }