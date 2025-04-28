Feature: Download a File

  @positive
  Scenario: Download a file
    Given the user go to herokuapp download
    When the user click the a download file
    Then the user should download a file
