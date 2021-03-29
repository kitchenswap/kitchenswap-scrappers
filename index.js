const { chromium } = require('playwright');
const {
  saltSwapUrl,
  scrapSaltSwap
} = require('./scrap');

const main = async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] })
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(saltSwapUrl);
  await page.waitForTimeout(5000);
  const info = await page.evaluate(scrapSaltSwap);

  await browser.close();

  console.log(info)
}

main();
