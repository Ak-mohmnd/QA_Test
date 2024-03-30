// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-xpath');


/*****************************************************
 * Command: Click
 * Description: Clicks an element
 * @param {string} locator Element Locator
 *****************************************************/
Cypress.Commands.add('Click', (locator) => {
    cy.log('------ Click : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click({ multiple: true })
})


/*****************************************************
 * Command: EnterText
 * Description: Enters text on an Element
 * @param {string} locator Element Locator
 * @param {string} text Text to be entered
 *****************************************************/
 Cypress.Commands.add('EnterText', (locator, text) => {
    cy.log('------ Enter Text : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).type(text).should('have.value', text)
    cy.xpath(locator).should('have.value', text)
})