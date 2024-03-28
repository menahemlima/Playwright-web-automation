import { test, Page } from "@playwright/test"
import { LoginPage } from "./pages/1.login.page"

test.describe("Funcionalidade: Tela de Login", async () => {
    let page: Page
    let loginPage: LoginPage

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        loginPage = new LoginPage(page)
    })

    test("Cenário 01: Login com sucesso", async () => {
        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await loginPage.validateLoginSucesso("Products")
    })

    test("Cenário 02: Login com falha", async () => {
        await loginPage.login(process.env.BASE_URL, "problem_user", "123")
        await loginPage.validateLoginFalha("Epic sadface: Username and password do not match any user in this service")
    })

    test.afterAll(async () => {
        await page.close()
    })
})