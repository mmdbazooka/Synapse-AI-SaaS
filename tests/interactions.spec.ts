import { test, expect } from "@playwright/test";
test("dashboard tasks, views, local AI and integrations respond to input", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("tab", { name: "Tasks", exact: true }).click();
  await page.getByRole("button", { name: "Add a task" }).click();
  await page
    .getByRole("textbox", { name: "Task title" })
    .fill("Prepare the concept review");
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await page
    .getByRole("checkbox", { name: /Prepare the concept review/ })
    .check();
  await expect(
    page.getByRole("checkbox", { name: /Prepare the concept review/ }),
  ).toBeChecked();
  await page
    .getByRole("textbox", { name: "Search dashboard tasks" })
    .fill("does-not-exist");
  await expect(
    page.getByText("No tasks match", { exact: false }),
  ).toBeVisible();
  await page.getByRole("textbox", { name: "Search dashboard tasks" }).fill("");
  await page.getByRole("tab", { name: "Insights", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Your work, in perspective." }),
  ).toBeVisible();
  await page.getByRole("tab", { name: "AI Assistant", exact: true }).click();
  const ai = page.locator(".ai-compact");
  await ai.getByRole("button", { name: /Prioritize blockers/ }).click();
  await expect(
    ai.getByText("Here’s where a little focus goes a long way."),
  ).toBeVisible();
  await page.getByRole("tab", { name: "Integrations", exact: true }).click();
  await page
    .locator(".db-integrations")
    .getByRole("button", { name: "Connect demo" })
    .first()
    .click();
  await expect(
    page.locator(".db-integrations").getByRole("button", { name: "Connected" }),
  ).toHaveCount(3);
});
test("pricing, FAQ and explicit sign-in demo work", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Yearly/ }).click();
  await expect(
    page.locator(".price-card").nth(1).locator(".price"),
  ).toContainText("$15");
  await expect(page.locator(".price-card").nth(1)).toContainText(
    "$180 billed yearly",
  );
  await page
    .getByText("Is the AI preview connected to a model?", { exact: true })
    .click();
  await expect(
    page.getByText("No. Responses are thoughtfully written", { exact: false }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByRole("dialog")).toContainText(
    "there’s no account to sign into",
  );
});
