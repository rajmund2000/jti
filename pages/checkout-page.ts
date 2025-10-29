import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class CheckoutPage extends BasePage {
  readonly title: Locator;
  readonly buttonRemoveItem: Locator;
  readonly inputCartQty: Locator;
  readonly cartItemPrice: Locator;
  readonly buttonCheckout: Locator;
  readonly textEmptyCart: Locator;
  readonly productsSection:Locator

  constructor(readonly page: Page) {
    super(page);
    this.title = page.getByTestId("page-layout-title");
    this.buttonRemoveItem = page.getByTestId("main-section").getByTestId("cartRemoveButton");
    this.inputCartQty = page.getByTestId("main-section").getByTestId("cartQuantity");
    this.cartItemPrice = page.getByTestId("main-section").getByText("£");
    this.buttonCheckout = page.getByTestId("loginCheckoutButton");
    this.textEmptyCart = page.getByText('You have no items in your');
    this.productsSection = page.getByTestId('main-section')
  }
}
