/// <reference types="cypress"/>

import moment from "moment"
import { DatePickerPage } from '../pages/DatePicker.page.js'


describe('Date picker check', () => {
    const datePickerPage = new DatePickerPage()
    const dateToday = moment().format("MMM D, YYYY")

    it('today values check', () => { 
        datePickerPage.open()
        datePickerPage.elements.formPickerInput().click()
        datePickerPage.elements.todayDate().click()
        datePickerPage.elements.formPickerInput().should('have.value', dateToday)
      })
    })