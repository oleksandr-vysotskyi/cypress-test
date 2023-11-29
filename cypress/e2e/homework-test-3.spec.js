/// <reference types="cypress"/>
 
describe('Popover check', () => {
    before(()=> {
     cy.visit('/pages/modal-overlays/popover')
     })
     
     it('Tooltip check', ()=> {
        cy.get('button[nbpopoverplacement="right"]').trigger('mouseenter')
        cy.get('.primitive-overlay').should('have.text', 'Hello, how are you today?')
     });
  })