@smoke @auth
Feature: Logout

Scenario: User logs out successfully
    Given user is logged in to the portal
    When user logs out
    Then user should be redirected to the login page