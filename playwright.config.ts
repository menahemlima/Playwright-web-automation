import { defineConfig, devices } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
  fullyParallel: false,
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 6000
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 2 : 1,
  reporter: 'html',
  use: {
    headless: true,
    screenshot:'on',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 50,
    },
  },
  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], 
        launchOptions: {
          slowMo: 300,
        },
      },
      
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], 
        launchOptions: {
          slowMo: 300,
        },
      },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'],
        deviceScaleFactor: 1,
        launchOptions: {
          slowMo: 300,
        },
       },
       
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
