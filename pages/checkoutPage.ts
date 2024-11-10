import { Page, expect, Locator } from '@playwright/test'

export class CheckoutPage {
    readonly page: Page
    readonly txtFirstName: Locator
    readonly txtLastName: Locator
    readonly txtPostalCode: Locator
    readonly btnContinue: Locator
    readonly btnCheckout: Locator

    constructor(page: Page) {
        this.page = page
        this.txtFirstName = page.locator('#first-name')
        this.txtLastName = page.locator('#last-name')
        this.txtPostalCode = page.locator('#postal-code')
        this.btnContinue = page.getByText('Continue')
        this.btnCheckout = page.getByText('Checkout')
    }

    async validateFirstNameField(errorMessage) {
        await this.page.waitForLoadState()
        await this.btnCheckout.click()
        await this.btnContinue.click()

        const errorFirstName = await this.page.textContent('h3')
        await expect(errorFirstName).toEqual(errorMessage)
    }

    async validateLastNameField(firstName, errorMessage) {
        await this.page.waitForLoadState()
        await this.btnCheckout.click()
        await this.btnContinue.click()
        await this.txtFirstName.fill(firstName)
        await this.btnContinue.click()

        const errorLastName = await this.page.textContent('h3')
        await expect(errorLastName).toEqual(errorMessage)
    }

    async validatePostalCodeField(firstName, lastName, errorMessage) {
        await this.page.waitForLoadState()
        await this.btnCheckout.click()
        await this.txtFirstName.fill(firstName)
        await this.txtLastName.fill(lastName)
        await this.btnContinue.click()

        const errorPostal = await this.page.textContent('h3')
        await expect(errorPostal).toEqual(errorMessage)
    }

}