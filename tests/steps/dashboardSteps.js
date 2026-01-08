const { Then } = require('@cucumber/cucumber');
const DashboardPage = require('../pages/dashboardPage');

Then('user should be on the dashboard page', async function () {
  this.dashboardPage = new DashboardPage(this.page);
  await this.dashboardPage.waitForDashboard();
});

Then('dashboard header should be visible', async function () {
  await this.dashboardPage.waitForDashboard();
});

Then('user profile menu should be visible', async function () {
  await this.dashboardPage.isUserProfileVisible();
});