describe('Login com dados da API', () => {
  it('Acessa saucedemo e preenche Username e Password com dados do randomuser.me', () => {
    for (let i = 0; i < 20; i++) {
      cy.request('GET', 'https://randomuser.me/api/').then((response) => {
        expect(response.status).to.eq(200)
        const user = response.body.results[0]
        const username = user.login.username
        const password = user.login.password

        cy.log(`Attempt ${i + 1}: using ${username}`)

        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').clear().type(username)
        cy.get('#password').clear().type(password)
        cy.get('#login-button').click()
      })
    }
  })
})
