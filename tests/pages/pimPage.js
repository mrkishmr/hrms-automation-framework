class PimPage {
  constructor(page) {
    this.page = page;

    // Main menu
    this.pimMenu = page.getByRole('link', { name: 'PIM' });

    // Page header
    this.pageHeader = page.locator('h6:has-text("PIM")');

    // Actions
    this.addEmployeeButton = page.getByRole('button', { name: 'Add' });
  }

  async navigateToPIM() {
    await this.pimMenu.click();
    await this.page.waitForURL('**/pim/**', { timeout: 10000 });
    await this.pageHeader.waitFor({ state: 'visible', timeout: 10000 });
  }

  async clickAddEmployee() {
    await this.addEmployeeButton.click();
  }
}

module.exports = PimPage;