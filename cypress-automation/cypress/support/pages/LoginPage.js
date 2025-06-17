class LoginPage {
  get usernameInput() {
    return cy.get('#user-name');
  }

  get passwordInput() {
    return cy.get('#password');
  }

  get loginButton() {
    return cy.get('#login-button');
  }

  get errorMessage() {
    return cy.get('[data-test="error"]');
  }

  visit() {
    cy.visit('/');
  }

  enterUsername(username) {
    this.usernameInput.type(username);
  }

  enterPassword(password) {
    this.passwordInput.type(password);
  }

  clickLoginButton() {
    this.loginButton.click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
  }

  verifyErrorMessage(message) {
    this.errorMessage.should('contain', message);
  }

  verifyLoginPageLoaded() {
    this.usernameInput.should('be.visible');
    this.passwordInput.should('be.visible');
    this.loginButton.should('be.visible');
  }
}

export default new LoginPage();
