Feature: sauce demo login functionality

  Background:
    # Given user open "chrome" browser
    Given user navigate to "https://www.saucedemo.com"

    @negative @errormsg @regression
  Scenario Outline: verify user able to see error msg for <scenario>
    When user enter "<username>" in username
    And user enter "<password>" in password
    And user click on login button
    Then user validate error msg "<errormsg>"

    Examples:
      | scenario       | username      | password     | errormsg |
      | empty username |               | secret_sauce |          |
      | empty password | standard_user |              |          |
      | invalid creds  | adfadsfas     | adasdfds     |          |

  @positive @smoke @sanity
  Scenario: verify user able to see dashboard for valid username and valid password
    When user enter "standard_user" in username
    And user enter "secret_sauce" in password
    And user click on login button
    Then user validate "https://sdfas"
