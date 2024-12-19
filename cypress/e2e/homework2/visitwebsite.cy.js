/// <reference types="cypress" />

describe ('Sample website', () => {

    describe('Visit Sauce Demo page', () => {
    it('open landing page and checks for the title', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.title().should('eq','Swag Labs');
        });
    });

    describe('Login test', () => {
    it('verify that email and password fields are visible', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('input[name="user-name"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
        });
    });
});