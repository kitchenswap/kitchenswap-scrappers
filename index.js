const { chromium } = require('playwright');

const scrappers = require('./scrappers');

const main = async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] })
  const context = await browser.newContext();

  const data = await Promise.all(scrappers.map(async (scrapper) => {
    const { name, url, onScrap } = scrapper;
    const page = await context.newPage();
    await page.goto(url);
    await page.waitForTimeout(5000);
    const value = await page.evaluate(onScrap);
    
    console.log(name, value);

    return {
      name,
      value
    }
  }));

  await browser.close();
}

main();
