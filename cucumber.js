require('dotenv').config();

module.exports = {
  default: {
    require: [
      './tests/steps/**/*.js',
      './tests/support/**/*.js'
    ],
    paths: [
      './tests/features/**/*.feature'
    ],
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ],
    publishQuiet: true
  }
};