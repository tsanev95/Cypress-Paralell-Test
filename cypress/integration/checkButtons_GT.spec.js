/// <reference types="Cypress" />
import Chance from 'chance'
const chance = new Chance()

const testData = JSON.parse(Cypress.env('testData'))
const configData = JSON.parse(Cypress.env('configData'))
const lastTestVersion = Cypress.env('lastTestVersion')

context('Checkbox buttons test ' + lastTestVersion , () => {
    beforeEach(function () {
    })
        
    it('loads the test form', () => {       
    
        cy.startEnv('dev') //change 'dev' to 'live' to test on live and vice versa     

        /** -------------- ZERO STEP -------------- */

        // POSTCODE PART
        cy.obfiframe().find('#postcode-init').type(testData.completePostcode)
        cy.obfiframe().find('span.obf-create-bt-button').click()
        cy.obfiframe().find('section.obf-first-step-section')

        /** -------------- FIRST STEP -------------- */
        cy.obfiframe().find('span.obf-item-title').contains(' redirectTo1 ').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('input.postcode').type('SW12SW')
        cy.obfiframe().find('input.addressLineOne').type('test')
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('div.obf-choice-title').contains('checkButtonsStandAlone')
    })
        
    /** -------------- TEST PART -------------- */
    
    it('clicks through all checkbox buttons', () => {       
        cy.obfiframe().find('button.obf-btn-default').should('be.visible')
        cy.obfiframe().find('span.obf-checkbox-title').contains('check1').should('be.visible').click()
        cy.obfiframe().find('span').contains('check1')
        cy.obfiframe().find('button.obf-btn-default').should('be.visible')
        cy.obfiframe().find('span.obf-checkbox-title').contains('check2').should('be.visible').click()
        cy.obfiframe().find('span').contains('check2')
        cy.obfiframe().find('button.obf-btn-default').should('be.visible')
        cy.obfiframe().find('span.obf-checkbox-title').contains('check3').should('be.visible').click()
        cy.obfiframe().find('span').contains('check3')
        cy.obfiframe().find('button.obf-btn-default').should('be.visible')
    })

    it('unchecks all checkbox buttons', () => {   
        cy.obfiframe().find('button.obf-btn-default').should('be.visible')
        cy.obfiframe().find('span.obf-checkbox-title').contains('check1').should('be.visible').click()
        cy.obfiframe().find('span').contains(' check1 ').should('not.visible')
        cy.obfiframe().find('span').contains('check2').should('be.visible')
        cy.obfiframe().find('button.obf-btn-default').should('be.visible')
        cy.obfiframe().find('span.obf-checkbox-title').contains('check2').should('be.visible').click()
        cy.obfiframe().find('span').contains(' check2 ').should('not.visible')
        cy.obfiframe().find('span').contains('check3').should('be.visible')
        cy.obfiframe().find('button.obf-btn-default').should('be.visible')
        cy.obfiframe().find('span.obf-checkbox-title').contains('check3').should('be.visible').click()
        cy.obfiframe().find('span').contains(' check3 ').should('not.visible')
        cy.obfiframe().find('button.obf-btn-default').should('be.visible')
    })

    it('checks if the selections is saved after <Back / Next>', () => {   
        cy.obfiframe().find('span.obf-checkbox-title').contains('check1').should('be.visible').click()
        cy.obfiframe().find('span').contains('check1').should('be.visible')
        cy.obfiframe().find('app-button.obf-back-button-component').should('be.visible').click()
        cy.obfiframe().find('button.obf-btn-default').should('be.visible').click()
        cy.obfiframe().find('span.obf-box.obf-icon-tick-1').should('be.visible')
        cy.obfiframe().find('button.obf-btn-default').should('be.visible').click()
        cy.obfiframe().find('app-button.obf-back-button-component').should('be.visible').click()
        cy.obfiframe().find('span.obf-box.obf-icon-tick-1').should('be.visible')
    })
})