import { test } from '@playwright/test';

const registerPageUrl = "https://material.playwrightvn.com/01-xpath-register-page.html";

test('date picker, slider, color picker', async ({ page }) => {
    await page.goto(registerPageUrl);

   await page.locator("//input[@id='dob']").fill("2024-01-30");
   await page.locator("//input[@id='rating']").fill("3");
   await page.locator("//input[@id='favcolor']").fill("#e66465");
});


test('file, hover', async ({ page }) => {
    await page.goto(registerPageUrl);

   await page.locator("//input[@id='profile']").setInputFiles("tests/lectures/playwright-test/a1.txt");
   await page.locator("//div[@class='tooltip']").hover();
   
});