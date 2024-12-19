import textClass from './homework3/textClass'

describe('Textbox', () => {
    const textData = require('../../fixtures/textBoxes.json')

    
it('Fill text boxes', () => {
    cy.visit('https://demoqa.com/text-box');
    
        textClass.sendText('#userName', textData.userName)
        textClass.sendText('#userEmail', textData.userEmail)
        textClass.sendText('#currentAddress', textData.currentAddress)
        textClass.sendText('#permanentAddress', textData.permanentAddress)
})
})