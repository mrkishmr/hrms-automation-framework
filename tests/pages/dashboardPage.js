class DashboardPage {
  constructor(page) {
    this.page = page;

    this.dashboardHeader = page.locator('h6:has-text("Dashboard")');
    this.userProfileMenu = page.locator('.oxd-userdropdown-name');
  }

  async waitForDashboardToLoad() {
    await this.dashboardHeader.waitFor({ state: 'visible', timeout: 10000 });
  }

  async isUserProfileVisible() {
    await this.userProfileMenu.waitFor({ state: 'visible' });
  }
}

module.exports = DashboardPage;