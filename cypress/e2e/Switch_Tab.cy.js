describe('Switch_Window', () => {
    it('verify new window', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#opentab').click()
    })
})