import { test, expect } from '@playwright/test';

test.describe('Contact page', () => {
  test('shows error for empty message form', async ({ page }) => {
    await page.goto('/contact.html');

    await page.getByTestId('contact-submit').click();

    await expect(page.getByTestId('contact-error')).toBeVisible();
    await expect(page.getByTestId('contact-error')).toContainText('Please complete all fields.');
  });

  test('sends contact message with valid data', async ({ page }) => {
    await page.goto('/contact.html');

    await page.getByTestId('contact-name').fill('Ahmed Ali');
    await page.getByTestId('contact-email').fill('ahmed@example.com');
    await page.getByTestId('contact-message').fill('I need help with my order.');
    await page.getByTestId('contact-submit').click();

    await expect(page.getByTestId('contact-success')).toBeVisible();
  });
});
