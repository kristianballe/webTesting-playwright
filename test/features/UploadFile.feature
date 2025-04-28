Feature: Upload a File

  @positive
  Scenario: Upload a file
    Given the user go to herokuapp
    When the user chooses a file
    And the user click the upload button
    Then the user should successfully upload a file
