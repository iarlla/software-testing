describe('Testes de Login e Logout na Saucedemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  /** Cenário 1: Validar login com usuário e senha corretos
   * Abrir página do saucedemo
   * E inserir o nome de usuario correto
   * E inserir a senha correta
   * E clicar no botao de login
   * E a pagina de produtos for exibida
   */
  
  it('Cenário 1: Deve fazer login com sucesso usando credenciais válidas', () => {

    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html');
  });

  /** Cenário 2: Validar comportamento com usuário e senha incorretos
   * Abrir página do saucedemo
   * E inserir o nome de usuario incorreto
   * E inserir a senha incorreta
   * E clicar no botao de login
   * Então uma mensagem de erro deve ser exibida
   */

  it('Cenário 2: Deve exibir uma mensagem de erro com credenciais inválidas', () => {
    cy.get('[data-test="username"]').type('standard_incorret');
    cy.get('[data-test="password"]').type('senhaincorreta123');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  /** Cenário 3: Realizar logout após login bem-sucedido
   * Abrir página do saucedemo
   * E inserir o usuario correto
   * E a pagina de produtos for exibida
   * E clicar no menu de logout
   * E clicar no link de logout
   * Entao a pagina de login deve ser exibida novamente
   */

  it('Cenário 3: Deve fazer logout com sucesso após o login', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click()

    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();

    cy.get('[data-test="login-button"]').should('be.visible');
  });

});