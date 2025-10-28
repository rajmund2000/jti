import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class CookiesPage extends BasePage {
  readonly buttonGotIt: Locator;
  readonly buttonRejectAll: Locator;
  readonly butonEditSettings: Locator;

  constructor(readonly page: Page) {
    super(page);
    this.buttonGotIt = page.getByRole("button", { name: "GOT IT" });
    this.buttonRejectAll = page.getByRole("button", { name: "Reject All" });
    this.butonEditSettings = page.getByRole("button", {
      name: "EDIT SETTINGS",
    });
  }
  async acceptCookies() {
    await this.buttonGotIt.click();
  }
}
