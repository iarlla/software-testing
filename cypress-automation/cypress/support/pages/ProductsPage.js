class ProductsPage {
  get productsTitle() {
    return cy.get('.product_label');
  }

  get burgerMenuButton() {
    return cy.get('#react-burger-menu-btn');
  }

  get logoutLink() {
    return cy.get('#logout_sidebar_link');
  }

  get addToCartButton() {
    return cy.get('.btn_primary');
  }

  get removeButton() {
    return cy.get('.btn_secondary');
  }

  get shoppingCartBadge() {
    return cy.get('.shopping_cart_badge');
  }

  get shoppingCartLink() {
    return cy.get('.shopping_cart_link');
  }

  get productSortDropdown() {
    return cy.get('.product_sort_container');
  }

  get productNames() {
    return cy.get('.inventory_item_name');
  }

  get productPrices() {
    return cy.get('.inventory_item_price');
  }

  verifyProductsPageLoaded() {
    this.productsTitle.should('contain', 'Products');
  }

  clickBurgerMenu() {
    this.burgerMenuButton.click();
  }

  clickLogoutButton() {
    this.logoutLink.click();
  }

  addProductToCart(productName) {
    cy.contains('.inventory_item_name', productName)
      .parents('.inventory_item')
      .find(this.addToCartButton)
      .click();
  }

  removeProductFromCart(productName) {
    cy.contains('.inventory_item_name', productName)
      .parents('.inventory_item')
      .find(this.removeButton)
      .click();
  }

  verifyCartBadgeCount(count) {
    this.shoppingCartBadge.should('have.text', count);
  }

  goToCart() {
    this.shoppingCartLink.click();
  }

  sortProducts(option) {
    this.productSortDropdown.select(option);
  }

  getProductNames() {
    return this.productNames.then(<span class="math-inline">elements \=\> \{
return Cypress\.</span>.map($elements, el => el.innerText);
    });
  }

  getProductPrices() {
    return this.productPrices.then(<span class="math-inline">elements \=\> \{
return Cypress\.</span>.map(<span class="math-inline">elements, el \=\> parseFloat\(el\.innerText\.replace\('</span>', '')));
    });
  }
}

export default new ProductsPage();
