describe('Manu', () => {
    it('verify Home', () => {
      //steps
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

      cy.title().should('eq','Practice Page')

      cy.get("body > header > div > a > button").click();
      cy.title().should('eq','Selenium, API Testing, Software Testing & More QA Tutorials | Rahul Shetty Academy')

    })

    it('verify Practice', () => {
        //steps
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  
        cy.title().should('eq','Practice Page')
  
        cy.get("body > header > div > button:nth-child(2)").click();
        cy.title().should('eq','Practice Page')
  
      })

      it('verify Login & Signup', () => {
        //steps
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  
        cy.title().should('eq','Practice Page')
  
        cy.get("body > header > div > button:nth-child(3)").click();
        cy.get('body > header > div > button:nth-child(4)').click();
  
      })

  })