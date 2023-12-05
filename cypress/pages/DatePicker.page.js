export class DatePickerPage {

    elements = {
      formPickerInput: () => cy.get('[placeholder="Form Picker"]'),  
      todayDate: () => cy.get('nb-calendar .today')
    }
  
  open() {
    return cy.visit('/pages/forms/datepicker')
  }
}