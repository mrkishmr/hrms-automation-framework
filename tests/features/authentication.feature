Feature: User Authentication

Scenario: Logged in Successfully with valid credentials
    Given user is on the login page
    When the user logs in with the username "Admin" and password "admin123"
    Then user should be logged in and must redirect to the dashboard page

Scenario: Login failed with invalid credentials
    Given user is on the login page
    When the user logs in with the username "Admin1" and password "admin12"
    Then An Error Message must be displayed on the screen