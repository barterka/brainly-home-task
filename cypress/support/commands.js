//Command signing up to the app
Cypress.Commands.add('signUp', (email, password) => {
    cy.visit('/')
    cy.get('#signup').click()
    cy.get('#firstName').type('First Name')
    cy.get('#lastName').type('Last Name')
    cy.get('#email').type(Cypress.env('Email'))
    cy.get('#password').type(Cypress.env('Password'))
    cy.get('#submit').click()
 });

//Command logging in to the app
Cypress.Commands.add('appLogin', (email, password) => {
    cy.visit('/')
    cy.get('#email').type(Cypress.env('Email'))
    cy.get('#password').type(Cypress.env('Password'))
    cy.get('#submit').click()
 });

import 'cypress-commands';