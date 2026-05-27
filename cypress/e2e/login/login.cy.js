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

  it('deve exibir erro com credenciais inválidas', () => {
    cy.get('#user-name').type('invalid_user');
    cy.get('#password').type('invalid_password');
    cy.get('#login-button').click();

    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should('contain', 'Epic sadface');
  });
});