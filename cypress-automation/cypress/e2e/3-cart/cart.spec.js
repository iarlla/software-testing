import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

When('eu adiciono o produto {string} ao carrinho', (productName) => {
  cy.contains('.inventory_item', productName).within(() => {
    cy.get('button.btn_inventory').click();
  });
});

Then('o ícone do carrinho deve exibir {string}', (itemCount) => {
  cy.get('.shopping_cart_badge').should('have.text', itemCount);
});

When('quando eu vou para a página do carrinho', () => {
  cy.get('.shopping_cart_link').click();
  cy.url().should('include', '/cart.html');
});

Then('eu devo ver o produto {string} no carrinho', (productName) => {
  cy.contains('.cart_item', productName).should('be.visible');
});

Given('que eu adicionei o produto {string} ao carrinho', (productName) => {
    cy.contains('.inventory_item', productName).within(() => {
        cy.get('button.btn_inventory').click();
    });
});

When('removo o produto {string} do carrinho', (productName) => {
    cy.contains('.cart_item', productName).within(() => {
        cy.get('button.cart_button').click();
    });
});

Then('o carrinho deve estar vazio', () => {
  cy.get('.cart_item').should('not.exist');
});