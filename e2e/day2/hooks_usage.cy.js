/// <reference types="cypress" />
describe('Suite of Login Tests that are using valid set of data', ()=>{

    
    before('Simple login test', ()=>{

        cy.log('this is a before executed only once')
    })

    beforeEach('This is a before Each', ()=>{
        cy.log('this will be executed before each test')
    })

    it('Simple login test 2', ()=>{
        cy.log('this is a test 2')
    })
})