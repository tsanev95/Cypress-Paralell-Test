/// <reference types="Cypress" />
import Chance from 'chance';
const chance = new Chance();

const testData = JSON.parse(Cypress.env('testData'));
const configData = JSON.parse(Cypress.env('configData'));
const lastTestVersion = Cypress.env('lastTestVersion');

context('Hours calculation testings' + lastTestVersion , () => {
                   
    it('Hours calculation expect 8.5', () => {

        cy.startEnv('dev') //change 'dev' to 'live' to test on live and vice versa     
        
        /** -------------- ZERO STEP -------------- */
        
        // POSTCODE PART
        cy.obfiframe().find('#postcode-init').type(testData.completePostcode)
        cy.obfiframe().find('span.obf-create-bt-button').click()
        
        /** -------------- FIRST STEP --------- */
        
        cy.obfiframe().find('button.obf-btn-default').click()  
        
        // Distance
        cy.obfiframe().find('input.postcode').clear().type('SW12SW')
        cy.obfiframe().find('input.addressLineOne').type('test')
        cy.obfiframe().find('button.obf-btn-default').click()  
       
        // RadioButtonsStandAlone
        cy.obfiframe().find('span.obf-item-title').contains(' radio3 ').click()
        cy.obfiframe().find('span.obf-item-title').contains(' radio2 ').click()
        cy.obfiframe().find('span.obf-item-title').contains(' radio1 ').click()
        cy.obfiframe().find('span.obf-item-title').contains(' radio3 ').click()
        cy.obfiframe().find('button.obf-btn-default').click()  

        // CheckButtonsStandAlone
        cy.obfiframe().find('span.obf-checkbox-title').contains('check1').click()
        cy.obfiframe().find('span.obf-checkbox-title').contains('check2').click()
        cy.obfiframe().find('span.obf-checkbox-title').contains('check3').click()
        cy.obfiframe().find('span.obf-checkbox-title').contains('check1').click()
        cy.obfiframe().find('span.obf-checkbox-title').contains('check2').click()        
        cy.obfiframe().find('button.obf-btn-default').click()  

        // StepperButtonsStandAlone
        cy.obfiframe().find('app-stepper').contains('stepper3').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').click().click().click().click().click().siblings('span').should('have.contain', '5')
        cy.obfiframe().find('app-stepper').contains('stepper2').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').click().click().siblings('span').should('have.contain', '2')
        cy.obfiframe().find('app-stepper').contains('stepper2').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').click().click().siblings('span').should('have.contain', '0')
        cy.obfiframe().find('button.obf-btn-default').click()  

        // Mltiselect
        cy.obfiframe().find('button.obf-btn-default').click()  

        // Dropdown
        cy.obfiframe().find('button.obf-btn-default').click()  

        // File upload
        cy.obfiframe().find('button.obf-btn-default').click()  

        // Date picker
        cy.obfiframe().find('button.obf-btn-default').click()  

        // RadioButtons + children
        cy.obfiframe().find('span.obf-item-title').contains(' radio3(parent) ').click()
        cy.obfiframe().find('app-stepper').contains('stepper2(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').click().click().click().siblings('span').should('have.contain', '3')
        cy.obfiframe().find('app-stepper').contains('stepper3(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').click().click().siblings('span').should('have.contain', '2')
        cy.obfiframe().find('button.obf-btn-default').click()  

        // CheckButtons + Children
        cy.obfiframe().find('span.obf-checkbox-title').contains('check3(parent) ').click()
        cy.obfiframe().find('app-stepper').contains('quantity2(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').click().click().click().siblings('span').should('have.contain', '3')
        cy.obfiframe().find('app-stepper').contains('quantity3(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').click().click().siblings('span').should('have.contain', '2')
        cy.obfiframe().find('button.obf-btn-default').click()  

        // Text field
        cy.obfiframe().find('button.obf-btn-default').click()  

        // Total Hours
        cy.obfiframe().find('app-hours').contains('totalHours').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').siblings('span').should((el) => {
            expect(el.first()).to.contain('8.5');
        })
    })

    it('Hours calculation expect 11', () => {

        cy.startEnv('dev') //change 'dev' to 'live' to test on live and vice versa     
        
        /** -------------- ZERO STEP -------------- */
               
        // POSTCODE PART
        cy.obfiframe().find('#postcode-init').type(testData.completePostcode)
        cy.obfiframe().find('span.obf-create-bt-button').click()
            
        /** -------------- FIRST STEP --------- */
            
        cy.obfiframe().find('button.obf-btn-default').click()  
            
        // Distance
        cy.obfiframe().find('input.postcode').clear().type('SW12SW')
        cy.obfiframe().find('input.addressLineOne').type('test')
        cy.obfiframe().find('button.obf-btn-default').click()  
           
        // RadioButtonsStandAlone
        cy.obfiframe().find('span.obf-item-title').contains(' radio1 ').click()
        cy.obfiframe().find('span.obf-item-title').contains(' radio2 ').click()
        cy.obfiframe().find('span.obf-item-title').contains(' radio3 ').click()
        cy.obfiframe().find('span.obf-item-title').contains(' radio1 ').click()
        cy.obfiframe().find('button.obf-btn-default').click()  
        
        // CheckButtonsStandAlone
        cy.obfiframe().find('span.obf-checkbox-title').contains('check3').click()
        cy.obfiframe().find('span.obf-checkbox-title').contains('check2').click()
        cy.obfiframe().find('span.obf-checkbox-title').contains('check1').click()
        cy.obfiframe().find('span.obf-checkbox-title').contains('check2').click()
        cy.obfiframe().find('span.obf-checkbox-title').contains('check3').click()        
        cy.obfiframe().find('button.obf-btn-default').click()
       
        // StepperButtonsStandAlone
        cy.obfiframe().find('app-stepper').contains('stepper1').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').click().click().click().click().click().siblings('span').should('have.contain', '5')
        cy.obfiframe().find('app-stepper').contains('stepper2').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').click().click().click().click().click().siblings('span').should('have.contain', '5')
        cy.obfiframe().find('app-stepper').contains('stepper3').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').click().click().siblings('span').should('have.contain', '2')
        cy.obfiframe().find('app-stepper').contains('stepper3').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-minus').click().click().siblings('span').should('have.contain', '0')
        cy.obfiframe().find('button.obf-btn-default').click()  

        // Mltiselect
        cy.obfiframe().find('button.obf-btn-default').click()  

        // Dropdown
        cy.obfiframe().find('button.obf-btn-default').click()  

        // File upload
        cy.obfiframe().find('button.obf-btn-default').click()  

        // Date picker
        cy.obfiframe().find('button.obf-btn-default').click()  

        // RadioButtons + children
        cy.obfiframe().find('span.obf-item-title').contains(' radio3(parent) ').click()
        cy.obfiframe().find('app-stepper').contains('stepper1(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').click().click().click().click().click().siblings('span').should('have.contain', '5')
        cy.obfiframe().find('button.obf-btn-default').click()  

        // CheckButtons + Children
        cy.obfiframe().find('span.obf-checkbox-title').contains('check3(parent) ').click()
        cy.obfiframe().find('app-stepper').contains('quantity1(child) ').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').click().click().click().click().click().siblings('span').should('have.contain', '5')
        cy.obfiframe().find('button.obf-btn-default').click()  

        // Text field
        cy.obfiframe().find('button.obf-btn-default').click()  

        // Total Hours
        cy.obfiframe().find('app-hours').contains('totalHours').siblings('.obf-actions-box').find('.obf-icon-wrap.obf-icon-plus').siblings('span').should((el) => {
            expect(el.first()).to.contain('11');
        })
    })
})

