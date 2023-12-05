export class HeaderNavigationElements {

    elements = {
      logo: () => cy.get('.logo'),
      userIcon: () => cy.get('.user-picture'),
      lightButton: () => cy.get('button.select-button'),
      darkButton: () => cy.get('nb-option').contains("Dark"),
      cosmicButton: () => cy.get('nb-option').contains("Cosmic"),
      corporateButton: () => cy.get('nb-option').contains("Corporate"),
      searchIcon: () => cy.get('button.start-search'),
      mailIcon: () => cy.get('[icon="email-outline"]'),
      ringIcon: () => cy.get('[icon="bell-outline"]')
    }
  
  }