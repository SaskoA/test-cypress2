import AppActions from './purchase_item';

describe('Purchase Item Tests', () => {
    it('Successfully purchases an item', () => {
        // cy.visit('https://www.saucedemo.com/');
        AppActions.login('standard_user', 'secret_sauce');
        AppActions.purchaseItem('Sauce Labs Backpack');
    });
});