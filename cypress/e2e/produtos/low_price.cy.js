describe('Sauce Demo - filtrar por preço e adicionar o mais barato ao carrinho', () => {
  it('entra com sucesso, filtra low to high e adiciona o produto mais barato dinamicamente', () => {
    cy.visit('https://www.saucedemo.com')

    // Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')

    // Filtra do menor para o maior preço
    cy.get('[data-test="product-sort-container"]').select('lohi') // 'lohi' é o value real do select no SauceDemo
    
    // Pega todos os elementos de preço na página
    cy.get('.inventory_item_price').then(($prices) => {
      
      // 1. Converte os elementos jQuery extraídos em um array de números
      const prices = Cypress.$.makeArray($prices).map((el) => {
        return parseFloat(el.innerText.replace('$', '')) // Remove o '$' e converte '7.99' para número decimal
      })

      // 2. Encontra o menor valor matemático do array
      const minPrice = Math.min(...prices)

      // 3. Interage com o primeiro item da lista (que deve ser o mais barato após o filtro)
      cy.get('.inventory_item').first().within(() => {
        
        // Valida se o preço do primeiro item realmente é igual ao menor preço encontrado na página
        cy.get('.inventory_item_price').should('contain', `$${minPrice}`)
        
        // Clica no botão de adicionar. (O SauceDemo usa IDs dinâmicos como 'add-to-cart-sauce-labs-onesie',
        // então buscar pelo texto do botão é mais seguro dentro desse escopo).
        cy.contains('button', 'Add to cart').click()
      })
    })

    // Valida se o carrinho foi atualizado
    cy.get('.shopping_cart_badge').should('have.text', '1')

    // Entra no shopping cart para visualizar o produto adicionado
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('.cart_item').should('have.length', 1)
  })
})