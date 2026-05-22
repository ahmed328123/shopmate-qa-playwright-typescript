import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home page', () => {
  test('loads home page and navigates to products', async ({ page }) => {
    const home = new HomePage(page);

    await home.goto();
    await home.expectLoaded();
    await home.openProducts();

    await expect(page).toHaveURL(/products\.html/);
    await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
  });
});
