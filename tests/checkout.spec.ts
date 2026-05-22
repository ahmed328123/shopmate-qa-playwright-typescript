import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout page', () => {
  test('shows validation error when fields are empty', async ({ page }) => {
    const checkout = new CheckoutPage(page);

    await checkout.goto();
    await checkout.submit();

    await checkout.expectError('All fields are required.');
  });

  test('rejects invalid email format - expected to fail because of known bug BUG-004', async ({ page }) => {
    const checkout = new CheckoutPage(page);

    await checkout.goto();
    await checkout.fillForm({
      name: 'Ahmed Ali',
      email: 'invalid@',
      address: 'Test Street 1',
      city: 'Duisburg'
    });
    await checkout.submit();

    await checkout.expectError('Please enter a valid email address.');
  });

  test('places order with valid data', async ({ page }) => {
    const checkout = new CheckoutPage(page);

    await checkout.goto();
    await checkout.fillForm({
      name: 'Ahmed Ali',
      email: 'ahmed@example.com',
      address: 'Test Street 1',
      city: 'Duisburg'
    });
    await checkout.submit();

    await checkout.expectSuccess();
  });
});
