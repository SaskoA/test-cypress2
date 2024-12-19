/// <reference types="cypress" />
const users = require('../../fixtures/users.json')

describe('Simple data driven from a list', () => {

    users.forEach(user => {
       it('Simple login test 2 $(user.username)', () => {

         cy.log(` username: ${user.username} and pass ${user.pass}`)

        })
    })

})