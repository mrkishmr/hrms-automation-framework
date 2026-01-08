const reporter = require('cucumber-html-reporter');

const browserEnv = process.env.BROWSER || 'chromium';

const browserLabel =
  browserEnv === 'edge' ? 'Microsoft Edge' :
  browserEnv === 'firefox' ? 'Firefox' :
  browserEnv === 'webkit' ? 'WebKit (Safari)' :
  'Chromium';

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber-report.json',
  output: './reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    Browser: browserLabel,
    Platform: process.platform,
    Executed: process.env.CI === 'true' ? 'CI' : 'Local'
  }
};

reporter.generate(options);