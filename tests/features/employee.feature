@employee
Feature: Employee Management

  Background:
    Given user is logged in to the portal

  @create
  Scenario: Create a new employee
    When the user creates a new employee
    Then the employee should be created successfully

  @read
  Scenario: Search for an existing employee
    When the user searches for the employee
    Then the employee should be visible in the results

  @update
  Scenario: Update employee details
    When the user updates the employee last name
    Then the employee details should be updated successfully

  @delete
  Scenario: Delete an existing employee
    When the user deletes the employee
    Then the employee should be removed from the system