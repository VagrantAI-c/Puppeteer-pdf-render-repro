import { launch } from 'puppeteer';

(async () => {
  const browser = await launch({
    headless: true,
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-sandbox',
    ],
  });
  const page = await browser.newPage();
  const content = '<!doctype html><html lang="en"><head></head><body><h1>Test</h1></body></html>';
  await page.setContent(content, { waitUntil: 'networkidle0' });
  await page.pdf({ format: 'a4' });
  await page.close();
})();
