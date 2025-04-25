Feature: Add to Cart

  @positive
  Scenario: User Login to Swag Labs
    Given the user go to Swag labs
    When the user enters credentials in Swag labs
    And the user click the login button
    And the user add to cart an item
    Then the app should add an item to the cart
