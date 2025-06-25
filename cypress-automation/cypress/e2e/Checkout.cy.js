describe('Checkout ', () => {

  it('Testes do Processo de Checkout ', () => {

    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');

    cy.get('.inventory_item').first().then(($item) => {
      
 /**
   * Cenário1: Realizar um checkout completo com sucesso
   * Dado que o usuário adicionou um produto ao carrinho
   * Quando ele inicia o checkout e preenche seus dados
   * E avança para a página de resumo
   * Então os detalhes da compra (item, preço, total) devem estar corretos
   * E quando ele finaliza a compra
   * Então uma mensagem de sucesso deve ser exibida
   */

    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Usuario');
    cy.get('[data-test="lastName"]').type('da Silva');
    cy.get('[data-test="postalCode"]').type('123456-78');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();

    });
  });
});