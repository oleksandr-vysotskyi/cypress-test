/// <reference types="cypress"/>
 
describe('Dropdown check', () => {
  before(()=> {
   cy.visit('pages/forms/layouts/accordion')
   })
   const colors = {
    "Light": "rgb(255, 255, 255)",
    "Dark": "rgb(34, 43, 69)",
    "Cosmic": "rgb(50, 50, 89)",
    "Corporate": "rgb(255, 255, 255)"
   };

   it('Color and name check', ()=> {
      cy.get('button.select-button').click()
      cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Light);
      cy.get('button.select-button').should('have.text', ' Light')
      cy.get('nb-option').contains("Dark").click()
      cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Dark);
      cy.get('button.select-button').should('have.text', ' Dark')
      cy.get('button.select-button').click()
      cy.get('nb-option').contains("Cosmic").click()
      cy.get('nb-layout-header nav').should('have.css', 'background-color',colors.Cosmic);
      cy.get('button.select-button').should('have.text', ' Cosmic')
      cy.get('button.select-button').click()
      cy.get('nb-option').contains("Corporate").click()
      cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Corporate);
      cy.get('button.select-button').should('have.text', ' Corporate')
   });
})