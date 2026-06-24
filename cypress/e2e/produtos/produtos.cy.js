describe('Produtos - Saucedemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('Deve fazer login, confirmar título, adicionar um produto ao carrinho e finalizar a compra', () => {
    // Login
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Confirmar que está em "Swag Labs"
    cy.get('.app_logo').should('contain', 'Swag Labs');

    // Adicionar "Sauce Labs Bolt T-Shirt" ao carrinho
    cy.contains('Sauce Labs Bolt T-Shirt')
      .closest('.inventory_item')
      .find('button')
      .click();

    // Verificar que foi adicionado ao carrinho
    cy.get('.shopping_cart_badge').should('contain', '1');

    // Entrar no carrinho e visualizar a compra
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('contain', 'Sauce Labs Bolt T-Shirt');

    // Ir para o checkout
    cy.get('[data-test="checkout"]').click();
    // Preencher informações do checkout (exemplo)
    cy.get('[data-test="firstName"]').type('Paulo');
    cy.get('[data-test="lastName"]').type('Silva');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();
    // Confirmar resumo do pedido e finalizar
    cy.get('.cart_item').should('contain', 'Sauce Labs Bolt T-Shirt');
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('contain', 'Thank you for your order!');

    // Voltar para a página inicial
    cy.get('[data-test="back-to-products"]').click();

    // Fazer logout
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
  });
});
