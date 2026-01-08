Feature: Dashboard Page

Scenario: User is able to view Dashboard Page
    Given user is logged in to the portal
    Then user should be on the dashboard page
    And dashboard header should be visible
    And user profile menu should be visible