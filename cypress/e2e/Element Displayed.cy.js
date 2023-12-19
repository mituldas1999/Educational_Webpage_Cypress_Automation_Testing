describe('Element Displayed', () => {
    it('verify dropdown', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('body > div:nth-child(5) > div.right-align > fieldset:nth-child(1) > legend').should('contain','Element Displayed Example')

        cy.get('#name').type("Mitul Das")
        

    })
})
