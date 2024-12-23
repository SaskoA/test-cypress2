describe('Checkbox', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            if (err.message.includes('Script error')) {
                // Handle specific error message or type if needed
                return false;
            }
            // Optionally log the error to console if you want
            console.error(err);
            return false;
        })

        cy.visit('https://demoqa.com/checkbox');
        
    });
it('Check boxes', () => {
        
        cy.get('.rct-text button').eq(0).click(); // expandira Home    
            cy.get('.rct-text button').eq(2).click(); // expandira Documents 
            cy.get('.rct-text button').eq(4).click(); // expandira Office

            cy.get('.rct-checkbox').eq(6).click(); // go selektira private od Office 

            cy.get('#result').invoke('text').should('equal', 'You have selected :private');
           
});
});