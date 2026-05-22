import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  readonly searchInput: Locator;
  readonly categoryFilter: Locator;
  readonly productCards: Locator;
  readonly noResults: Locator;

  constructor(private readonly page: Page) {
    this.searchInput = page.getByTestId('product-search');
    this.categoryFilter = page.getByTestId('category-filter');
    this.productCards = page.getByTestId('product-card');
    this.noResults = page.getByTestId('no-results');
  }

  async goto() {
    await this.page.goto('/products.html');
  }

  async searchFor(term: string) {
    await this.searchInput.fill(term);
  }

  async filterBy(category: string) {
    await this.categoryFilter.selectOption(category);
  }

  productByName(name: string) {
    return this.page.getByTestId('product-card').filter({ hasText: name });
  }

  async addProduct(name: string) {
    await this.productByName(name).getByTestId('add-to-cart').click();
  }

  async expectProductVisible(name: string) {
    await expect(this.productByName(name)).toBeVisible();
  }
}
