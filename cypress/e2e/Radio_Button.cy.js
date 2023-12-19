describe('Radio_button', () => {
    it('verify Radio Button_1', () => {
        //steps
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  
        cy.title().should('eq','Practice Page')
  
        cy.get("#radio-btn-example > fieldset > label:nth-child(2) > input").click()
        
        
        cy.get('#radio-btn-example').should('contain','Radio1')
      })
      it('verify Radio Button_2', () => {
        //steps
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  
        cy.title().should('eq','Practice Page')
  
        cy.get('[for="radio2"] > .radioButton').click()
    
        
        cy.get('#radio-btn-example').should('contain','Radio2')
      })
      it('verify Radio Button_2', () => {
        //steps
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  
        cy.title().should('eq','Practice Page')
  
        cy.get('[for="radio3"] > .radioButton').click()
        
        cy.get('#radio-btn-example').should('contain','Radio3')
      })

})