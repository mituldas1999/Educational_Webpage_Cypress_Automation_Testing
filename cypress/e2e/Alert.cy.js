describe('Alert', () => {
    it('verify alert message', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('body > div:nth-child(4) > div:nth-child(3) > fieldset > legend').should('contain','Switch To Alert Example')
        cy.get('#name').type('Mitul Das')

        cy.get('#alertbtn').click()
        cy.title().should('eq','Practice Page')


        cy.get('#confirmbtn').click()
        cy.title().should('eq','Practice Page')


        
    })
})