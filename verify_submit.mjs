import { chromium } from './node_modules/playwright/index.mjs';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });
await page.route('**/_next/webpack-hmr**', route => route.abort());

await page.goto('http://localhost:3000/contact');
await page.waitForSelector('form', { timeout: 15000, state: 'visible' });
await page.waitForTimeout(2000);

await page.fill('input[placeholder="Name *"]', 'Test User');
await page.fill('input[placeholder="Email *"]', 'test@example.com');
await page.fill('input[placeholder="Company / Organisation"]', 'Test Co');
await page.selectOption('select', 'partnership');
await page.fill('textarea[placeholder="Your message *"]', 'Automated verification test.');

// Screenshot with form filled
await page.screenshot({ path: 'c:/Users/DELL/xiliherb-site/filled.png', fullPage: true });
console.log('Form filled, submitting...');

await page.click('button[type="submit"]');

// Wait up to 25s for result
try {
  await page.waitForFunction(() => {
    const t = document.body.innerText;
    return t.includes('Inquiry sent') || t.includes('Failed to send');
  }, { timeout: 25000 });
  console.log('Result state detected!');
} catch {
  console.log('No result state after 25s');
}

await page.screenshot({ path: 'c:/Users/DELL/xiliherb-site/result.png', fullPage: true });
const body = await page.textContent('body');
console.log('SUCCESS:', body.includes('Inquiry sent'));
console.log('FAILED:', body.includes('Failed to send'));
if (body.includes('Failed to send')) {
  const match = body.match(/Failed to send[^.]*\./);
  console.log('Error message:', match?.[0]);
}

await browser.close();
