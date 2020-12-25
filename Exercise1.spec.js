//Created using Cypress Framework 
//Run using Chrome browser

//Elements
const elements={
    btn_electronics: '[data-hover-track="p2481888.m1379.l6435"]',
    btn_allcat: '#gh-cat',
    btn_search:'#gh-btn',
}

describe('Warung Pintar - Software Engineer In Test  -  Exercise 1 following 2 Scenarios', () => {
    
    it('Visit web ebay', () =>{
        cy.visit('https://www.ebay.com')
    })

    it('Exercise 1 scenario 1', () => {
        //search by category
        cy.get(elements.btn_electronics)
        .should('be.visible').click()
        .wait(1000);
        cy.contains('Cell Phones, Smart Watches & Accessories')
        .should('be.visible').click()
        .click();
    })

     
    it('Exercise 1 scenario 2', () => {
        cy.get('#gh-ac')
        .should('be.visible')
        .type('macbook')
        cy.get('#gh-btn')
        .click()
    })

    it('Change the search category - Computers/Laptop & Networking', () => {
        cy.get('.srp-refine__category__list--flush > :nth-child(2) > :nth-child(1)')
        .should('be.visible')
        .click()
    })

    it('User Verify that the first result name matches with the search string', () => {
        // cy.get('.sc-cEvuZC > .ant-typography')
        cy.get('.srp-controls__count-heading > :nth-child(2)')
        cy.contains('macbook')
    })

   
})