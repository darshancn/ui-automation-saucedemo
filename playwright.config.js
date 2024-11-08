// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  retries: 1,
  testDir: './tests',
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://www.saucedemo.com',
  },
});
