class LoginActions{
    static login(standard_user, secret_sauce){
        cy.get('input[name="user-name"]').type(standard_user);
        cy.get('input[name="password"]').type(secret_sauce);
        cy.get('input[type="submit"]').click();
    }
}

export default LoginActions;