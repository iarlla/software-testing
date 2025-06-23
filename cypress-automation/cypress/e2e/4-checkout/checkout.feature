Feature: Processo de Checkout

  Background:
    Given que eu estou logado com o usuário "standard_user"
    And eu adicionei o produto "Sauce Labs Onesie" ao carrinho

  Scenario: Finalizar uma compra com sucesso
    When eu inicio o processo de checkout
    And preencho minhas informações com nome "João", sobrenome "Silva" e CEP "12345-678"
    And continuo para o resumo da compra
    Then eu devo ver o resumo da compra com o produto "Sauce Labs Onesie"
    When eu finalizo a compra
    Then eu devo ver a mensagem de sucesso "THANK YOU FOR YOUR ORDER"