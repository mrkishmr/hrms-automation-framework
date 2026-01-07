require('dotenv').config();

const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');

setDefaultTimeout(60 * 1000);

Before(async function () {
  if (!process.env.BASE_URL) {
    throw new Error('BASE_URL is not defined in environment variables');
  }

  const browserName = process.env.BROWSER || 'chromium';
  const isCI = process.env.CI === 'true';

  this.browserLabel =
    browserName === 'edge' ? 'Microsoft Edge' :
    browserName === 'firefox' ? 'Firefox' :
    browserName === 'webkit' ? 'WebKit (Safari)' :
    'Chromium';

  const metadata = {
    browser: this.browserLabel,
    platform: process.platform,
    executed: isCI ? 'CI' : 'Local'
  };

  const launchOptions = {
    headless: isCI,
    slowMo: isCI ? 0 : 50
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

  await this.page.goto(process.env.BASE_URL, { waitUntil: 'networkidle' });
  await this.page.waitForSelector('input[name="username"]');
});

After(async function (scenario) {
  if (scenario.result?.status === 'FAILED' && this.page) {
    await this.page.screenshot({
      path: `reports/screenshots/${scenario.pickle.name}.png`,
      fullPage: true
    });
  }

  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
});