import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Products page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/products.html');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('shows product list', async ({ page }) => {
    const products = new ProductsPage(page);
    await expect(products.productCards).toHaveCount(4);
    await products.expectProductVisible('Wireless Mouse');
  });

  test('filters products by category', async ({ page }) => {
    const products = new ProductsPage(page);

    await products.filterBy('electronics');

    await expect(products.productCards.filter({ hasText: 'Wireless Mouse' })).toBeVisible();
    await expect(products.productCards.filter({ hasText: 'Bluetooth Speaker' })).toBeVisible();
    await expect(products.productCards.filter({ hasText: 'Yoga Mat' })).toBeHidden();
  });

  test.fixme('search finds product by partial name - known bug BUG-001', async ({ page }) => {
    const products = new ProductsPage(page);

    await products.searchFor('speaker');

    await expect(products.productByName('Bluetooth Speaker')).toBeVisible();
  });

  test('adds product to cart and updates cart count', async ({ page }) => {
    const products = new ProductsPage(page);

    await products.addProduct('Wireless Mouse');

    await expect(page.getByTestId('cart-count')).toHaveText('1');
  });
});