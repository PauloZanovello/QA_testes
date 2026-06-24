## 📁 QA Testes com Cypress

Este repositório é dedicado a estudos de **Quality Assurance (QA)** utilizando o **Cypress** como ferramenta de automação de testes.

### Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── login/
│   │   ├── login.cy.js                  # inclui log de erro de acesso com data e hora
│   │   ├── login_error_fixtures.cy.js   # testes de fail login usando fixtures locais
│   │   ├── login_error_API.cy.js        # testes de fail login consumindo API externa (randomuser.me)
│   │   ├── primeiroAcesso.cy.js
│   │   └── recuperarSenha.cy.js
│   ├── produtos/
│   │   └── produtos.cy.js
│   └── usuarios/
│       ├── cadastro.cy.js
│       └── exclusao.cy.js
├── fixtures/
│   └── fail_user.json                   # dados de login inválido para testes
└── cypress.config.js                    # configurado com task 'gravarLog' para salvar logs em disco
```

### Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de automação de testes end-to-end
- [SauceDemo](https://www.saucedemo.com/) - Site de demonstração para praticar automação de testes de software
- [RandomUser.me](https://randomuser.me/) - API pública utilizada para gerar dados de usuário em testes de login inválido
- Fixtures (Cypress) - Arquivos JSON (`cypress/fixtures/fail_user.json`) com credenciais inválidas reutilizáveis nos testes
- JavaScript - Linguagem de programação dos testes

### Como Executar os Testes

```bash
# Instalar dependências
npm install

# Abrir Cypress UI
npx cypress open

# Executar testes em modo headless
npx cypress run
```
