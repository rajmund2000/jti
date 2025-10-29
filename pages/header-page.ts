import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class HeaderPage extends BasePage {
  readonly buttonShop: Locator;
  readonly urlShop: string;
  readonly headerImage:Locator;
  constructor(readonly page: Page) {
    super(page);
    this.buttonShop = page.getByRole("link", { name: "Shop", exact: true });
    this.urlShop = "https://www.ploom.co.uk/en/shop";
    this.headerImage = page.getByTestId('headerLogo').first();
  }
  async goToStore() {
    await this.buttonShop.click();
    await this.page.waitForURL(this.urlShop);
  }
}
