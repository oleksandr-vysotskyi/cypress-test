/// <reference types="cypress"/>
 
describe('Product Details section check', () => {
    before(()=> {
     cy.visit('/pages/layout/accordion')
     })
     
     it('text check', ()=> {
        cy.get('nb-accordion-item-header').eq(0).should('have.text', ' Product Details ')
        cy.get('div.item-body').eq(0).should('be.not.visible')
        cy.get('nb-card-body .appearance-filled').click()
        cy.get('div.item-body').eq(0).should('be.visible')
     });
  })