.
├── README.md                                 # Documentação principal
├── .gitignore                                # Arquivos a serem ignorados pelo Git
├── cypress-automation/                       # Pasta para a automação com Cypress
│   ├── cypress/
│   │   ├── e2e/                              # Casos de teste End-to-End
│   │   │   ├── login.cy.js
│   │   │   ├── products.cy.js
│   │   │   ├── cart.cy.js
│   │   │   └── checkout.cy.js
│   │   ├── fixtures/                         # Dados de teste (usuários, produtos, etc.)
│   │   │   └── users.json
│   │   ├── support/                          # Comandos customizados, Page Objects
│   │   │   ├── commands.js                   # Comandos reutilizáveis (e.g., login, add to cart)
│   │   │   └── e2e.js                        # Arquivo de configuração de ambiente (importar Page Objects)
│   │   └── pages/                            # Page Objects (Organização dos seletores e ações)
│   │       ├── LoginPage.js
│   │       ├── ProductsPage.js
│   │       ├── CartPage.js
│   │       └── CheckoutPage.js
│   ├── cypress.config.js                     # Configuração do Cypress
│   └── package.json                          # Dependências do projeto Cypress
│   └── package-lock.json
└── robotframework-automation/                # Pasta para a automação com Robot Framework
    ├── Tests/                                # Casos de teste
    │   ├── LoginAndLogout.robot
    │   ├── ProductsManagement.robot
    │   ├── ShoppingCart.robot
    │   └── CheckoutProcess.robot
    ├── Resources/                            # Palavras-chave reutilizáveis (Page Objects / Componentes)
    │   ├── CommonKeywords.robot
    │   ├── LoginPage.robot
    │   ├── ProductsPage.robot
    │   ├── CartPage.robot
    │   └── CheckoutPage.robot
    ├── Variables/                            # Variáveis de teste
    │   └── TestData.py
    ├── output/                               # Logs de execução (gerado pelo Robot Framework)
    ├── results/                              # Relatórios de execução (gerado pelo Robot Framework)
    └── requirements.txt                      # Dependências Python para Robot Framework

# 🧪 Automação Web - Prova Prática

Este repositório contém a solução da prova prática de automação web, focando na aplicação `https://www.saucedemo.com/v1/`. As automações foram desenvolvidas com o objetivo de demonstrar a capacidade de automatizar casos de uso em sites reais, aplicando boas práticas de desenvolvimento de testes, documentação e seguindo a metodologia BDD (Behavior-Driven Development).

---

## 🎯 Objetivo da Automação

O principal objetivo desta automação é validar as funcionalidades críticas do site Sauce Demo, incluindo:

1.  **Login e Logout:**
    * Validação de login bem-sucedido com credenciais corretas.
    * Validação do comportamento com credenciais incorretas.
    * Realização de logout após login bem-sucedido.
2.  **Produtos:**
    * Validação da exibição da lista de produtos.
    * Visualização de detalhes de um produto específico.
    * Ordenação de produtos (por nome e preço).
3.  **Carrinho de Compras:**
    * Adição de produtos ao carrinho.
    * Remoção de produtos do carrinho.
    * Validação da correção dos itens adicionados/removidos.
4.  **Processo de Checkout:**
    * Iniciação do processo de checkout.
    * Preenchimento de dados obrigatórios (nome, sobrenome, CEP).
    * Validação do resumo da compra.
    * Finalização da compra e validação da mensagem de sucesso.

---

## 🛠️ Ferramentas Utilizadas

Para esta prova, as automações foram implementadas utilizando:

* **Cypress:** Framework de automação End-to-End para aplicações web. Escolhido pela sua robustez, performance e excelente experiência de desenvolvimento.
* **Robot Framework:** Framework de automação de testes com uma sintaxe baseada em palavras-chave, ideal para automação de testes E2E e aceitação, com foco em legibilidade BDD.

**Nota:** As implementações para cada ferramenta estão em suas respectivas pastas (`cypress-automation/` e `robotframework-automation/`).

---

## 🚀 Preparação do Ambiente

Para executar as automações, siga as instruções da ferramenta de sua escolha.

### Para Cypress (Recomendado)

#### Requisitos

