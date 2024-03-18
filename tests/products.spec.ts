import {test, Page, expect } from "@playwright/test"
import { LoginPage } from "./pages/login.page"
import { ProductPage } from "./pages/products.page"


test.describe("Funcionalidade: Produtos", async () => {
    let page: Page

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
    })


    test("Adicionar backpack no carrinho", async () =>{
        const loginPage = new LoginPage(page)
        const productPage = new ProductPage(page)

        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await productPage.addProduct("1","1","Sauce Labs Backpack",process.env.DESCRIPTION,"29.99")
    })


    test.afterAll(async () => {
        await page.close()
    })

})