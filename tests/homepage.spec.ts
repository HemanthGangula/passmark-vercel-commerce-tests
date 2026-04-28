import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("homepage loads with products", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Homepage browsing",
    steps: [
      { description: "Navigate to https://demo.vercel.store" },
      { description: "Wait for the page to fully load" },
    ],
    assertions: [
      { assertion: "The page shows a list of products or featured items" },
      { assertion: "The navigation header is visible" },
    ],
    test,
    expect,
  });
});

test("navigate to a product page", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Product page navigation",
    steps: [
      { description: "Navigate to https://demo.vercel.store" },
      { description: "Click on the first product visible on the page" },
    ],
    assertions: [
      { assertion: "A product detail page is shown with a product name" },
      { assertion: "An Add to Cart button is visible" },
    ],
    test,
    expect,
  });
});