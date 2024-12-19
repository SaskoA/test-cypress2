/// <reference types="cypress" />

// const { Runnable } = require("mocha")

describe('Suite of Tests with tags', ()=>{
    // Cypress.on('uncaught:exception', (err, runnable)) => {}

    it('Simple test', ()=>{
        const username = 'Sasko Arsovski';
       cy.visit('https://demoqa.com/text-box')
       cy.get('#app > div > div > div > div.col-12.mt-4.col-md-6 > h1').should('have.text', 'Text Box')
       cy.get('#userName').type("Sasko Arsovski", {force: true})
       cy.get('#userEmail').type("arsovski_sasko@hotmail.com", {force: true})
       cy.get('#submit').click({force: true})


       cy.get('#name').should('contain.text', username)
    })

    it('Simple test2', ()=>{
        cy.visit('/')
        cy.get('button').eq(3).click({force: true, timeout: 15000})
        // cy.xpath('button').eq(3).click({force: true, timeout: 15000})
     })
})