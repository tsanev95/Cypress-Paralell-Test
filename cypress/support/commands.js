import { RangeObservable } from "rxjs/observable/RangeObservable";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("completeSearch", () => {
    const search = cy.get('#search-field-input').should('be.visible');
    search.click();
    search.type('Ironing');
    cy.contains('.item-title', 'Ironing').should('be.visible').click();
})

Cypress.Commands.add("completePostcode", () => {
    cy.get('input#postcode-init').type('sw12sw');
    cy.contains('span.create-bt-button', 'Continue').click();
    // cy.contains('.item-title', 'Ironing').should('be.visible').click();
})

Cypress.Commands.add('iframe', { prevSubject: 'element' }, iframe => {
    return new Cypress.Promise(resolve => {
        resolve(iframe.contents().find('body'));
    });
});

Cypress.Commands.add("getIframe", (selector) => {
    return new Cypress.Promise(resolve=>{
        resolve(cy.get(selector).contents().find('body'));
    });
});

Cypress.Commands.add('startDev', () => {    
        cy.visit('https://obf-v2-test.1dxr.com/')
        cy.get('body > div.row > div > button').contains('SETTINGS').click()//Clicks SETTINGS button
        cy.get('[name="profileSelector"]').select('cb9r0u3IsHB9z2ZzIDmXjMR96ocrRneMrV4Q5sqZHXncIoePtvizZjI6Nwn01Cwk')//Clicks on Profile and selects FS Web Testing
        cy.get('#obf-settings-save').click()//Clicks on SAVE
        cy.get('.open-cta-buttons').click()
        cy.get('.icon-book').click()
        cy.obfiframe().find('input#search-field-input.input').click().type('TEST FORM{enter}')
    })

Cypress.Commands.add('startLive', () => {    
        cy.visit('https://obf-v2-test.1dxr.com/')
        cy.get('body > div.row > div > button').contains('SETTINGS').click()//Clicks SETTINGS button
        cy.get('[name="profileSelector"]').select('4rd4spxv8eg4tsl5l9bs4nmeh92i47z2fx8oyljnwcoqkq0kyxd74brtwgre3xj7')//Clicks on Profile and selects Fantastic Services Web
        cy.get('#obf-settings-save').click()//Clicks on SAVE
        cy.get('.open-cta-buttons').click()
        cy.get('.icon-book').click()
        cy.obfiframe().find('input#search-field-input.input').click().type('TEST FORM{enter}')
    })



Cypress.Commands.add('startEnv', (env) => {
if(env == 'dev')
{cy.startDev()}
if(env == 'live')
{cy.startLive()}
})


    



Cypress.Commands.add('obfiframe', () => {
    cy.get('iframe.obfIframe').iframe()
})


Cypress.Commands.add('uploadFile_png', (name,mimeType = 'image/png') => {
    return cy.obfiframe().find('#uploadFile').then(subject => {
        return cy.fixture(name)
            .then(Cypress.Blob.base64StringToBlob)
            .then(blob => {
                const el = subject[0];
                const nameSegments = name.split('/');
                const testFile = new File([blob], nameSegments[nameSegments.length - 1], { type: mimeType });
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(testFile);
                el.files = dataTransfer.files;
                el.dispatchEvent(new Event('change'));
                return subject;
            })
        })
    })


Cypress.Commands.add('uploadFile_png', (name,mimeType = 'image/png') => {
    return cy.obfiframe().find('#uploadFile').then(subject => {
        return cy.fixture(name)
            .then(Cypress.Blob.base64StringToBlob)
            .then(blob => {
                const el = subject[0];
                const nameSegments = name.split('/');
                const testFile = new File([blob], nameSegments[nameSegments.length - 1], { type: mimeType });
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(testFile);
                el.files = dataTransfer.files;
                el.dispatchEvent(new Event('change'));
                return subject;
            })
        })
    })




Cypress.Commands.add('uploadFile_jpg', (name,mimeType = 'image/jpeg') => {
    return cy.obfiframe().find('#uploadFile').then(subject => {
        return cy.fixture(name)
            .then(Cypress.Blob.base64StringToBlob)
            .then(blob => {
                const el = subject[0];
                const nameSegments = name.split('/');
                const testFile = new File([blob], nameSegments[nameSegments.length - 1], { type: mimeType });
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(testFile);
                el.files = dataTransfer.files;
                el.dispatchEvent(new Event('change'));
                return subject;
            })
        })
    })
    






    Cypress.Commands.add('uploadFile_web', (name,mimeType = 'image/png') => {
        return cy.get('#fileUpload').then(subject => {
            return cy.fixture(name)
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0];
                    const nameSegments = name.split('/');
                    const testFile = new File([blob], nameSegments[nameSegments.length - 1], { type: mimeType });
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(testFile);
                    el.files = dataTransfer.files;
                    el.dispatchEvent(new Event('change'));
                    return subject;
                })
        })
    })
