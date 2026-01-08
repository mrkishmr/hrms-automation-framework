const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const LoginPage = require('../pages/loginPage');
const DashboardPage = require('../pages/dashboardPage');

Given('user logs out', async function () {
  await this.dashboardPage.logout();
});

When('user navigates to dashboard URL', async function () {
  await this.page.goto(process.env.DASHBOARD_URL, {
    waitUntil: 'domcontentloaded'
  });
});

When('user refreshes the page', async function () {
  await this.page.reload({ waitUntil: 'domcontentloaded' });
});

When('user navigates back in browser', async function () {
  await this.page.goBack();
});

When('user navigates forward in browser', async function () {
  await this.page.goForward();
});

Then('user should be redirected to login page', async function () {
  await expect(this.page).toHaveURL(/auth\/login/);
});