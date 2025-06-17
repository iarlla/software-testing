import LoginPage from '../support/pages/LoginPage';
import ProductsPage from '../support/pages/ProductsPage';
import users from '../fixtures/users.json';

describe('Login and Logout Functionality', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should allow a standard user to login successfully and then logout', () => {
    LoginPage.login(users.standardUser.username, users.standardUser.password);
    ProductsPage.verifyProductsPageLoaded();
    cy.url().should('include', '/inventory.html'); // Verify URL

    ProductsPage.clickBurgerMenu();
    ProductsPage.clickLogoutButton();
    LoginPage.verifyLoginPageLoaded();
    cy.url().should('eq', 'https://www.saucedemo.com/v1/'); // Verify URL after logout
  });

  it('should display an error message for invalid credentials', () => {
    LoginPage.login('invalid_user', 'invalid_password');
    LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
  });

  it('should display an error message for locked out user', () => {
    LoginPage.login(users.lockedOutUser.username, users.lockedOutUser.password);
    LoginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
  });
});
