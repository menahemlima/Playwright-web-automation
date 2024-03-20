import {test, Page } from "@playwright/test"
import { LoginPage } from "./pages/login.page"

test.describe("Funcionalidade: Tela de Login", async () => {
    let page: Page

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
    })

    test("Cenário 01: Login com sucesso", async () =>{
        const loginPage = new LoginPage(page)

        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await loginPage.validateLoginSucesso("Products")
    })

    test("Cenário 02: Login com falha", async () =>{
        const loginPage = new LoginPage(page)

        await loginPage.login(process.env.BASE_URL, "problem_user", "123")
        await loginPage.validateLoginFalha("Epic sadface: Username and password do not match any user in this service")
    })

    test.afterAll(async () => {
        await page.close()
    })
})