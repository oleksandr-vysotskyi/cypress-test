/// <reference types="cypress"/>
 
describe('Product Details section check', () => {
    before(()=> {
     cy.visit('/pages/layout/accordion')
     })
     
     it('text check', ()=> {
        cy.get('nb-accordion-item-header').contains("Product Details")
        cy.get('nb-accordion-item-body').should('be.not.visible')
        cy.get('nb-card-body .appearance-filled').click()
        cy.get('nb-accordion-item-body').should('be.visible')
     });
  })