class loginPage {
  
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');

    this.errorMessage = page.locator('.oxd-alert-content-text');

   this.usernameRequiredMessage = page.locator(
  '//input[@name="username"]/ancestor::div[contains(@class,"oxd-input-group")]/span'
);

    this.passwordRequiredMessage = page.locator(
  '//input[@name="password"]/ancestor::div[contains(@class,"oxd-input-group")]/span'
);

  }

  async open(baseUrl) {
    await this.page.goto(baseUrl);
  }

  async login(username, password) {
    if (username !== '') {
      await this.usernameInput.fill(username);
    }
    if (password !== '') {
      await this.passwordInput.fill(password);
    }
    await this.loginButton.click();
  }

  async waitForErrorMessage() {
  await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
}

async waitForUsernameRequiredMessage() {
  await this.usernameRequiredMessage.waitFor({ state: 'visible', timeout: 5000 });
}

async waitForPasswordRequiredMessage() {
  await this.passwordRequiredMessage.waitFor({ state: 'visible', timeout: 5000 });
}
}

module.exports = loginPage;