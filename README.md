## 📁 QA Testes com Cypress

Este repositório é dedicado a estudos de **Quality Assurance (QA)** utilizando o **Cypress** como ferramenta de automação de testes.

### Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── login/
│   │   ├── login.cy.js          # inclui log de erro de acesso com data e hora
│   │   ├── primeiroAcesso.cy.js
│   │   └── recuperarSenha.cy.js
│   ├── produtos/
│   │   └── produtos.cy.js
│   └── usuarios/
│       ├── cadastro.cy.js
│       └── exclusao.cy.js
└── cypress.config.js            # configurado com task 'gravarLog' para salvar logs em disco
```

### Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de automação de testes end-to-end
- [SauceDemo](https://www.saucedemo.com/) - Site de demonstração para praticar automação de testes de software
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
