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
import { HeaderPage } from "../pages/header-page";
import { ShopMainPage } from "../pages/main-shop-page";
import { ProductPage } from "../pages/product-details-page";
import { CartPage } from "../pages/cart-page";
import { CheckoutPage } from "../pages/checkout-page";

test.describe("JTI Recruitment Task", () => {
  let basePage: BasePage;
  let cookiesPage: CookiesPage;
  let ageConfirmModal: AgeConfirmModalPage;
  let headerPage: HeaderPage;
  let shopMainPage: ShopMainPage;
  let productPage: ProductPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }: { page: Page }) => {
    basePage = new BasePage(page);
    cookiesPage = new CookiesPage(page);
    ageConfirmModal = new AgeConfirmModalPage(page);
    headerPage = new HeaderPage(page);
    shopMainPage = new ShopMainPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    // Wejdz na Ploom UK: Buy Heated Tobacco Products, Devices and Kits

    await basePage.goto("https://www.ploom.co.uk/en");

    // Close the cookie overlay before each test
    await cookiesPage.acceptCookies();
    // Confirm age
    await ageConfirmModal.confirmAge();
  });

  test("Zadanie", async () => {
    const testDataExpectedCartCount = "1";

    await expect(cookiesPage.buttonGotIt).not.toBeVisible();
    await expect(ageConfirmModal.buttonYes).not.toBeVisible();
    // Kliknij Shop
    await headerPage.goToStore();
    await headerPage.headerImage.hover();
    // Otworz strone produktu po SKU (data-sku="<>" w DOM. W ramach testu mozesz uzyc 'ploom-x-advanced')
    const productTitle = await shopMainPage.getProductTitle("ploom-x-advanced");

    await shopMainPage.productByTitle(productTitle).click();

    await expect(productPage.buttonAddToCart).toBeAttached({ timeout: 10000 });
    // Dodaj do koszyka
    await productPage.buttonAddToCart.click();

    await expect(cartPage.notificationAddedToCart).toBeVisible();
    // Sprawdz count koszyka
    await expect(cartPage.buttonCart).toHaveText(testDataExpectedCartCount);

    // Otworz koszyk
    await cartPage.buttonCheckout.click();
    // Sprawdz czy produkt jest w koszyku

    await expect(checkoutPage.title).toBeVisible();
    await expect(checkoutPage.buttonCheckout).toBeVisible();
    await expect(checkoutPage.buttonCheckout).toBeEnabled();
    await expect(checkoutPage.buttonRemoveItem).toBeVisible();
    await expect(checkoutPage.inputCartQty).toHaveValue("1");
    await expect(checkoutPage.productsSection).toContainText(productTitle);
  });
});
