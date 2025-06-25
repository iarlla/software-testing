describe('Carrinho ', () => {

  it('Deve fazer o login, adicionar, remover e validar o carrinho em uma única sessão', () => {

    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');

    cy.get('.inventory_item').first().then(($item) => {
      
  /**Canário 1: Dado que o usuário está na página de produtos
   * Quando ele clica no botão "Add to cart" de um item
   * Então o ícone do carrinho deve ser atualizado */

      const nomeDoProduto = $item.find('.inventory_item_name').text();
      const precoDoProduto = $item.find('.inventory_item_price').text();
      $item.find('button').click();
      cy.get('.shopping_cart_badge').should('have.text', '1');

  /**Cenário 2: Validar itens adicionados estão corretos
   * Dado que o usuário adiciona um produto
   * Quando ele navega para o carrinho
   * Então o nome e o preço do produto devem estar corretos
   */ 
      cy.get('.shopping_cart_link').click();
      cy.url().should('include', '/cart.html');
      cy.get('.cart_item').should('have.length', 1);
      cy.get('.inventory_item_name').should('have.text', nomeDoProduto);
      cy.get('.inventory_item_price').should('have.text', precoDoProduto);

  /**
   * Cenário 3: Remover produtos do carrinho
   * Dado que um produto foi adicionado ao carrinho
   * Quando o usuário navega para a página do carrinho e clica em "Remove"
   * Então o produto deve ser removido
   */
      cy.get('.cart_item').contains('Remove').click();
      cy.get('.cart_item').should('not.exist');
      cy.get('.shopping_cart_badge').should('not.exist');
    });
  });
});