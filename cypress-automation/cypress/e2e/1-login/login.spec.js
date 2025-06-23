import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'https://www.saucedemo.com/v1/';

Given('que eu estou na página de login', () => {
  cy.visit(url);
});

When('eu insiro o usuário {string} e a senha {string}', (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
});

When('clico no botão de login', () => {
  cy.get('#login-button').click();
});

Then('eu devo ser redirecionado para a página de produtos', () => {
  cy.url().should('include', '/inventory.html');
});

Then('eu devo ver a mensagem de erro {string}', (errorMessage) => {
  cy.get('[data-test="error"]').should('have.text', errorMessage);
});

Given('que eu estou logado com o usuário {string}', (username) => {
    cy.visit(url);
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
});

When('eu clico no menu de hambúrguer', () => {
  cy.get('.bm-burger-button > button').click();
});

When('clico no link de logout', () => {
  cy.get('#logout_sidebar_link').click();
});

Then('eu devo ser redirecionado para a página de login', () => {
  cy.url().should('eq', url);
});