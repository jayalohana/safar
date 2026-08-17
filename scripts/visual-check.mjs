import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

await mkdir(".impeccable/review", { recursive: true });
const browser = await chromium.launch({ headless: true });

async function capture(viewport, name, selectRoute = false) {
  const page = await browser.newPage({ viewport, reducedMotion: "no-preference" });
  await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: "networkidle" });
  if (selectRoute) {
    await page.getByRole("button", { name: "Lahore → Islamabad" }).click();
    await page.waitForTimeout(1450);
  }
  await page.screenshot({ path: `.impeccable/review/${name}.png`, fullPage: true });
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
    scrollHeight: document.documentElement.scrollHeight,
    innerHeight: window.innerHeight,
    journey: document.querySelector(".journey") ? {
      rect: document.querySelector(".journey").getBoundingClientRect().toJSON(),
      color: getComputedStyle(document.querySelector(".journey h2")).color,
      text: document.querySelector(".journey").textContent,
    } : null,
    activeRoute: document.querySelector('[aria-pressed="true"]')?.textContent?.trim() || null,
  }));
  await page.close();
  return dimensions;
}

const results = {
  desktop: await capture({ width: 1920, height: 1080 }, "desktop"),
  desktopRoute: await capture({ width: 1440, height: 900 }, "desktop-route", true),
  laptop: await capture({ width: 1024, height: 768 }, "laptop", true),
  tablet: await capture({ width: 768, height: 1024 }, "tablet", true),
  mobile: await capture({ width: 390, height: 844 }, "mobile", true),
};

console.log(JSON.stringify(results, null, 2));
await browser.close();
