const { Then } = require('@cucumber/cucumber');
const DashboardPage = require('../pages/DashboardPage');

Then('user should be on the dashboard page', async function () {
  this.dashboardPage = new DashboardPage(this.page);
  await this.dashboardPage.waitForDashboardToLoad();
});

Then('dashboard header should be visible', async function () {
  await this.dashboardPage.waitForDashboardToLoad();
});

Then('user profile menu should be visible', async function () {
  await this.dashboardPage.isUserProfileVisible();
});