class EmployeeListPage {
  constructor(page) {
    this.page = page;

    // Employee ID filter input (label-based)
    this.employeeIdInput = page.locator(
      'label:has-text("Employee Id") >> xpath=following::input[1]'
    );

    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.resetButton = page.getByRole('button', { name: 'Reset' });

    this.employeeTableRow = page.locator('.oxd-table-body .oxd-table-row');
    this.editButton = page.locator(
      '.oxd-table-body .oxd-table-row button:has(i.bi-pencil-fill)'
    );
    this.deleteButton = page.locator(
      '.oxd-table-body .oxd-table-row button:has(i.bi-trash)'
    );

    this.confirmDeleteButton = page.getByRole('button', {
      name: 'Yes, Delete'
    });
  }

  async searchByEmployeeId(employeeId) {
    await this.employeeIdInput.waitFor({ state: 'visible', timeout: 15000 });
    await this.employeeIdInput.fill(employeeId);
    await this.searchButton.click();
  }

  async waitForSearchResult() {
    await this.employeeTableRow.first().waitFor({
      state: 'visible',
      timeout: 15000
    });
  }

  async isEmployeePresent() {
    return (await this.employeeTableRow.count()) > 0;
  }

  async clickEdit() {
    await this.editButton.first().click();
  }

  async clickDelete() {
  await this.deleteButton.first().click();
  await this.confirmDeleteButton.waitFor({ state: 'visible' });
  await this.confirmDeleteButton.click();
}

}

module.exports = EmployeeListPage;