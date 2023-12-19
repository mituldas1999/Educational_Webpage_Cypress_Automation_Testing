describe('Table_price', () => {
    it('verify_price', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('body > div:nth-child(5) > div.right-align > fieldset:nth-child(2) > div.tableFixHead').should('be.visible')

    })
})