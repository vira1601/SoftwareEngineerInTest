//Created using Cypress Framework 
//Run using Chrome browser

//Configurable Email (change this const)
const email='virahidayat16@gmail.com'
//Configurable Password (change this const)
const password='viraviravira123'
//Elements
const elements={
    TXT_LOGIN_EMAIL:'#login_field',
    TXT_LOGIN_PASS:'#password',
    BTN_SUBMIT_LOGIN:'.btn',
    TXT_GIST_DESC:'#gists > input',
    TXT_GIST_FILENAME:'.input-group > .form-control',
    TXT_GIST_CODE:'.CodeMirror-lines',
    BTN_CREATE_PUBLIC_GIST:'.hx_create-pr-button',
    LBL_MY_GIST:'.file-info',
    BTN_EDIT_GIST:'.d-md-flex > :nth-child(1) > .btn',
    BTN_SUBMIT_EDIT_GIST:'.btn-primary',
    BTN_DELETE_GIST:'.pagehead-actions > :nth-child(2) > form > .btn',
    BTN_PROFILE:'#user-links > details > summary',
    BTN_VIEW_MY_GISTS:'#user-links > details > details-menu > a:nth-child(3)',
    BTN_LIST_MY_GISTS:'.col-9',
    LBL_BLANK_LIST_GIST:'#gist-pjax-container > div > div.gutter.d-flex > div.col-9 > div.blankslate',
    LBL_GIST_SNIPPET:'#gist-pjax-container > div > div.gutter.d-flex > div.col-9 > div.gist-snippet'
}

describe('Wsrung Pintar - Software Engineer In Test  -  Exercise 2 Scenarios', () => {
    //Login
    before(function(){
        cy.visit('https://github.com/login')
        cy.get(elements.TXT_LOGIN_EMAIL).type(email)
        cy.get(elements.TXT_LOGIN_PASS).type(password)
        cy.get(elements.BTN_SUBMIT_LOGIN).click()
    })
    it('End-to-end tests for Gist', () => {
        //Create Public Gist

        //Visit page
        cy.visit('https://gist.github.com/')
        //Url assertion
        cy.url().should('eq', 'https://gist.github.com/')
        //Type gist description and assert it
        cy.get(elements.TXT_GIST_DESC).type('Trial Gist Test').should('have.value', 'Trial Gist Test')
        //Type gist filename and assert it
        cy.get(elements.TXT_GIST_FILENAME).type('test-sdet-gist.md').should('have.value', 'test-sdet-gist.md')
        //Type gist code and assert it
        cy.get(elements.TXT_GIST_CODE).type('Hello World')
        //Click button create public gist
        cy.get(elements.BTN_CREATE_PUBLIC_GIST).click()
        //Assert gist created
        cy.get(elements.LBL_MY_GIST).contains('test-sdet-gist.md')


        //Edit Existing Gist

        //Click button edit gist
        cy.get(elements.BTN_EDIT_GIST).click()
        //Url assertion
        cy.url().should('include', '/edit')
        //Edit gist description and assert it
        cy.get(elements.TXT_GIST_DESC).clear().type('Gist Edited').should('have.value', 'Gist Edited')
        //Edit gist filename and assert it
        cy.get(elements.TXT_GIST_FILENAME).clear().type('test-sdet-gist-edit.md').should('have.value', 'test-sdet-gist-edit.md')
        //Edit gist code and assert it
        cy.get(elements.TXT_GIST_CODE).type('Edit Hello World')
        //Submit edit gist
        cy.get(elements.BTN_SUBMIT_EDIT_GIST).click()
        //Assert gist edited
        cy.get(elements.LBL_MY_GIST).contains('test-sdet-gist-edit.md')


        //Delete Existing Gist

        //Click delete gist
        cy.get(elements.BTN_DELETE_GIST).click()
        //Assert gist deleted
        cy.get('body').contains('Gist deleted successfully.')


        //View my list of gists

        //Click profile on top right
        cy.get(elements.BTN_PROFILE).click()
        //Click 'your gists' button
        cy.get(elements.BTN_VIEW_MY_GISTS).click()
        //Assert button list of all my gist exists
        cy.get(elements.BTN_LIST_MY_GISTS).should('be.exist')
        //Assert list of gists
        cy.get('body').then(($body) => {
            //Check whether we have gist or not
            //If we have gist, gist snippet should be exist
            if($body.find('.gist-snippet').length){
                cy.get(elements.LBL_GIST_SNIPPET).should('be.exist')
            }
            //Else, blank state should be exist
            else{
                cy.get(elements.LBL_BLANK_LIST_GIST).should('be.exist').contains('You don’t have any gists yet.')
            }
        })
    })
})