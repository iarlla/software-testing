
describe('Testes da Página de Produtos', () => {

  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
  });

  /** Cenário 1: Dado que o usuário faz um login bem-sucedido
    Então a lista de produtos deve ser exibida com pelo menos um item */

  it('Cenário 1: Deve exibir a lista de produtos após o login', () => {
    // Visitamos a página que queremos testar AQUI.
    cy.visit('https://www.saucedemo.com/v1/inventory.html');
    
    cy.get('.inventory_list').should('be.visible');
    cy.get('.inventory_item').should('have.length.gt', 0);
  });

  /**Canário 2:Dado que o usuário faz um login bem-sucedido
    Quando ele clica para ver os detalhes do primeiro produto
    Então a página de detalhes do produto é exibida corretamente */

  it('Cenário 2: Deve exibir a página de detalhes de um produto', () => {
    cy.visit('https://www.saucedemo.com/v1/inventory.html');
    
    cy.get('.inventory_item_name').first().click();
    cy.get('.inventory_details_desc_container').should('be.visible');
  });

  /**Cenário 3:Dado que o usuário faz um login bem-sucedido
    Quando ele ordena os produtos por "Preço (do menor para o maior)"
    Então os produtos devem estar ordenados corretamente por preço */

  it('Cenário 3: Deve ordenar os produtos por preço (menor para o maior)', () => {
    cy.visit('https://www.saucedemo.com/v1/inventory.html');
    cy.get('.product_sort_container').select('lohi');
  });
  
});