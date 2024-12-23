import textClass from './textClass';

describe('Textbox', () => {
    const textData = require('../../fixtures/textBoxes.json')

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            if (err.message.includes('Script error')) {
                // Handle specific error message or type if needed
                return false;
            }
            // Optionally log the error to console if you want
            console.error(err);
            return false;
        })

        cy.visit('https://demoqa.com/text-box');
        
    });
    
it('Fill text boxes', () => {
    
    
        textClass.sendText('#userName', textData.userName)
        textClass.sendText('#userEmail', textData.userEmail)
        textClass.sendText('#currentAddress', textData.currentAddress)
        textClass.sendText('#permanentAddress', textData.permanentAddress)
        textClass.clickButtonByLocator('#submit')

        cy.get('.mb-1').should('contain', `Name:Sasko`)
        cy.get('.mb-1').should('contain', `Email:arsovski@gmail.com`)
        cy.get('.mb-1').should('contain', `Current Address :Bogdan`)
        cy.get('.mb-1').should('contain', `Permananet Address :Karakostev`)
});
});
