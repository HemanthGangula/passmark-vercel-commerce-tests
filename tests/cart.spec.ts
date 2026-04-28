import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("add product to cart", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Add to cart",
    steps: [
      { description: "Navigate to https://demo.vercel.store" },
      { description: "Click on the Acme Circles T-Shirt product" },
      { description: "Select color White" },
      { description: "Select size Small" },
      { description: "Click Add to Cart button" },
    ],
    assertions: [
      { assertion: "Cart opens or updates showing the Acme Circles T-Shirt" },
      { assertion: "The cart shows a quantity of 1" },
    ],
    test,
    expect,
  });
});

test("cart shows correct item count", async ({ page }) => {
  test.setTimeout(180_000);
  await runSteps({
    page,
    userFlow: "Cart item count",
    steps: [
      { description: "Navigate to https://demo.vercel.store" },
      { description: "Click on the first product" },
      { description: "Click Add to Cart button" },
    ],
    assertions: [
      { assertion: "The cart panel or drawer opens showing at least 1 item" },
    ],
    test,
    expect,
  });
});