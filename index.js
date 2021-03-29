const { chromium } = require('playwright');
const fs = require('fs');

let scrappers = require('./scrappers');

const singleRunId = process.argv[2];
if (singleRunId) {
  scrappers = scrappers.filter((scrapper) => scrapper.id === singleRunId);
}

const main = async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] })
  const context = await browser.newContext();

  const data = await Promise.all(scrappers.map(async (scrapper) => {
    const { id, url, onScrap, delay = 10000 } = scrapper;

    const page = await context.newPage();
    await page.goto(url);
    await page.waitForTimeout(delay);
    const value = await page.evaluate(onScrap);
    
    console.log(id, value);
    
    return {
      id,
      value
    }
  }));

  await browser.close();

  if (process.env.OUTPUT_FILE) {
    fs.writeFile(process.env.OUTPUT_FILE, JSON.stringify(data, undefined, 2), function (err) {
      if (err) return console.log(err);
    });
  }

  console.log(JSON.stringify(data, undefined, 2))
}

main();
