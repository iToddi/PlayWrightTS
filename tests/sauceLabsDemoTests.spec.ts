import { test, expect } from '@playwright/test';

test('SauceLabs Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

await page.pause()
await page.locator('id=user-name').fill('standard_user')
await page.locator('id=password').fill('secret_sauce')
await page.click('id=login-button')

await expect(page.locator('text=Products')).toHaveCount(1)
});
