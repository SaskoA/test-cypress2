describe('Alerts DemoQA Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('Script error')) {
            // Handle specific error message or type if needed
            return false;
        }
        // Optionally log the error to console if you want
        console.error(err);
        return false;
    });

    beforeEach(() => {
        // Visit the page before each test
        cy.visit('https://demoqa.com/alerts');
      
      });


    it('Confirm dialog with OK', () => {
        cy.get('#confirmButton').scrollIntoView().click();
        cy.on('window:confirm',(txt) =>{
            expect(txt).to.equal('Do you confirm action?');
            return true;
        })
        cy.get('#confirmResult').should('contain.text', 'You selected Ok')
    })

    it('Confirm dialog with Cancel', () => {
        cy.get('#confirmButton').click();
        cy.on('window:confirm',(txt) =>{
            expect(txt).to.equal('Do you confirm action?');
            return false;
        })
        cy.get('#confirmResult').should('contain.text', 'You selected Cancel')
    })

})