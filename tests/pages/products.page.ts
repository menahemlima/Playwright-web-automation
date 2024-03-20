import { Page, expect, Locator } from '@playwright/test'

export class ProductPage {
    readonly page: Page
    readonly optBackpack: Locator
    readonly optBikeLight: Locator
    readonly btnShoppingCart: Locator
    readonly iconCart: Locator
    readonly qtdCart: Locator
    readonly nameItem: Locator
    readonly descItem: Locator
    readonly priceItem: Locator
    readonly btnContinue: Locator
    readonly btnRemove: Locator
    readonly btnCheckout: Locator

    constructor(page: Page) {
        this.page = page
        this.optBackpack = page.locator('#add-to-cart-sauce-labs-backpack')
        this.optBikeLight = page.locator('#add-to-cart-sauce-labs-bike-light')
        this.btnShoppingCart = page.locator('.shopping_cart_link')
        this.iconCart = page.locator('.shopping_cart_badge')
        this.qtdCart = page.locator('.cart_quantity')
        this.nameItem = page.locator('.inventory_item_name')
        this.descItem = page.locator('.inventory_item_desc')
        this.priceItem = page.locator('.inventory_item_price')
        this.btnContinue = page.getByText('Continue Shopping')
        this.btnCheckout = page.getByText('Checkout')
        this.btnRemove = page.getByText('Remove')
    }

    async addProduct(product, iconValue, qtd, nameItem, descItem, priceItem) {

        switch (product) {
            case 1:
                await this.optBackpack.click()
                break;
            case 2:
                await this.optBikeLight.click()
                break;
        }
        await expect(this.iconCart).toContainText(iconValue)
        await this.btnShoppingCart.click()
        await expect(this.qtdCart).toContainText(qtd)
        await expect(this.nameItem).toContainText(nameItem)
        await expect(this.descItem).toContainText(descItem)
        await expect(this.priceItem).toContainText(priceItem)
        await expect(this.btnContinue).toBeVisible()
        await expect(this.btnRemove).toBeVisible()
        await expect(this.btnCheckout).toBeVisible()
    }

    async removeProductOfCart() {
        await this.btnRemove.click()
        await this.page.waitForLoadState()
        await expect(this.btnContinue).toBeVisible()
        await expect(this.btnRemove).not.toBeVisible()
        await expect(this.btnCheckout).toBeVisible()
        await expect(this.iconCart).not.toBeVisible()
        await expect(this.qtdCart).not.toBeVisible()
        await expect(this.nameItem).not.toBeVisible()
        await expect(this.descItem).not.toBeVisible()
        await expect(this.priceItem).not.toBeVisible()
    }

}