* [Node.js](https://nodejs.org/en/download/) (versão LTS recomendada) e [npm](https://www.npmjs.com/get-npm).
    * **Verificar Instalação:** `node -v` e `npm -v`

#### Instalação e Configuração

1.  **Clone o Repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd <NOME_DA_PASTA_DO_REPOSITORIO>
    ```
2.  **Navegue para a pasta do Cypress:**
    ```bash
    cd cypress-automation
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
    Isso instalará o Cypress e quaisquer outras dependências definidas no `package.json`.

#### Executando os Testes

1.  **Abrir a interface do Cypress (recomendado para desenvolvimento/depuração):**
    ```bash
    npx cypress open
    ```
    Isso abrirá o Cypress Test Runner. Selecione `E2E Testing` e o navegador de sua preferência para ver a lista de testes e executá-los interativamente.

2.  **Executar todos os testes via linha de comando (headless - para CI/CD):**
    ```bash
    npx cypress run
    ```
    Ou para um navegador específico:
    ```bash
    npx cypress run --browser chrome
    ```
    Os relatórios de execução serão gerados na pasta `cypress/videos` e `cypress/screenshots` (em caso de falha).

---

### Para Robot Framework

#### Requisitos

* [Python](https://www.python.org/downloads/) (versão 3.x recomendada) e [pip](https://pip.pypa.io/en/stable/installation/).
    * **Verificar Instalação:** `python3 --version` e `pip3 --version`
* **ChromeDriver** (ou GeckoDriver para Firefox, etc.): Baixe a versão compatível com seu navegador [aqui](https://sites.google.com/chromium.org/driver/) ou [aqui](https://github.com/mozilla/geckodriver/releases). Coloque o executável em um diretório que esteja no seu `PATH` ou na pasta `robotframework-automation`.

#### Instalação e Configuração

1.  **Clone o Repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd <NOME_DA_PASTA_DO_REPOSITORIO>
    ```
2.  **Navegue para a pasta do Robot Framework:**
    ```bash
    cd robotframework-automation
    ```
3.  **Instale as dependências Python:**
    ```bash
    pip install -r requirements.txt
    ```
    Isso instalará o Robot Framework e o SeleniumLibrary.

#### Executando os Testes

1.  **Executar todos os testes:**
    ```bash
    robot Tests/
    ```
2.  **Executar um arquivo de teste específico:**
    ```bash
    robot Tests/LoginAndLogout.robot
    ```
3.  **Executar testes com uma tag específica:**
    ```bash
    robot --include Login Tests/
    ```

Após a execução, os relatórios (`log.html`, `report.html`) e XML (`output.xml`) serão gerados na pasta `robotframework-automation/`.

---

## 📂 Estrutura do Código e Boas Práticas

A estrutura do projeto foi pensada para garantir clareza, reusabilidade e fácil manutenção, seguindo os princípios de Page Object Model (POM) e a sintaxe BDD.

### Estrutura BDD (Gherkin-like)

Os casos de teste são escritos de forma a serem legíveis por não-desenvolvedores, usando uma sintaxe que remete ao Gherkin (Given-When-Then).

**Exemplo (Cypress):**

```javascript
// cypress/e2e/login.cy.js
describe('Login Functionality', () => {
  // Given: Usuário está na página de login
  beforeEach(() => {
    cy.visit('/'); // Visita a URL base configurada em cypress.config.js
  });

  it('should allow a standard user to login successfully', () => {
    // When: O usuário insere credenciais válidas
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    // And: Clica no botão de login
    LoginPage.clickLoginButton();
    // Then: O usuário é redirecionado para a página de produtos
    ProductsPage.verifyProductsPageLoaded();
    // And: O usuário pode fazer logout
    ProductsPage.clickBurgerMenu();
    ProductsPage.clickLogoutButton();
    LoginPage.verifyLoginPageLoaded();
  });

  it('should display an error message for invalid credentials', () => {
    // When: O usuário insere credenciais inválidas
    LoginPage.enterUsername('invalid_user');
    LoginPage.enterPassword('invalid_password');
    // And: Clica no botão de login
    LoginPage.clickLoginButton();
    // Then: Uma mensagem de erro é exibida
    LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
  });
});
