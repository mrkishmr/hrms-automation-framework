const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pages/loginPage');
const DashboardPage = require('../pages/dashboardPage');

let loginPage;
let dashboardPage;

Given('user is on the login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.open(process.env.BASE_URL);
});

When('the user logs in with valid credentials', async function () {
  await loginPage.login(
    process.env.VALID_USERNAME,
    process.env.VALID_PASSWORD
  );
});

Then(
  'user should be logged in and must redirect to the dashboard page',
  async function () {
    dashboardPage = new DashboardPage(this.page);
    await dashboardPage.waitForDashboard();
  }
);

When('the user tries to login with invalid credentials', async function () {
  await loginPage.login(
    process.env.INVALID_USERNAME,
    process.env.INVALID_PASSWORD
  );
});

Then(
  'An Error Message must be displayed on the screen',
  async function () {
    await loginPage.waitForErrorMessage();
  }
);

When('the user logs in with only username', async function () {
  await loginPage.login(
    process.env.VALID_USERNAME,
    ''
  );
});

Then(
  'a required field message must be displayed under username field',
  async function () {
    await loginPage.waitForUsernameRequiredMessage();
  }
);

When('the user logs in with only password', async function () {
  await loginPage.login(
    '',
    process.env.VALID_PASSWORD
  );
});

Then(
  'a required field message must be displayed under password field',
  async function () {
    await loginPage.waitForPasswordRequiredMessage();
  }
);