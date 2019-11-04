/// <reference types="Cypress" />
import Chance from 'chance'
const chance = new Chance()

const testData = JSON.parse(Cypress.env('testData'))
const configData = JSON.parse(Cypress.env('configData'))
const lastTestVersion = Cypress.env('lastTestVersion')

context('Checkbox with child elements test ' + lastTestVersion , () => {
    beforeEach(function () {
    })
            
    it('loads the test form', () => {       
        
        cy.startEnv('dev') //change 'dev' to 'live' to test on live and vice versa     
    
        /** -------------- ZERO STEP -------------- */
        
        // POSTCODE PART
        cy.obfiframe().find('#postcode-init').type(testData.completePostcode)
        cy.obfiframe().find('span.obf-create-bt-button').click()

        /** -------------- FIRST STEP -------------- */
        cy.obfiframe().find('span.obf-item-title').contains(' redirectTo1 ').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('input.postcode').should('be.visible').type('SW12SW')
        cy.obfiframe().find('input.addressLineOne').type('test')
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
        cy.obfiframe().find('button.obf-btn-default').click()
    })

        /** -------------- TEST PART -------------- */

        it("clicks on check1(parent) and through all child elements", () => {  
            cy.obfiframe().find('span.obf-checkbox-title').contains('check1(parent) ').should('be.visible').click()
            cy.obfiframe().find('span').contains(' check1(parent) ')
            cy.obfiframe().find('span.obf-item-title').contains('radio1(child) ').should('be.visible').click()
            cy.obfiframe().find('span').contains(' radio1(child) ')
            cy.obfiframe().find('span.obf-item-title').contains('radio2(child) ').should('be.visible').click()
            cy.obfiframe().find('span').contains(' radio2(child) ')
            cy.obfiframe().find('span.obf-item-title').contains(' radio3(child) ').should('be.visible').click()
            cy.obfiframe().find('span').contains(' radio3(child) ')
        })
    
        it("clicks on check2(parent) and through all child elements", () => {  
            cy.obfiframe().find('span.obf-checkbox-title').contains('check2(parent) ').should('be.visible').click()
            cy.obfiframe().find('span').contains(' check2(parent) ').should('be.visible')
            cy.obfiframe().find('span.obf-checkbox-title').contains('check1(child) ').should('be.visible').click()
            cy.obfiframe().find('span').contains(' check1(child) ').should('be.visible')
            cy.obfiframe().find('span.obf-checkbox-title').contains('check2(child) ').should('be.visible').click()
            cy.obfiframe().find('span').contains(' check2(child) ').should('be.visible')
            cy.obfiframe().find('span.obf-checkbox-title').contains('check3(child) ').should('be.visible').click()
            cy.obfiframe().find('span').contains(' check3(child) ').should('be.visible')
            cy.obfiframe().find('span.obf-checkbox-title').contains('check1(child) ').should('be.visible').click()
            cy.obfiframe().find('span').contains(' check1(child) ').should('not.visible')
            cy.obfiframe().find('span.obf-checkbox-title').contains('check2(child) ').should('be.visible').click()
            cy.obfiframe().find('span').contains(' check2(child) ').should('not.visible')
            cy.obfiframe().find('span.obf-checkbox-title').contains('check3(child) ').should('be.visible').click()
            cy.obfiframe().find('span').contains(' check3(child) ').should('not.visible')
        })
    
        it("clicks on check3(parent) and through all child elements", () => {  
            cy.obfiframe().find('span.obf-checkbox-title').contains('check3(parent) ').should('be.visible').click()
            cy.obfiframe().find('span').contains(' check3(parent) ').should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity1(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '1')
            cy.obfiframe().find('span').contains('1 quantity1(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity1(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '2')
            cy.obfiframe().find('span').contains('2 quantity1(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity1(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '3')
            cy.obfiframe().find('span').contains('3 quantity1(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity1(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '4')
            cy.obfiframe().find('span').contains('4 quantity1(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity1(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '5')
            cy.obfiframe().find('span').contains('5 quantity1(child) ').scrollIntoView().should('be.visible')
        
            cy.obfiframe().find('app-stepper').contains('quantity2(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '1')
            cy.obfiframe().find('span').contains('1 quantity2(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity2(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').should('be.visible').scrollIntoView().click().siblings('span').should('have.contain', '2')
            cy.obfiframe().find('span').contains('2 quantity2(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity2(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').should('be.visible').scrollIntoView().click().siblings('span').should('have.contain', '3')
            cy.obfiframe().find('span').contains('3 quantity2(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity2(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').should('be.visible').scrollIntoView().click().siblings('span').should('have.contain', '4')
            cy.obfiframe().find('span').contains('4 quantity2(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity2(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').should('be.visible').scrollIntoView().click().siblings('span').should('have.contain', '5')
            cy.obfiframe().find('span').contains('5 quantity2(child) ').scrollIntoView().should('be.visible')

            cy.obfiframe().find('app-stepper').contains('quantity3(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '1')
            cy.obfiframe().find('span').contains('1 quantity3(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity3(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').should('be.visible').scrollIntoView().click().siblings('span').should('have.contain', '2')
            cy.obfiframe().find('span').contains('2 quantity3(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity3(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').should('be.visible').scrollIntoView().click().siblings('span').should('have.contain', '3')
            cy.obfiframe().find('span').contains('3 quantity3(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity3(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').should('be.visible').scrollIntoView().click().siblings('span').should('have.contain', '4')
            cy.obfiframe().find('span').contains('4 quantity3(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity3(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').should('be.visible').scrollIntoView().click().siblings('span').should('have.contain', '5')
            cy.obfiframe().find('span').contains('5 quantity3(child) ').scrollIntoView().should('be.visible')
    
            cy.obfiframe().find('app-stepper').contains('quantity1(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '4')
            cy.obfiframe().find('span').contains('4 quantity1(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity1(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '3')
            cy.obfiframe().find('span').contains('3 quantity1(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity1(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '2')
            cy.obfiframe().find('span').contains('2 quantity1(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity1(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '1')
            cy.obfiframe().find('span').contains('1 quantity1(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity1(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '0')

            cy.obfiframe().find('app-stepper').contains('quantity2(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '4')
            cy.obfiframe().find('span').contains('4 quantity2(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity2(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '3')
            cy.obfiframe().find('span').contains('3 quantity2(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity2(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '2')
            cy.obfiframe().find('span').contains('2 quantity2(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity2(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '1')
            cy.obfiframe().find('span').contains('1 quantity2(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity2(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '0')

            cy.obfiframe().find('app-stepper').contains('quantity3(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '4')
            cy.obfiframe().find('span').contains('4 quantity3(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity3(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '3')
            cy.obfiframe().find('span').contains('3 quantity3(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity3(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '2')
            cy.obfiframe().find('span').contains('2 quantity3(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity3(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '1')
            cy.obfiframe().find('span').contains('1 quantity3(child) ').scrollIntoView().should('be.visible')
            cy.obfiframe().find('app-stepper').contains('quantity3(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').scrollIntoView().should('be.visible').click().siblings('span').should('have.contain', '0')
        })

        it("clicks on check4(parent) and through all child elements", () => {
            cy.obfiframe().find('span.obf-checkbox-title').contains('check4(parent) ').should('be.visible').click()
            cy.obfiframe().find('span').contains(' check4(parent) ')
            cy.obfiframe().find('textarea').should('be.visible').type('test') 
            cy.obfiframe().find('div:nth-child(2) > app-choice-view > app-textfield > div > div > div > div > input').should('be.visible').type('test2')
            cy.obfiframe().find('label').contains('textFieldDatePicker').should('be.visible').click({force:true})
            cy.obfiframe().find('div.ngb-dp-arrow.right > button').should('be.visible').click()
            cy.obfiframe().find('div.btn-light.ng-star-inserted').contains('15').click({force:true})
        })
})
