/// <reference types="cypress" />

describe('Delete contacts via UI', () => {
    beforeEach('Login', () => {
        cy.appLogin(Cypress.env('Email'), Cypress.env('Password'))
    })

    it('Identifies and deletes first row of contact table', () => {
        cy.get('tr.contactTableBodyRow').then(($rows) => {
            const initialLength = $rows.length
            cy.get('tr.contactTableBodyRow').eq(0).click();
            cy.get('#delete').click();
            cy.get('tr.contactTableBodyRow').should('have.length', initialLength - 1)
        })
    });

    it('Deletes 6th row of contact table', () => {
        cy.get('table.contactTable').then(($rows) => {
            const initialLength = $rows.length
            cy.get('tr.contactTableBodyRow').eq(6).click();
            cy.get('#delete').click();
            cy.get('table.contactTable').should('have.length', initialLength - 1)
        })
        
    });


})

    
