/// <reference types="cypress" />
describe('Suite of Login Tests that are using valid set of data', ()=>{

    before('Simple login test', ()=> {
    // do some action executed only once
    cy.log('This is before block')
    })

describe('Suite of subset', () => {
    beforeEach('Simple subblock og login', () => {
 // do some action executed only once
    cy.log('This is a beforeEach block')
    })
    })
    describe('Suite of paralel set of tests', () => {
    it('Simple login test 2', ()=>{

    })

    it('Simple login test 3', ()=>{
        
    })
    })
})
