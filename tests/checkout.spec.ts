import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("checkout page is reachable from cart", async ({ page }) => {
  test.setTimeout(180_000);
  await runSteps({
    page,
    userFlow: "Checkout flow",
    steps: [
      { description: "Navigate to https://demo.vercel.store" },
      { description: "Click on the first product" },
      { description: "Click Add to Cart button" },
      { description: "Click the Proceed to Checkout button in the cart" },
    ],
    assertions: [
      { assertion: "A checkout page or Shopify checkout is loaded" },
      { assertion: "The page shows order summary or cart items" },
    ],
    test,
    expect,
  });
});