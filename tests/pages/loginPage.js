const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');

    this.errorMessage = page.locator('.oxd-alert-content-text');

    this.usernameRequiredMessage = page.locator(
      '//input[@name="username"]/ancestor::div[contains(@class,"oxd-input-group")]//span[contains(@class,"oxd-input-field-error-message")]'
    );

    this.passwordRequiredMessage = page.locator(
      '//input[@name="password"]/ancestor::div[contains(@class,"oxd-input-group")]//span[contains(@class,"oxd-input-field-error-message")]'
    );
  }

  async login(username, password) {
  console.log('LOGIN METHOD INPUTS →', { username, password });

  await this.usernameInput.waitFor({ state: 'visible' });
  await this.usernameInput.fill(username);

  await this.passwordInput.waitFor({ state: 'visible' });
  await this.passwordInput.fill(password);

  await this.loginButton.click();
}

  async waitForErrorMessage() {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText('Invalid credentials');
  }

  async waitForUsernameRequiredMessage() {
    await expect(this.usernameRequiredMessage).toBeVisible();
    await expect(this.usernameRequiredMessage).toHaveText('Required');
  }

  async waitForPasswordRequiredMessage() {
    await expect(this.passwordRequiredMessage).toBeVisible();
    await expect(this.passwordRequiredMessage).toHaveText('Required');
  }
}

module.exports = LoginPage;