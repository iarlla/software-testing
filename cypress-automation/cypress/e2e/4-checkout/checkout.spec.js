import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('eu adicionei o produto {string} ao carrinho', (productName) => {
    cy.contains('.inventory_item', productName).within(() => {
        cy.get('button.btn_inventory').click();
    });
});

When('eu inicio o processo de checkout', () => {
  cy.get('.shopping_cart_link').click();
  cy.get('.checkout_button').click();
  cy.url().should('include', '/checkout-step-one.html');
});

When('preencho minhas informações com nome {string}, sobrenome {string} e CEP {string}', (firstName, lastName, postalCode) => {
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(postalCode);
});

When('continuo para o resumo da compra', () => {
  cy.get('.cart_button').click();
  cy.url().should('include', '/checkout-step-two.html');
});

Then('eu devo ver o resumo da compra com o produto {string}', (productName) => {
  cy.contains('.cart_item', productName).should('be.visible');
});

When('eu finalizo a compra', () => {
  cy.get('.cart_button').click();
});

Then('eu devo ver a mensagem de sucesso {string}', (successMessage) => {
  cy.get('.complete-header').should('have.text', successMessage);
});