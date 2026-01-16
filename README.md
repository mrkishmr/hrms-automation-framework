# HRMS Automation Framework (Playwright + Cucumber)

## Project Overview
This repository contains a personal automation testing framework developed to demonstrate end-to-end UI automation of an HRMS (Human Resource Management System) using Playwright and Cucumber (BDD) with JavaScript. The project is intended as a portfolio-grade framework focusing on test design, maintainability, and real-world QA practices rather than exhaustive functional coverage. The application under test is the OrangeHRM open-source demo website.

The framework automates authentication workflows and employee management (CRUD) operations while following industry-standard automation patterns such as Page Object Model (POM) and Behavior Driven Development (BDD).

## Project Objectives
The primary objectives of this project are to:
- Apply Behavior Driven Development (BDD) using Gherkin syntax
- Build a scalable UI automation framework using Playwright and Cucumber
- Automate authentication and employee management workflows
- Practice Page Object Model for maintainable automation code
- Handle test data responsibly on an open-source demo application
- Execute tests using tags and environment-based configuration
- Demonstrate CI readiness for automated test execution

## Technology Stack
- Playwright
- Cucumber (BDD)
- JavaScript (Node.js)
- dotenv for environment configuration
- GitHub Actions (CI-ready)
- OrangeHRM Open Source Demo Application

## Project Structure
HRMS-Automation-Framework/
├── tests/
│   ├── features/          Gherkin feature files
│   ├── steps/             Step definitions
│   ├── pages/             Page Object classes
│   └── support/           Hooks and Cucumber World setup
├── .env.example           Sample environment variables
├── package.json
└── README.md

## Functional Coverage
Authentication:
- Login with valid credentials
- Login with invalid credentials
- Validation of error messages
- Logout functionality

Employee Management (PIM – CRUD):
- Create a new employee
- Search employee by Employee ID
- Update employee details
- Delete employee

A single employee lifecycle scenario is implemented in which the same employee record is created, searched, updated, and deleted. This approach avoids creating unnecessary dummy records on the open-source demo application and reflects ethical test data handling.

## Sample BDD Scenario
@employee @crud
Scenario: Manage employee operations
  When the user creates a new employee
  And the user searches for the employee
  And the user updates the employee details
  And the user deletes the employee
  Then the employee should be removed from the system

## Environment Configuration
Environment variables are managed using application-scoped names to avoid conflicts with OS-level variables such as Windows USERNAME.

Example .env configuration:
BASE_URL=https://opensource-demo.orangehrmlive.com
HRMS_USERNAME=Admin
HRMS_PASSWORD=admin123

## How to Run the Tests
Install dependencies:
npm install

Execute all tests:
npx cucumber-js

Execute tagged scenarios:
npx cucumber-js --tags "@crud"

## Test Design and QA Practices Applied
- Behavior Driven Development (BDD)
- Page Object Model (POM)
- Positive and negative test coverage
- Data-driven testing using Scenario Outline
- Reuse of test data to ensure ethical testing
- Clear separation of test logic and UI locators
- Reusable and maintainable step definitions
- CI-ready test execution

## CI Integration
- Designed to be executed using GitHub Actions
- Supports tagged execution for selective test runs
- Can be extended to include reporting and artifact storage

## Limitations and Future Enhancements
This project intentionally limits scope to focus on quality and learning objectives.

Current limitations:
- No cross-browser execution
- No parallel test execution
- No video or screenshot capture on failure
- Limited reporting customization

Future enhancements may include:
- Advanced test execution reports and artifacts
- Video recording on failures
- Parallel and cross-browser execution
- API-based test data setup and cleanup

## Author
M R Kishan
Quality Assurance Engineer
