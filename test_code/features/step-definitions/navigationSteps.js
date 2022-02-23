import { Given, When, Then } from '@wdio/cucumber-framework';
import {tests} from "../support/tests"

Given("User has opened Oracle Profile page", async function() {
    await tests.navigationTest.openOracleProfilePage()
});

When ("User presses the sign in button", async function() {
    await tests.navigationTest.pressSignInButton()
});