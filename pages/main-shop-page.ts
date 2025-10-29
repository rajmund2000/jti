import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class ShopMainPage extends BasePage {
  readonly linkProductItem: (text: string) => Locator;
  readonly headerElement: Locator;
  readonly productByTitle: (text: string) => Locator;
  readonly productHeader: (text: string) => Locator;

  constructor(readonly page: Page) {
    super(page);
    this.linkProductItem = (text: string) =>
      page.locator(`[data-sku="${text}"]`).getByText('Buy Now').locator('..');
    this.headerElement = page.getByTestId("ShopTeasers");
    this.productByTitle = (text: string) =>page.getByTitle(`${text}`);

    this.productHeader = (text: string) =>
      page.locator(`[data-sku="${text}"]`).locator('h3');
  }

  async clickProductBySKU(text: string) {
//await this.linkProductItem(text).hover();
    await this.linkProductItem(text).click();
  }

  async getProductTitle(text: string){
    const title = await this.productHeader(text).first().textContent()
    return title||"";
  }
}
