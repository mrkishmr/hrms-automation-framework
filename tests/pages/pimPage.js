class PimPage {
  constructor(page) {
    this.page = page;

    this.pimMenu = page.getByRole('link', { name: 'PIM' });
    this.employeeListTab = page.getByRole('link', { name: 'Employee List' });
    this.addEmployeeButton = page.getByRole('button', { name: 'Add' });
  }

  async navigateToPIM() {
    await this.pimMenu.click();
    await this.employeeListTab.waitFor({ state: 'visible' });
    await this.employeeListTab.click();
  }

  async clickAddEmployee() {
    await this.addEmployeeButton.click();
  }
}

module.exports = PimPage;