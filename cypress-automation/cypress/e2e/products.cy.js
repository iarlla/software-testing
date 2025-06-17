import LoginPage from '../support/pages/LoginPage';
import ProductsPage from '../support/pages/ProductsPage';
import users from '../fixtures/users.json';

describe('Products Functionality', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login(users.standardUser.username, users.standardUser.password);
    ProductsPage.verifyProductsPageLoaded();
  });

  it('should display all products after login', () => {
    ProductsPage.productNames.should('have.length', 6); // There are 6 products
    ProductsPage.productNames.eq(0).should('contain', 'Sauce Labs Backpack');
    ProductsPage.productNames.eq(1).should('contain', 'Sauce Labs Bike Light');
    // ... continue checking all product names if needed
  });

  it('should allow viewing product details', () => {
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack').click();
    cy.url().should('include', '/inventory-item.html?id=4');
    cy.get('.inventory_details_name').should('contain', 'Sauce Labs Backpack');
    cy.get('.inventory_details_desc').should('be.visible');
    cy.get('.inventory_details_price').should('contain', '$29.99');
  });

  it('should sort products by Name (A to Z)', () => {
    ProductsPage.sortProducts('az');
    ProductsPage.getProductNames().then(names => {
      const sortedNames = [...names].sort();
      expect(names).to.deep.equal(sortedNames);
    });
  });

  it('should sort products by Name (Z to A)', () => {
    ProductsPage.sortProducts('za');
    ProductsPage.getProductNames().then(names => {
      const sortedNames = [...names].sort().reverse();
      expect(names).to.deep.equal(sortedNames);
    });
  });

  it('should sort products by Price (low to high)', () => {
    ProductsPage.sortProducts('lohi');
    ProductsPage.getProductPrices().then(prices => {
      const sortedPrices = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sortedPrices);
    });
  });

  it('should sort products by Price (high to low)', () => {
    ProductsPage.sortProducts('hilo');
    ProductsPage.getProductPrices().then(prices => {
      const sortedPrices = [...prices].sort((a, b) => b - a);
      expect(prices).to.deep.equal(sortedPrices);
    });
  });
});
