import { Page } from "@playwright/test";
import type { Response, Request } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(p0: string) {
    await this.page.goto("/");
  }

  async reload() {
    await this.page.reload();
  }
}
