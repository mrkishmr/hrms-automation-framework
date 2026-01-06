const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber-report.json',
  output: './reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
  browser: {
    name: 'Microsoft Edge',
    version: 'latest'
  },
  platform: {
    name: process.platform
  },
  executed: process.env.CI ? 'CI' : 'Local'
}
};

reporter.generate(options);