describe('Teste de Login - Saucedemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('deve fazer login com credenciais válidas', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.url().should('include', '/inventory');
    cy.get('.title').should('have.text', 'Products');
  });

  it('deve exibir erro ao tentar logar com dados inválidos', () => {
  cy.visit('https://www.saucedemo.com')

  cy.get('#user-name').type('invalid_user')
  cy.get('#password').type('invalid_password')
  cy.get('#login-button').click()

  // Captura o texto do elemento de erro
  cy.get('[data-test="error"]').invoke('text').then((textoErro) => {
    
    // 1. Mostra no painel do Cypress (o que você já vê na imagem)
    cy.log(`Mensagem de erro: ${textoErro}`)

    // 2. Envia para o arquivo de log externo com data e hora
    cy.task('gravarLog', `Mensagem de erro: ${textoErro}`)
  })
})
});