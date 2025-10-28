import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class AgeConfirmModalPage extends BasePage {
  readonly buttonYes: Locator;
  readonly buttonLeave: Locator;

  constructor(readonly page: Page) {
    super(page);
    this.buttonYes = page.getByTestId("confirm-button");
    this.buttonLeave = page.getByTestId("leave-button");
  }
  async confirmAge() {
    await this.buttonYes.click();
  }
}
