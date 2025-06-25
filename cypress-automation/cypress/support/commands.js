// cypress/support/commands.js
console.log('>>> Arquivo commands.js foi carregado! <<<');
Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });
});