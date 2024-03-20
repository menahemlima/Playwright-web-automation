import {test, Page, expect } from "@playwright/test"
import { LoginPage } from "./pages/login.page"
import { ProductPage } from "./pages/products.page"


test.describe("Funcionalidade: Produtos", async () => {
    let page: Page

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
    })

    test("Cenário 03: Adicionar backpack no carrinho", async () =>{
        const loginPage = new LoginPage(page)
        const productPage = new ProductPage(page)

        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await productPage.addProduct(1, "1","1","Sauce Labs Backpack",process.env.DESCRIPTION_ITEM01,"29.99")
    })

    test("Cenário 04: Remover produto do carrinho", async () =>{
        const loginPage = new LoginPage(page)
        const productPage = new ProductPage(page)

        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await productPage.addProduct(2, "1","1","Sauce Labs Bike Light",process.env.DESCRIPTION_ITEM02,"9.99")
        await productPage.removeProductOfCart()
    })

    test.afterEach(async () => {
        const loginPage = new LoginPage(page)

        await loginPage.resetApp()
    })

    test.afterAll(async () => {
        await page.close()
    })

})