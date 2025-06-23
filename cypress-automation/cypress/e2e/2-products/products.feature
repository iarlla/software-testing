Feature: Funcionalidades dos Produtos

  Background:
    Given que eu estou logado com o usuário "standard_user"

  Scenario: Validar a exibição da lista de produtos
    Then eu devo ver uma lista de produtos

  Scenario: Visualizar detalhes de um produto
    When eu clico no produto "Sauce Labs Backpack"
    Then eu sou redirecionado para a página de detalhes do produto "Sauce Labs Backpack"

  Scenario Outline: Ordenar produtos
    When eu ordeno os produtos por "<ordem>"
    Then os produtos devem ser exibidos ordenados por "<tipo_de_ordem>"

    Examples:
      | ordem               | tipo_de_ordem |
      | Name (A to Z)       | nome_asc      |
      | Name (Z to A)       | nome_desc     |
      | Price (low to high) | preco_asc     |
      | Price (high to low) | preco_desc    |