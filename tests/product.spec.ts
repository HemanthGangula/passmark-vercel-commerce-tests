import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("product page shows correct details", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Product detail view",
    steps: [
      { description: "Navigate to https://demo.vercel.store" },
      { description: "Click on the first product" },
    ],
    assertions: [
      { assertion: "Product name is visible on the page" },
      { assertion: "Product price is displayed" },
      { assertion: "Add to Cart button is present" },
    ],
    test,
    expect,
  });
});

test("product variant selection works", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Product variant selection",
    steps: [
      { description: "Navigate to https://demo.vercel.store" },
      { description: "Click on the Acme Circles T-Shirt product" },
      { description: "Select color White" },
      { description: "Select size Small" },
    ],
    assertions: [
      { assertion: "The selected size and color are visually highlighted or selected" },
      { assertion: "Add to Cart button is still visible after selecting variants" },
    ],
    test,
    expect,
  });
});