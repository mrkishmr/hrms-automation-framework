class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardHeader = page.locator('h6.oxd-text--h6');

    this.dashboardHeader = page.locator(
      'h6:has-text("Dashboard")'
    );
    this.userProfileName = page.locator('.oxd-userdropdown-name');
  }

  async isDashboardVisible() {
    return await this.dashboardHeader.isVisible();
  }

  async waitForDashboard() {
    await this.page.waitForURL('**/dashboard/**', {
      timeout: 15000
    });

    await this.dashboardHeader.waitFor({
      state: 'visible',
      timeout: 15000
    });
  }

  async isUserProfileVisible(){
    await this.userProfileName.waitFor({ state: 'visible' });
  }
}

module.exports = DashboardPage;