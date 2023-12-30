describe('mysuite', ()=>{
    it ('Capture Screanshorts & Videos', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.screenshot()
    })
})