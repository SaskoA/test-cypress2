/// <reference types="cypress" />

describe('Suite of Tests with tags', ()=>{

    it('Simple test', ()=>{
        // tag: smoke
        cy.log("this test has tag for smoke tests")
        cy.get('.username').clear.type('saskoa', {force: true, delay : 2, log: true});
        cy.get('.gender').check()
        cy.get('.extras').uncheck().check()
        cy.get('.interest-rate').select(1);
        cy.get('.interest-rate').select('3%');

        cy.get('someelement').focus()
        cy.focused().click()
    })

    it('Simple test', ()=>{
        // tag: regression
        cy.log("this test has tag for regression tests")
    })
})