const { Given } = require('@cucumber/cucumber');
const LoginPage = require('../pages/loginPage');

Given('user is logged in', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.login(
    process.env.VALID_USERNAME,
    process.env.VALID_PASSWORD
  );
});