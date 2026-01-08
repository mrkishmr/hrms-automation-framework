Feature: Session validation and navigation control

Background:
    Given user is logged in to the portal
    And user logs out

Scenario: User cannot access dashboard after logout
    When user navigates to dashboard URL
    Then user should be redirected to login page

Scenario: User cannot access dashboard without login
    When user navigates to dashboard URL
    Then user should be redirected to login page

Scenario: Session should not be restored on browser refresh after logout
    When user refreshes the page
    Then user should be redirected to login page

Scenario: Browser back and forward navigation should not restore session
    Given user is logged in to the portal
    And user logs out
    When user navigates back in browser
    And user navigates forward in browser
    Then user should be redirected to login page