Feature: Login/Logout to BugBank

  @positive_fail
  Scenario: User Login to BugBank
    Given the user go to BugBank app
    When the user enters credentials
    And the user click the access button
    Then the app proceeds to dashboard

  @negative
  Scenario: User Login to BugBank with invalid credentials
    Given the user go to BugBank app
    When the user enters invalid credentials
    And the user click the access button
    Then the app should pop up a menu indicates invalid message  