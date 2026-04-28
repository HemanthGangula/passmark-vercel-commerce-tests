import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("search returns relevant results", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Product search",
    steps: [
      { description: "Navigate to https://demo.vercel.store" },
      { description: "Click the search icon or search bar" },
      { description: "Type the word shirt into the search field" },
    ],
    assertions: [
      { assertion: "Search results are shown with at least one product visible" },
      { assertion: "The first result is related to the search term shirt" },
    ],
    test,
    expect,
  });
});