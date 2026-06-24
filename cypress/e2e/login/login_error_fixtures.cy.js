describe('SauceDemo login error', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('fails login using fixtures/fail_user.json', () => {
    cy.fixture('fail_user').then((users) => {
      users.forEach((user) => {
        cy.get('#user-name').clear().type(user.username);
        cy.get('#password').clear().type(user.password);
        cy.get('#login-button').click();

        cy.get('[data-test="error"]').should('be.visible')
          .and('contain.text', 'Epic sadface');
        
        cy.visit('https://www.saucedemo.com/');
      });
    });
  });
});
