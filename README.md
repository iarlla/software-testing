# 🧪 Repositório de Casos de Teste de Software

Este repositório contém exemplos e configurações para testes de software utilizando diversas ferramentas, abrangendo desde testes unitários até testes end-to-end (E2E). O objetivo é demonstrar a aplicação prática de cada ferramenta em cenários reais.

---

## 🚀 Preparação do Ambiente

Antes de executar os testes, é necessário configurar seu ambiente de desenvolvimento. Siga os passos abaixo para garantir que todas as dependências estejam instaladas e configuradas corretamente.

### 📋 Requisitos

Verifique se as seguintes ferramentas estão instaladas em seu sistema. Caso contrário, siga as instruções de instalação e configuração.

#### Git

Sistema de controle de versão essencial para clonar este repositório.

* **Verificar Instalação:**
    ```bash
    git --version
    ```
* **Instalar (Exemplo - Debian/Ubuntu):**
    ```bash
    sudo apt update
    sudo apt install git -y
    ```
* **Configurar (Opcional - Primeira Vez):**
    ```bash
    git config --global user.name "Seu Nome"
    git config --global user.email "seu.email@example.com"
    ```

#### Python

Linguagem de programação fundamental para o Robot Framework e outras utilidades.

* **Verificar Instalação:**
    ```bash
    python3 --version
    ```
* **Instalar (Exemplo - Debian/Ubuntu):**
    ```bash
    sudo apt update
    sudo apt install python3 python3-pip -y
    ```

#### Pip

Gerenciador de pacotes do Python, necessário para instalar bibliotecas do Python, incluindo o Robot Framework.

* **Verificar Instalação:**
    ```bash
    pip3 --version
    ```
* **Instalar (Geralmente vem com o Python, se não):**
    ```bash
    sudo apt install python3-pip -y
    ```

#### Java (JDK)

Necessário para a execução de testes com JUnit.

* **Verificar Instalação:**
    ```bash
    java -version
    ```
* **Instalar (Exemplo - Debian/Ubuntu - OpenJDK 11):**
    ```bash
    sudo apt update
    sudo apt install openjdk-11-jdk -y
    ```
* **Configurar Variáveis de Ambiente (Opcional - Pode ser necessário em alguns sistemas):**
    Adicione as seguintes linhas ao seu arquivo `~/.bashrc` ou `~/.zshrc` e recarregue com `source ~/.bashrc`:
    ```bash
    export JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64" # Ajuste o caminho se for diferente
    export PATH=$PATH:$JAVA_HOME/bin
    ```

#### Node.js e npm

Essenciais para Jest e Cypress.

* **Verificar Instalação:**
    ```bash
    node -v
    npm -v
    ```
* **Instalar (Exemplo - Usando nvm para gerenciamento de versões):**
    1.  **Instalar nvm (Node Version Manager):**
        ```bash
        curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh) | bash
        ```
        Feche e reabra seu terminal ou execute `source ~/.bashrc` (ou `~/.zshrc`).
    2.  **Instalar a versão LTS do Node.js:**
        ```bash
        nvm install --lts
        nvm use --lts
        ```

#### VS Code (Opcional, mas Recomendado)

Editor de código para desenvolvimento.

* **Verificar Instalação (se estiver no PATH):**
    ```bash
    code --version
    ```
