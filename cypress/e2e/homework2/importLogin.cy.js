import LoginActions from "./classLogin";

describe('open Swag website',()=>{

    it('login successfully',()=>{
        cy.visit('https://www.saucedemo.com/');
        LoginActions.login('standard_user', 'secret_sauce');
    })
})