const { Before, After } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');

Before(async function () {
  const browserName = process.env.BROWSER || 'chromium';

  if (browserName === 'edge') {
    this.browser = await chromium.launch({
      channel: 'msedge',
      headless: true
    });
  } else if (browserName === 'firefox') {
    this.browser = await firefox.launch({ headless: true });
  } else if (browserName === 'webkit') {
    this.browser = await webkit.launch({ headless: true });
  } else {
    this.browser = await chromium.launch({ headless: true });
  }

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.browser.close();
});