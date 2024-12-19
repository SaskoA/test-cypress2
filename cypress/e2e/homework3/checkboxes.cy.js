describe('Checkbox', () => {

    before(() => {

        cy.visit('https://demoqa.com/checkbox');
        cy.title().should('eq', 'Check Box');
    });
it('Check boxes', () => {
        
    cy.get('#app > div > div > div > div.col-12.mt-4.col-md-6 > h1').should('have.text', 'Text Box');
        cy.get('#tree-node > ol > li > span > button > svg').click();
        cy.get('#tree-node > ol > li > ol > li:nth-child(2) > span > button > svg').contains('Documents').click();
        cy.get('#tree-node > ol > li > ol > li.rct-node.rct-node-parent.rct-node-expanded > ol > li:nth-child(1) > span > button > svg').contains('WorkSpace').click();
        cy.get('#tree-node > ol > li > ol > li.rct-node.rct-node-parent.rct-node-expanded > ol > li.rct-node.rct-node-parent.rct-node-expanded > ol > li:nth-child(1) > span > label > span.rct-checkbox > svg').contains('React').check();
        cy.get('#tree-node > ol > li > ol > li.rct-node.rct-node-parent.rct-node-expanded > ol > li.rct-node.rct-node-parent.rct-node-expanded > ol > li:nth-child(2) > span > label > span.rct-checkbox > svg').contains('Angular').check();
        cy.get('#tree-node > ol > li > ol > li.rct-node.rct-node-parent.rct-node-expanded > ol > li.rct-node.rct-node-parent.rct-node-expanded > ol > li:nth-child(3) > span > label > span.rct-checkbox > svg').contains('Veu').check();
});
});
