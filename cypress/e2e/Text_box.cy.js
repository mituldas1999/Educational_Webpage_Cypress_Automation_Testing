describe('Text_box', () => {
    it('verify text box', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  
        cy.title().should('eq','Practice Page')

        cy.get('#select-class-example > fieldset > legend').should('contain','Suggession Class Example')
        cy.get('#hide-textbox').click()

        cy.get('#show-textbox').click()
        cy.get('#displayed-text').type('Mitul Das')



        
    })
})