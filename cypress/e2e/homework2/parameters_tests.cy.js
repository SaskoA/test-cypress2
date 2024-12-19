describe('Open Swag site', () => {

const users = [
    {username: 'standard_user', password: 'secret_sauce'},
    {username: 'locked_out_user', password: 'secret_sauce'}
]

  
        users.forEach((user) => {
            it('login with email and password', () => {
                cy.visit('https://www.saucedemo.com/');
                cy.get('input[name="user-name"]').type('standard_user');
                cy.get('input[name="password"]').type('secret_sauce');
                cy.get('input[type="submit"]').click();
        
        });
    });
});