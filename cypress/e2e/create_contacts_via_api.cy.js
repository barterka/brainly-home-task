/// <reference types="cypress" />
import faker from 'faker';

describe('Create contacts via API', () => {
    before(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.appLogin();
    });

    it('Creates 10 user contacts', () => {
        const token = Cypress.env('token');
            for (let i = 0; i < 10; i++) {
                const data = {
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    birthdate: faker.date.past().toLocaleDateString('en-CA').replace(/\//g, '-'),
                    email: faker.internet.email().toLowerCase(),
                    phone: faker.phone.phoneNumberFormat(0).replace(/-/g, '').replace(/\s/g, ''),
                    street1: faker.address.streetAddress(),
                    street2: faker.address.secondaryAddress(),
                    city: faker.address.city(),
                    stateProvince: faker.address.stateAbbr(),
                    postalCode: faker.address.zipCode(),
                    country: faker.address.country()
                };
    
            cy.request({
                method: 'POST',
                url: '/contacts',
                headers: {
                    Authorization: token
                },
                body: data
                }).then((response) => {
                expect(response.status).to.equal(201);
                expect(response.body).to.contain(data);
            });
        }
    });
});
