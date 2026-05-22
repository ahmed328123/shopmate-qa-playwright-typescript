import { test, expect } from '@playwright/test';

test.describe('Login page', () => {
  test('logs in with valid credentials', async ({ page }) => {
    await page.goto('/login.html');

    await page.getByTestId('login-email').fill('qa@example.com');
    await page.getByTestId('login-password').fill('Password123!');
    await page.getByTestId('login-submit').click();

    await expect(page.getByTestId('login-message')).toContainText('Login successful.');
  });

  test('shows error for invalid credentials - expected to fail because of known bug BUG-005', async ({ page }) => {
    await page.goto('/login.html');

    await page.getByTestId('login-email').fill('wrong@example.com');
    await page.getByTestId('login-password').fill('wrongPassword');
    await page.getByTestId('login-submit').click();

    await expect(page.getByTestId('login-message')).toBeVisible();
    await expect(page.getByTestId('login-message')).toContainText('Invalid email or password.');
  });
});
