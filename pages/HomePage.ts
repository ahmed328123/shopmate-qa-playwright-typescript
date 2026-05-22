import { expect, type Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async expectLoaded() {
    await expect(this.page.getByRole('heading', { name: /modern shopping experience/i })).toBeVisible();
    await expect(this.page.getByRole('link', { name: /start shopping/i })).toBeVisible();
  }

  async openProducts() {
    await this.page.getByRole('link', { name: /start shopping/i }).click();
  }
}
