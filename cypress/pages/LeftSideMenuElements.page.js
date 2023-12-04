export class BurgerMenuElements {

    elements = {
      BurgerMenuIcon: () => cy.get('div>a>nb-icon'),
      Layout: () => cy.get('[title="Layout"]'),
      stepper: () => cy.get('[href="/pages/layout/stepper"]'),
      accordion: () => cy.get('[href="/pages/layout/accordion"]'),
      Forms: () => cy.get('[title="Forms"]'),
      formsLayout: () => cy.get('[href="/pages/forms/layouts"]'),
      datePicker: () => cy.get('[href="/pages/forms/datepicker"]'),
      ModalAndOverlays: () => cy.get('[title="Modal & Overlays"]'),
      dialog: () => cy.get('[href="/pages/modal-overlays/dialog"]'),
      window: () => cy.get('[href="/pages/modal-overlays/window"]'),
      popover: () => cy.get('[href="/pages/modal-overlays/popover"]'),
      toastr: () => cy.get('[href="/pages/modal-overlays/toastr"]'),
      tooltip: () => cy.get('[href="/pages/modal-overlays/tooltip"]'),
      ExtraComponents: () => cy.get('[title="Extra Components"]'),
      calendar: () => cy.get('[href="/pages/extra-components/calendar"]'),
      TablesAndData: () => cy.get('[title="Tables & Data"]'),
      smartTable: () => cy.get('[href="/pages/tables/smart-table"]'),
      treeGrid: () => cy.get('[href="/pages/tables/tree-grid"]'),
      Auth: () => cy.get('[title="Auth"]'),
      login: () => cy.get('[href="/auth/login"]'),
      register: () => cy.get('[href="/auth/register"]'),
      requestPassword: () => cy.get('[href="/auth/request-password"]'),
      resetPassword: () => cy.get('[href="/auth/reset-password"]')
    }
  
    open() {
      return cy.visit('/pages')
    }
  }