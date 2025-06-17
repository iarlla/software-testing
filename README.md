# 🧪 Automação Web - Prova Prática: Sauce Demo

Este repositório apresenta a automação de testes web para a aplicação [Sauce Demo (v1)](https://www.saucedemo.com/v1/), demonstrando habilidades em testes de interface (UI) e boas práticas.

---

## 🚀 Funcionalidades Automatizadas

O projeto cobre os principais fluxos da aplicação:

* **Login e Logout:** Cenários de sucesso e falha.
* **Produtos:** Exibição, detalhes e ordenação.
* **Carrinho:** Adição, remoção e validação de itens.
* **Checkout:** Processo completo de compra.

---

## 🛠️ Ferramentas Utilizadas

As automações foram desenvolvidas utilizando **Cypress** e **Robot Framework**, aplicando o padrão Page Object Model (POM) e casos de teste em sintaxe BDD.

* **Cypress:** Para automação End-to-End (E2E) em JavaScript.
* **Robot Framework:** Para automação E2E baseada em keywords com Python.

As implementações para cada ferramenta estão em suas respectivas pastas: `cypress-automation/` e `robotframework-automation/`.

---

## 🏃 Como Executar

### Para Cypress

1.  **Pré-requisitos:** [Node.js](https://nodejs.org/en/download/) (LTS) e npm.
2.  **Instalação:**
    ```bash
    cd cypress-automation
    npm install
    ```
3.  **Execução:**
    * **Com interface:** `npx cypress open`
    * **Via CLI (headless):** `npx cypress run`

### Para Robot Framework

1.  **Pré-requisitos:** [Python 3.x](https://www.python.org/downloads/) e [pip](https://pip.pypa.io/en/stable/installation/), além do driver do navegador (ex: [ChromeDriver](https://sites.google.com/chromium.org/driver/)).
2.  **Instalação:**
    ```bash
    cd robotframework-automation
    pip install -r requirements.txt
    ```
3.  **Execução:**
    ```bash
    robot Tests/
    ```

---

## 📂 Estrutura do Projeto

O código é organizado para legibilidade e manutenção, seguindo o padrão POM e a sintaxe BDD (Given-When-Then).

```
.
├── README.md
├── cypress-automation/           # Código Cypress
│   ├── cypress/
│   │   ├── e2e/                  # Testes
│   │   ├── fixtures/             # Dados de teste
│   │   └── support/              # Comandos e Page Objects
│   └── package.json
└── robotframework-automation/    # Código Robot Framework
    ├── Tests/                    # Testes
    ├── Resources/                # Keywords e Page Objects
    ├── Variables/                # Dados de teste
    └── requirements.txt
```

---

## 🤝 Contribuição

Sinta-se à vontade para explorar o código, sugerir melhorias ou adicionar novos cenários.

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.
