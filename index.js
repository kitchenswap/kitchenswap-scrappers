const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"]
  });

  const page = await browser.newPage();

  await page.goto('https://www.saltswap.finance/pools');

  const title = await page.evaluate(() => document.title);

  await browser.close();

  console.log(title)
}

main();
