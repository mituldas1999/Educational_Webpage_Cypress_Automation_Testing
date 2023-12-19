describe('Dropdown', () => {
    it('verify dropdown', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#dropdown-class-example').select('Select')
    })
    it('verify dropdown', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#dropdown-class-example').select('Option1')
    })
    it('verify dropdown', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#dropdown-class-example').select('Option2')
    })
    it('verify dropdown', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#dropdown-class-example').select('Option3')
    })

})