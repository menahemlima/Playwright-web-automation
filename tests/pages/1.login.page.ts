import { Page, expect, Locator } from '@playwright/test'

export class LoginPage {
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
        this.txtUsername = page.locator('#user-name')
        this.txtPassword = page.locator('input[name=password]')
        this.btnLogin = page.locator('.submit-button.btn_action')
        this.btnReset = page.getByText('Reset App State')
        this.btnMenu = page.locator('#react-burger-menu-btn')
        this.txtTitle = page.locator('.title')
        this.txtErrorMessage = page.getByTestId('.error')
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