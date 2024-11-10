import { Page, expect, Locator } from '@playwright/test'
import { checkoutLocators } from '../locators/checkoutLocators.ts';

export class CheckoutPage {
    readonly page: Page
    readonly txtFirstName: Locator
    readonly txtLastName: Locator
    readonly txtPostalCode: Locator
    readonly btnContinue: Locator
    readonly btnCheckout: Locator

    constructor(page: Page) {
        this.page = page
        this.txtFirstName = page.locator(checkoutLocators.txtFirstName)
        this.txtLastName = page.locator(checkoutLocators.txtLastName)
        this.txtPostalCode = page.locator(checkoutLocators.txtPostalCode)
        this.btnContinue = page.getByText(checkoutLocators.btnContinue)
        this.btnCheckout = page.getByText(checkoutLocators.btnCheckout)
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