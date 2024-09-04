import { test } from "@playwright/test";

const date = "2024-08-16";
const username = "Playwright Viet Nam";
const email = "playwrightvietnam@gmail.com";
const description = "Đây là lớp Playwright K8";
const country = "usa";

test("Exercise 1: Register Page", async ({ page }) => {
    await test.step("Navigate to Material Playwright Page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step("Click on User Registration", async () => {
        await page.locator("//a[@href ='01-xpath-register-page.html']").click();
    })

    await test.step("Fill information to all fields ", async () => {
        await page.locator('//input[@id="username"]').fill(username);
        await page.locator('//input[@id="email"]').fill(email);
        await page.locator('//input[@id="male"]').check();
        await page.locator('//input[@id="traveling"]').check();
        await page.selectOption('//select[@id="country"]', country);
        await page.locator('//input[@id="dob"]').fill(date);
        await page.locator('//textarea[@id= "bio"]').fill(description);
        await page.locator('//div[@class="tooltip"]').hover();
        await page.locator('//input[@id= "newsletter"]').check();
    })

    await test.step("Click Register button", async () => {
        await page.locator("//button[normalize-space()='Register']").click();
    })
})