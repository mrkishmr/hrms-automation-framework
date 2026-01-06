Feature: User Authentication

Scenario: Logged in Successfully with valid credentials
    Given user is on the login page
    When the user logs in with valid credentials
    Then user should be logged in and must redirect to the dashboard page

Scenario: Login failed with invalid credentials
    Given user is on the login page
    When the user tries to login with invalid credentials
    Then An Error Message must be displayed on the screen

Scenario: Unable to login when only username is Given
    Given user is on the login page
    When the user logs in with only username
    Then a required field message must be displayed under password field

Scenario: Unable to login when only password is Given
    Given user is on the login page
    When the user logs in with only password
    Then a required field message must be displayed under username field