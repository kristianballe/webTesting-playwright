Feature: Login/Logout to BugBank

  @positive_fail
  Scenario: User Login to BugBank
    Given the user go to BugBank app
    When the user enters credentials
    And the user click the access button
    Then the app proceeds to dashboard

  @positive
  Scenario: User Login to Swag Labs
    Given the user go to Swag labs
    When the user enters credentials in Swag labs
    And the user click the login button
    Then the app proceeds to inventory page

  @negative_pass
  Scenario: User Login to BugBank with invalid credentials
    Given the user go to BugBank app
    When the user enters invalid credentials
    And the user click the access button
    Then the app should pop up a menu indicates invalid message  