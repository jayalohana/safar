import { chromium } from "playwright";

const routeLabels = [
  "Lahore → Islamabad",
  "Lahore → Murree",
  "Islamabad → Naran",
  "Islamabad → Kaghan",
  "Hyderabad → Karachi",
  "Karachi → Hyderabad",
  "Lahore → Multan",
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.evaluate(() => localStorage.clear());
await page.reload({ waitUntil: "networkidle" });

if (await page.locator(".journey").count()) throw new Error("Initial journey stats should be hidden.");

for (const label of routeLabels) {
  await page.getByRole("button", { name: label }).click();
  const active = await page.getByRole("button", { name: label }).getAttribute("aria-pressed");
  if (active !== "true") throw new Error(`Route did not activate: ${label}`);
  if (!(await page.locator(".journey").isVisible())) throw new Error(`Journey stats missing: ${label}`);
}

const firstTitle = await page.locator(".track-copy h3").textContent();
await page.getByRole("button", { name: "Next track" }).click();
const nextTitle = await page.locator(".track-copy h3").textContent();
if (firstTitle === nextTitle) throw new Error("Next track did not update metadata.");
await page.getByRole("button", { name: "Previous track" }).click();
if ((await page.locator(".track-copy h3").textContent()) !== firstTitle) throw new Error("Previous track did not restore metadata.");

await page.waitForTimeout(2000);
await page.getByRole("button", { name: "Play" }).click();
try {
  await page.getByRole("button", { name: "Pause" }).waitFor({ timeout: 10000 });
} catch {
  throw new Error(`YouTube did not enter playing state: ${await page.locator(".track-copy p").textContent()}`);
}
await page.waitForTimeout(1200);
const playbackTime = Number(await page.locator('.timeline input[type="range"]').inputValue());
if (playbackTime <= 0) throw new Error("YouTube playback time did not advance.");

console.log(JSON.stringify({ routesChecked: routeLabels.length, metadataControls: "pass", youtubePlayback: "pass" }));
await browser.close();
