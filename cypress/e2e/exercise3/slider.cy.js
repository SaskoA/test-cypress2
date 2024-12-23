describe('Slider Tests', () => {

    beforeEach(() => {
        // Visit the page before each test
        cy.visit('https://demoqa.com/slider');
    });

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

   it('change value of the slider', () => {
        cy.visit('https://demoqa.com/slider');

        cy.get('#range-slider').invoke('val', 60).trigger('change');

        cy.get('#sliderValue').should('have.value', '50');

   });
    
});