describe('Landing_Page', () => {
    it('verify title-positive', () => {
      //steps
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      cy.title().should('eq','Practice Page')
    })

  })