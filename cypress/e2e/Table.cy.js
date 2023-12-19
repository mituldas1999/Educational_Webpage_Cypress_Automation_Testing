describe('Table', () => {
    it('verify_table', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#product').should('be.visible')

    })
})
