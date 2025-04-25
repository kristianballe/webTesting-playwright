Feature: Filter

  @positive_pass
  Scenario: filter the product from Z to A
    Given the user go to Swag labs
    When the user enters credentials in Swag labs
    And the user click the login button
    And the user click the filter to select Z to A
    Then the product should be in descending order by name
