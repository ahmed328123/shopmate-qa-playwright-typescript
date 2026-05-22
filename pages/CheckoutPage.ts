import { expect, type Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/checkout.html');
  }

  async fillForm(data: { name: string; email: string; address: string; city: string }) {
    await this.page.getByTestId('checkout-name').fill(data.name);
    await this.page.getByTestId('checkout-email').fill(data.email);
    await this.page.getByTestId('checkout-address').fill(data.address);
    await this.page.getByTestId('checkout-city').fill(data.city);
  }

  async submit() {
    await this.page.getByTestId('place-order').click();
  }

  async expectSuccess() {
    await expect(this.page.getByTestId('checkout-success')).toBeVisible();
  }

  async expectError(text?: string) {
    const error = this.page.getByTestId('checkout-error');
    await expect(error).toBeVisible();
    if (text) {
      await expect(error).toContainText(text);
    }
  }
}
