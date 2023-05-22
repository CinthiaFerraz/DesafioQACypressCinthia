Feature: Comportamento do elemento quadrado

    O quadrado deverá expandir e retrair conforme o usuário faça um clique longo em cima dele.

    Background:
        Given que estou na tela do quadrado
        When o quadrado está visível

    Scenario: Valida se o quadrado aumentou para 225px
        When eu der um clique longo em cima do quadrado
        Then o quadrado deve expandir para 225px de altura e largura

    Scenario: Valida se o quadrado diminuiu para 90px
        When eu der um clique longo em cima do quadrado
        When espero o final da transformação do quadrado
        When eu der um clique longo em cima do quadrado
        Then o quadrado deve retrair para 90px de altura e largura