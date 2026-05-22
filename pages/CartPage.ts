import { expect, type Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/cart.html');
  }

  async expectItemVisible(name: string) {
    await expect(this.page.getByTestId('cart-items')).toContainText(name);
  }

  async removeFirstItem() {
    await this.page.getByTestId('remove-item').first().click();
  }

  async subtotalText() {
    return this.page.getByTestId('cart-subtotal').innerText();
  }

  async totalText() {
    return this.page.getByTestId('cart-total').innerText();
  }
}
