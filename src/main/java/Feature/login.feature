Feature: user logs in to Take alot

Scenario Outline: Take Alot Login Test Scenario

  Given user is already on login page
  When user is on home screen
  Then user clicks login button
  Then user enters "<username>" and "<password>"
  Then user is on Home page screen
  Then close the browser


Examples:
  | username | password |
  | s.qhaji@mail.com | Password123 |









