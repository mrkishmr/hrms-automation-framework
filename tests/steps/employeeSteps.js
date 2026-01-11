const { Given, When, Then } = require('@cucumber/cucumber');

const PimPage = require('../pages/pimPage');
const AddEmployeePage = require('../pages/addEmployeePage');

let pimPage;
let addEmployeePage;

When('the user creates a new employee', async function () {
  pimPage = new PimPage(this.page);
  addEmployeePage = new AddEmployeePage(this.page);

  // Generate unique employee data
  this.employee = {
    firstName: `Test-Auto${Date.now()}`,
    lastName: 'User'
  };

  // Navigate to PIM
  await pimPage.navigateToPIM();

  // Open Add Employee page
  await pimPage.clickAddEmployee();
  await addEmployeePage.waitForAddEmployeePage();

  // Fill and save employee
  await addEmployeePage.fillEmployeeDetails(this.employee);
  await addEmployeePage.saveEmployee();
});

Then('the employee should be created successfully', async function () {
  await addEmployeePage.waitForEmployeeCreation();
});