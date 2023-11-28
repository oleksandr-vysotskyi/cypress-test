/// <reference types="cypress"/>
 
describe('Return result dialog check', () => {
    before(()=> {
     cy.visit('/pages/modal-overlays/dialog')
     })
     
     it('Enter and check name', ()=> {
        cy.get('nb-card-body.result-from-dialog>button').click()
        cy.get('input[placeholder="Name"]').type("test")
        cy.get('button[status="success"]').click()
        cy.get('nb-card-body ul li.ng-star-inserted').should('have.text', 'test')
     });
  })