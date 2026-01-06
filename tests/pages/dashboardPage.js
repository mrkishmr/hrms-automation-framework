class dashboardPage {
   constructor(page) {
    this.page = page;

    this.dashboardHeader = page.locator(
      'h6:has-text("Dashboard")'
    );
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
}

module.exports = dashboardPage;