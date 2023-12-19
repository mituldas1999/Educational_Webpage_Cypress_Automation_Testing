describe('Dropdown', () => {
    it('verify option_1', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#checkBoxOption1').click()
        cy.get('#checkbox-example > fieldset > label:nth-child(2)').should('contain','Option1')
    })
    it('verify option_2', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#checkBoxOption2').click()
        cy.get('#checkbox-example > fieldset > label:nth-child(3)').should('contain','Option2')
    })
    it('verify option_2', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#checkBoxOption3').click()
        cy.get('#checkbox-example > fieldset > label:nth-child(4)').should('contain','Option3')
    })
})