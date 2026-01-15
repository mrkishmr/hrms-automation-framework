const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const PimPage = require('../pages/pimPage');
const AddEmployeePage = require('../pages/addEmployeePage');
const EmployeeListPage = require('../pages/employeeListPage');

let pimPage;
let addEmployeePage;
let employeeListPage;

//Create Employee Steps

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
  this.employee.employeeId = await addEmployeePage.getEmployeeId();
  await addEmployeePage.saveEmployee();
});

Then('the employee should be created successfully', async function () {
  await addEmployeePage.waitForEmployeeCreation();
});

//Search Employee Steps

When('the user searches for the employee', async function () {
  pimPage = new PimPage(this.page);
  employeeListPage = new EmployeeListPage(this.page);

    if (!this.employee?.employeeId) {
    throw new Error('Employee ID is undefined. Employee creation failed.');
  }

  await pimPage.navigateToPIM();

  await employeeListPage.searchByEmployeeId(this.employee.employeeId);
  await employeeListPage.waitForSearchResult();
});

Then('the employee should be visible in the search results', async function () {
  expect(await employeeListPage.isEmployeePresent()).toBeTruthy();
});

//Update Employee Steps

When('the user updates the employee details', async function () {
  addEmployeePage = new AddEmployeePage(this.page);

  // From search results → edit
  await employeeListPage.clickEdit();

  this.employee.updatedLastName = 'UpdatedUser';

  await addEmployeePage.updateLastName(this.employee.updatedLastName);
  await addEmployeePage.saveEmployee();
});

Then('the employee details should be updated successfully', async function () {
  await addEmployeePage.waitForEmployeeUpdate();
});

When('the user deletes the employee', async function () {
  await pimPage.navigateToPIM();

  await employeeListPage.searchByEmployeeId(this.employee.employeeId);
  await employeeListPage.waitForSearchResult();

  await employeeListPage.clickDelete();
});

Then('the employee should be removed from the system', async function () {
  await employeeListPage.searchByEmployeeId(this.employee.employeeId);

  expect(await employeeListPage.isEmployeePresent()).toBeFalsy();
});