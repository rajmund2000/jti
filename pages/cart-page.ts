import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class CartPage extends BasePage {
  readonly buttonCart: Locator;
  readonly notificationAddedToCart: Locator;
  readonly buttonCheckout: Locator;


  constructor(readonly page: Page) {
    super(page);
    this.buttonCart = page.getByTestId('cartIcon');
    this.notificationAddedToCart = page.getByText('Product added to cart');
    this.buttonCheckout = page.getByTestId('miniCartCheckoutButton');
  }

}
