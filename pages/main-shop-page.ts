import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class ShopMainPage extends BasePage {
  readonly linkProductItem: (text: string) => Locator;

  constructor(readonly page: Page) {
    super(page);
    this.linkProductItem = (text: string) =>
      page.locator(`[data-sku="${text}"]`).getByText("Buy Now");
  }
  async clickProductBySKU(text: string) {
    await this.linkProductItem(text).click();
  }
}
