const { When, Then } = require('@cucumber/cucumber');
const HeaderPage = require('../pages/headerPage');
const LoginPage = require('../pages/loginPage');
const { expect } = require('@playwright/test');

When('user logs out', async function () {
  this.headerPage = new HeaderPage(this.page);
  await this.headerPage.logout();
});

Then('user should be redirected to the login page', async function () {
  const loginPage = new LoginPage(this.page);
  await expect(loginPage.usernameInput).toBeVisible();
});