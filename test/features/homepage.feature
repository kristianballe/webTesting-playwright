Feature: Testing Playwright with Cucumber

  @positive_pass
  Scenario: Visit Playwright homepage
    Given I open the Playwright homepage
    Then the title should be "Playwright"