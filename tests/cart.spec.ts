import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test.describe('Cart page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/products.html');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('shows added product in cart', async ({ page }) => {
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

    await products.addProduct('Yoga Mat');
    await cart.goto();

    await cart.expectItemVisible('Yoga Mat');
    await expect(page.getByTestId('cart-count')).toHaveText('1');
  });

  test('calculates total including shipping - expected to fail because of known bug BUG-003', async ({ page }) => {
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

    await products.addProduct('Wireless Mouse');
    await cart.goto();

    await expect(page.getByTestId('cart-subtotal')).toHaveText('€24.99');
    await expect(page.getByTestId('cart-shipping')).toHaveText('€4.99');
    await expect(page.getByTestId('cart-total')).toHaveText('€29.98');
  });

  test('updates cart count after removing item - expected to fail because of known bug BUG-002', async ({ page }) => {
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

    await products.addProduct('Desk Lamp');
    await cart.goto();
    await cart.removeFirstItem();

    await expect(page.getByTestId('cart-count')).toHaveText('0');
  });
});
