/// <reference types="Cypress" />
import Chance from 'chance'
const chance = new Chance()

const testData = JSON.parse(Cypress.env('testData'))
const configData = JSON.parse(Cypress.env('configData'))
const lastTestVersion = Cypress.env('lastTestVersion')

context('Datepicker test ' + lastTestVersion , () => {
            
    it('loads the test form', () => {       
        
        cy.startEnv('dev') //change 'dev' to 'live' to test on live and vice versa     
    
        /** -------------- ZERO STEP -------------- */
        
        // POSTCODE PART
        cy.obfiframe().find('#postcode-init').type(testData.completePostcode)
        cy.obfiframe().find('span.obf-create-bt-button').click()

        /** -------------- FIRST STEP -------------- */
        cy.obfiframe().find('span.obf-item-title').contains(' redirectTo1 ').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('input.postcode').type('SW12SW')
        cy.obfiframe().find('input.addressLineOne').type('test')
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
    })

        /** -------------- TEST PART -------------- */

    it("clicks on the datepicker and chooses a date from the current month", () => {  
        cy.obfiframe().find('label').contains('datePicker').should('be.visible').click({force:true})
        cy.obfiframe().find('div.btn-light.ng-star-inserted').contains('28').click({force:true})
    })

    it("clicks on the datepicker and chooses a date from the next month", () => {  
        cy.obfiframe().find('label').contains('datePicker').should('be.visible').click({force:true})
        cy.obfiframe().find('div.ngb-dp-arrow.right > button').should('be.visible').click()
        cy.obfiframe().find('div.btn-light.ng-star-inserted').contains('15').click({force:true})
    })






})