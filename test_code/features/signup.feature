Feature: Oracle sign up test

    Scenario: Sign up with new user
        Given User has opened Oracle Profile page
        When User presse the Create Account button 
        And User fills out create account form
        And User presses the Sign Up button
        Then User id redirected to Check Your Email page