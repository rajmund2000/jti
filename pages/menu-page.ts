import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class MenuPage extends BasePage {
  readonly buttonShop: Locator;
  readonly urlShop: string;

  constructor(readonly page: Page) {
    super(page);
    this.buttonShop = page.getByRole("link", { name: "Shop", exact: true });
    this.urlShop = "https://www.ploom.co.uk/en/shop";
  }
  async goToStore() {
    await this.buttonShop.click();
    await this.page.waitForURL(this.urlShop);
  }
}
