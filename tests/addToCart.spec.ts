// Wejdz na Ploom UK: Buy Heated Tobacco Products, Devices and Kits
// Kliknij Shop
// Otworz strone produktu po SKU (data-sku="<>" w DOM. W ramach testu mozesz uzyc 'ploom-x-advanced')
// Dodaj do koszyka
// Sprawdz count koszyka
// Otworz koszyk
// Sprawdz czy produkt jest w koszyku

import { test, expect, Page } from "@playwright/test";
import { CookiesPage } from "../pages/cookies-page";
import { BasePage } from "../pages/base-page";
import { AgeConfirmModalPage } from "../pages/age-confirmation-page";
import { MenuPage } from "../pages/menu-page";
import { ShopMainPage } from "../pages/main-shop-page";

test.describe("JTI Recruitment Task", () => {
  let basePage: BasePage;
  let cookiesPage: CookiesPage;
  let ageConfirmModal: AgeConfirmModalPage;
  let menuPage: MenuPage;
  let shopMainPage: ShopMainPage;

  test.beforeEach(async ({ page }: { page: Page }) => {
    basePage = new BasePage(page);
    cookiesPage = new CookiesPage(page);
    ageConfirmModal = new AgeConfirmModalPage(page);
    menuPage = new MenuPage(page);
    shopMainPage = new ShopMainPage(page);
    // Wejdz na Ploom UK: Buy Heated Tobacco Products, Devices and Kits

    await basePage.goto("https://www.ploom.co.uk/en");

    // Close the cookie overlay before each test
    await cookiesPage.acceptCookies();
    // Confirm age
    await ageConfirmModal.confirmAge();
  });

  test("Zadanie", async ({ page }: { page: Page }) => {
    await expect(cookiesPage.buttonGotIt).not.toBeVisible();
    await expect(ageConfirmModal.buttonYes).not.toBeVisible();
    await menuPage.goToStore();
    await shopMainPage.clickProductBySKU("ploom-x-advanced");
    // Kliknij Shop

    // Otworz strone produktu po SKU (data-sku="<>" w DOM. W ramach testu mozesz uzyc 'ploom-x-advanced')
    // Dodaj do koszyka
    // Sprawdz count koszyka
    // Otworz koszyk
    // Sprawdz czy produkt jest w koszyku
  });
});
