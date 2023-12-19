describe('Switch_Window', () => {
    it('verify new window', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#openwindow').click()
        cy.visit("https://www.qaclickacademy.com/");
    })
})