class dashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardHeader = page.locator('h6.oxd-text--h6');
  }

  async isDashboardVisible() {
    return await this.dashboardHeader.isVisible();
  }
}

module.exports = dashboardPage;