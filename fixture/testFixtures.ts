import { test as fixture } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export const test = fixture.extend<{
  loginPage: LoginPage;
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  }
});

