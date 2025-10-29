import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class ProductPage extends BasePage {
  readonly buttonAddToCart: Locator;


  constructor(readonly page: Page) {
    super(page);
    this.buttonAddToCart = page.getByTestId('pdpAddToProduct');

  }

}
