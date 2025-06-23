Feature: Login e Logout

  Scenario: Login com sucesso
    Given que eu estou na página de login
    When eu insiro o usuário "standard_user" e a senha "secret_sauce"
    And clico no botão de login
    Then eu devo ser redirecionado para a página de produtos

  Scenario: Tentativa de login com usuário bloqueado
    Given que eu estou na página de login
    When eu insiro o usuário "locked_out_user" e a senha "secret_sauce"
    And clico no botão de login
    Then eu devo ver a mensagem de erro "Epic sadface: Sorry, this user has been locked out."

  Scenario: Logout após login bem-sucedido
    Given que eu estou logado com o usuário "standard_user"
    When eu clico no menu de hambúrguer
    And clico no link de logout
    Then eu devo ser redirecionado para a página de login