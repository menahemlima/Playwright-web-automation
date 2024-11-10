import { Page, expect, Locator } from '@playwright/test'
import { loginLocators } from '../locators/loginLocators.ts';

export class LoginPage{
    readonly page: Page
    readonly txtUsername: Locator
    readonly txtPassword: Locator
    readonly btnLogin: Locator
    readonly btnMenu: Locator
    readonly btnReset: Locator
    readonly txtTitle: Locator
    readonly txtErrorMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.txtUsername = page.locator(loginLocators.txtUsername)
        this.txtPassword = page.locator(loginLocators.txtPassword)
        this.btnLogin = page.locator(loginLocators.btnLogin)
        this.btnReset = page.getByText(loginLocators.btnReset)
        this.btnMenu = page.locator(loginLocators.btnMenu)
        this.txtTitle = page.locator(loginLocators.txtTitle)
        this.txtErrorMessage = page.getByTestId(loginLocators.txtErrorMessage)
    }

    async login(url, user, password) {
        await this.page.goto(url)
        await this.page.waitForLoadState()
        await this.txtUsername.fill(user)
        await this.txtPassword.fill(password)
        await this.btnLogin.click()
        await this.page.waitForLoadState()
    }

    async validateLoginSucesso(titulo) {
        await expect(this.txtTitle).toContainText(titulo)
    }

    async validateLoginFalha(errorMessage) {
        const text = await this.page.textContent('h3')

        await expect(text).toEqual(errorMessage)
    }

    async resetApp() {
        await this.btnMenu.click()
        await this.btnReset.click()
    }
}