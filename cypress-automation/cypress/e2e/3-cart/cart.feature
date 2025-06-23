Feature: Funcionalidades do Carrinho

  Background:
    Given que eu estou logado com o usuário "standard_user"

  Scenario: Adicionar um produto ao carrinho
    When eu adiciono o produto "Sauce Labs Backpack" ao carrinho
    Then o ícone do carrinho deve exibir "1"
    And quando eu vou para a página do carrinho
    Then eu devo ver o produto "Sauce Labs Backpack" no carrinho

  Scenario: Remover um produto do carrinho
    Given que eu adicionei o produto "Sauce Labs Fleece Jacket" ao carrinho
    When eu vou para a página do carrinho
    And removo o produto "Sauce Labs Fleece Jacket" do carrinho
    Then o carrinho deve estar vazio