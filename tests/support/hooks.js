const { Before, After } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');

Before(async function () {
  const browserName = process.env.BROWSER || 'chromium';
  const isCI = process.env.CI === 'true';

  const launchOptions = {
    headless: isCI,   // headless in CI, headed locally
    slowMo: isCI ? 0 : 50 // optional: slow down locally
  };

  if (browserName === 'edge') {
    this.browser = await chromium.launch({
      channel: 'msedge',
      ...launchOptions
    });
  } else if (browserName === 'firefox') {
    this.browser = await firefox.launch(launchOptions);
  } else if (browserName === 'webkit') {
    this.browser = await webkit.launch(launchOptions);
  } else {
    this.browser = await chromium.launch(launchOptions);
  }

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.browser.close();
});