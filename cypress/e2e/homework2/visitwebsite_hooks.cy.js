describe ('Sample website', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    describe('Visit Sauce Demo page', () => {
    it('open landing page and checks for the title', () => {
        cy.title().should('eq', 'Swag Labs');
        });
        after(() => {
            cy.log('This runs after first test')
        });
    });

    describe('Login test', () => {
    it('verify that email and password fields are visible', () => {
        cy.get('input[name="user-name"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
        });
    });

    afterEach(() => {
        cy.log('This runs after each test')
    });
});