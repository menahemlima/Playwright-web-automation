import { test } from '../fixture/testFixtures';

test.describe("Funcionalidade: Tela de Login", async () => {

    test("Cenário 01: Login com sucesso", async ({ loginPage }) => {
        await loginPage.login(process.env.BASE_URL, process.env.USER, process.env.PASS)
        await loginPage.validateLoginSucesso("Products")
    })

    test("Cenário 02: Login com falha", async ({ loginPage }) => {
        await loginPage.login(process.env.BASE_URL, "problem_user", "123")
        await loginPage.validateLoginFalha("Epic sadface: Username and password do not match any user in this service")
    })
})