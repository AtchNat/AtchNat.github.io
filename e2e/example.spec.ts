import { test, expect } from '@playwright/test';
import { examplePage } from '../e2e/test.page'

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const options = ['this', 'that', 'theother']

  if(options.length>1) {
    await page.getByText('Heading')
  } else {
    
  }

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  const exampleInstant = new examplePage(page);
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await exampleInstant.openTextFilters('filter', 'example');
});
