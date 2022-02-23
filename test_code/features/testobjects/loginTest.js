import { pages } from "../support/pages"

export class LoginTest {
    async fillEmailField(email) {
        await pages.basePage.getEmailInputField().setValue(email);
    }

    async fillPasswordField(password) {
        await pages.basePage.getPasswordInputField().setValue(password);
    }

    async assertInvalidCredentialMsg() {
        await (await pages.basePage.getInvalidCredentialMsg()).waitForDisplayed({ timeout: 5000 })
        await expect(await pages.basePage.getInvalidCredentialMsg()).toHaveText("Invalid username and/or password.")
    }
}