* **Instalar (Instruções em [code.visualstudio.com/download](https://code.visualstudio.com/download)):**
    * Baixe o pacote `.deb` ou `.rpm` e instale.
    * Ou utilize o gerenciador de pacotes do seu sistema.

---

### 🛠️ Ferramentas de Teste

Após configurar os requisitos, instale e configure as ferramentas de teste. Para cada ferramenta, um exemplo básico será criado/mencionado para validar a instalação.

#### JUnit (Teste Unitário - Java)

Framework de teste para a linguagem Java.

* **Verificar Instalação/Configuração:**
    JUnit é geralmente adicionado como uma dependência no seu projeto Java (via Maven ou Gradle). Não há um "comando de instalação global".

* **Instalar/Configurar (Exemplo - Maven):**
    No seu arquivo `pom.xml`, adicione as seguintes dependências no bloco `<dependencies>`:

    ```xml
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-api</artifactId>
        <version>5.11.0</version> <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-engine</artifactId>
        <version>5.11.0</version> <scope>test</scope>
    </dependency>
    ```
    *(Verifique a pasta `junit-example` para um projeto Maven configurado.)*

* **Criação de Exemplo:**
    Crie um arquivo `src/test/java/com/example/MyMathTest.java`:
    ```java
    package com.example;

    import org.junit.jupiter.api.Test;
    import static org.junit.jupiter.api.Assertions.assertEquals;

    public class MyMathTest {

        @Test
        void testAddition() {
            assertEquals(5, MyMath.add(2, 3), "2 + 3 should be 5");
        }
    }

    // Classe a ser testada (src/main/java/com/example/MyMath.java)
    class MyMath {
        public static int add(int a, int b) {
            return a + b;
        }
    }
    ```
    Para executar os testes, navegue até a raiz do projeto Maven e execute:
    ```bash
    mvn test
    ```

#### Jest (Teste Unitário - JavaScript/TypeScript)

Framework de teste para aplicações JavaScript e TypeScript, com foco em simplicidade.

* **Verificar Instalação:**
    ```bash
    npm list -g jest # Verifica instalação global (não recomendado para projetos)
    # Ou, dentro de um projeto:
    npm list jest # Verifica instalação local do projeto
    ```

* **Instalar (Local ao Projeto - Recomendado):**
    Navegue até a raiz do seu projeto JavaScript/Node.js e execute:
    ```bash
    npm init -y # Se não tiver package.json
    npm install --save-dev jest
    ```
    Adicione um script de teste ao seu `package.json`:
    ```json
    {
      "name": "meu-projeto",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "jest"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "jest": "^29.7.0"
      }
    }
    ```
    *(Verifique a pasta `jest-example` para um projeto Node.js configurado.)*

* **Criação de Exemplo:**
    Crie um arquivo `sum.js`:
    ```javascript
    function sum(a, b) {
      return a + b;
    }
    module.exports = sum;
    ```
    Crie um arquivo `sum.test.js` na mesma pasta:
    ```javascript
    const sum = require('./sum');

    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
    ```
    Para executar os testes:
    ```bash
    npm test
    ```

#### Cypress (Teste E2E - JavaScript)

Framework de automação de testes End-to-End para aplicações web.

* **Verificar Instalação:**
    ```bash
    npm list -g cypress # Verifica instalação global (não recomendado para projetos)
    # Ou, dentro de um projeto:
    npm list cypress # Verifica instalação local do projeto
    ```

* **Instalar (Local ao Projeto - Recomendado):**
    Navegue até a raiz do seu projeto web (ou crie um novo) e execute:
    ```bash
    npm init -y # Se não tiver package.json
    npm install --save-dev cypress
    ```
    *(Verifique a pasta `cypress-example` para um projeto Node.js/Cypress configurado.)*

* **Configurar e Abrir Cypress:**
    ```bash
    npx cypress open
    ```
    Isso abrirá a interface do Cypress, onde você pode configurar seu projeto e ver os testes existentes. Na primeira vez, ele criará os arquivos de configuração e exemplos.

* **Criação de Exemplo:**
    Após `npx cypress open`, o Cypress cria uma pasta `cypress/e2e`. Crie um arquivo `cypress/e2e/my_first_test.cy.js`:
    ```javascript
    describe('My First Test', () => {
      it('Visits the Google homepage', () => {
        cy.visit('[https://www.google.com](https://www.google.com)');
        cy.contains('Pesquisar').should('be.visible'); // Ou outro elemento visível na página
      });
    });
    ```
    No Cypress Test Runner (a interface que abriu com `npx cypress open`), clique em `my_first_test.cy.js` para executá-lo.

#### Robot Framework (Teste E2E - Python)

Framework de automação de testes com uma sintaxe baseada em palavras-chave, ideal para automação de testes E2E e aceitação.

* **Verificar Instalação:**
    ```bash
    robot --version
    ```

* **Instalar:**
    Garanta que o `pip` esteja instalado (veja seção de Requisitos).
    ```bash
    pip install robotframework
    pip install robotframework-seleniumlibrary # Para testes web
    ```

* **Configurar (Drivers de Navegador):**
    Para testes web com `SeleniumLibrary`, você precisará do driver do navegador correspondente (ex: `chromedriver` para Chrome, `geckodriver` para Firefox). Baixe o driver e adicione-o ao seu PATH do sistema, ou coloque-o na mesma pasta dos seus testes.

    * **ChromeDriver:** [sites.google.com/chromium.org/driver](https://sites.google.com/chromium.org/driver/)
    * **GeckoDriver:** [github.com/mozilla/geckodriver/releases](https://github.com/mozilla/geckodriver/releases)

    *(Verifique a pasta `robotframework-example` para um projeto Robot Framework configurado.)*

* **Criação de Exemplo:**
    Crie um arquivo `Google Search.robot`:
    ```robotframework
    *** Settings ***
    Library    SeleniumLibrary

    *** Variables ***
    ${BROWSER}    chrome
    ${URL}        [https://www.google.com](https://www.google.com)

    *** Test Cases ***
    Search for Robot Framework
        Open Browser    ${URL}    ${BROWSER}
        Input Text      name=q    Robot Framework
        Click Button    name=btnK
        Page Should Contain    robotframework.org
        Close Browser
    ```
    Para executar os testes:
    ```bash
    robot Google Search.robot
    ```

---

## 📂 Estrutura do Repositório
