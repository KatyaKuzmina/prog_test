Feature: Oracle Login test

Scenario Outline: Invalid login with user
  Given User has opened Oracle Profile page
  When User inputs <email> as the email
  And User inputs <password> as the password
  And User presses the sign in button
  Then User sees invalid credentials message

  Examples:
      | email               | password            |
      | dhsgjsdh@gmail.com  | Password123         |
      | dhsdg4dh@gmail.com  | Password123sdf      |
      | d3refwdsf@gmail.com | Passworsgdsad12dsg3 |
