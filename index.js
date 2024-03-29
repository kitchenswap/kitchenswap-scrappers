const { chromium } = require('playwright');
const fs = require('fs');

let scrappers = require('./scrappers');

const singleRunId = process.argv[2];
if (singleRunId) {
  scrappers = scrappers.filter((scrapper) => scrapper.id === singleRunId);
}

const cleanValue = (field = '') => {
  return parseFloat(field
    .replace("%", "")
    .replace("$", "")
    .replace(/,/g, "")
    .trim()
  );
}

const cleanValues = (value) => {
  const {
    APR,
    depositFee,
    totalLiquidity
  } = value;

  const newValue = {
    ...value,
    APR: cleanValue(APR),
    totalLiquidity: cleanValue(totalLiquidity)
  }

  if (depositFee) {
    newValue.depositFee = cleanValue(depositFee);
  }

  return newValue;
}

const main = async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] })
  const context = await browser.newContext();

  const data = [];

  for(let i = 0; i < scrappers.length; i++) {
    const scrapper = scrappers[i];
    const { id, url, onPreLoad, onPreScrap, onScrap, delay = 10000 } = scrapper;

    const page = await context.newPage();
    await page.goto(url);
    await page.waitForTimeout(delay);
    if (onPreLoad) {
      await page.evaluate(onPreLoad);
      await page.waitForTimeout(15000);
    }
    if (onPreScrap) {
      await page.evaluate(onPreScrap);
      await page.waitForTimeout(500);
    }
    const scrappedValue = await page.evaluate(onScrap);
    const value = scrappedValue.map(cleanValues);

    await page.close();
    
    console.log(id, value);
    
    data.push({ id, value })
  }

  await browser.close();

  if (process.env.OUTPUT_FILE) {
    fs.writeFile(process.env.OUTPUT_FILE, JSON.stringify(data, undefined, 2), function (err) {
      if (err) return console.log(err);
    });
  }

  console.log(JSON.stringify(data, undefined, 2))
}

main();
