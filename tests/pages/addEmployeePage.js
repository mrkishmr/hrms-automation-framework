class AddEmployeePage {
  constructor(page) {
    this.page = page;

    // Page header
    this.pageHeader = page.locator('h6:has-text("Add Employee")');

    // Input fields
    this.firstNameInput = page.locator('input[name="firstName"]');
    this.middleNameInput = page.locator('input[name="middleName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');

    // Save button
    this.saveButton = page.locator('button:has-text("Save")');

    // Success indicator (Personal Details page)
    this.personalDetailsHeader = page.locator(
      'h6:has-text("Personal Details")'
    );
  }

  async waitForAddEmployeePage() {
    await this.pageHeader.waitFor({
      state: 'visible',
      timeout: 10000
    });
  }

  async fillEmployeeDetails(employee) {
    await this.firstNameInput.fill(employee.firstName);
    await this.lastNameInput.fill(employee.lastName);
  }

  async saveEmployee() {
    await this.saveButton.click();
  }

  async waitForEmployeeCreation() {
    await this.personalDetailsHeader.waitFor({
      state: 'visible',
      timeout: 15000
    });
  }
}

module.exports = AddEmployeePage;