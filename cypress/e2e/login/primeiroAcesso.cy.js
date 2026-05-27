describe('template spec', () => {

  it('Acessar o site SauceDemo e fazer o login e logout com sucesso', () => {

    cy.visit('https://saucedemo.com/')

    cy.contains('Swag Labs')

    cy.get('[data-test="username"]').type('standard_user')

    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.contains('Swag Labs')

    cy.get('#react-burger-menu-btn').click()

    cy.get('[data-test="logout-sidebar-link"]').click()

  })

})