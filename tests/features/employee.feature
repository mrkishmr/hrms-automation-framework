@employee
Feature: Employee Management

  Background:
    Given user is logged in to the portal

@employee @crud
Scenario: Manage employee operations
  When the user creates a new employee
  Then the employee should be created successfully

  When the user searches for the employee
  Then the employee should be visible in the search results

  When the user updates the employee details
  Then the employee details should be updated successfully

  When the user deletes the employee
  Then the employee should be removed from the system