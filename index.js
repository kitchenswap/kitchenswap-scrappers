const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({
    executablePath: process.env.PUPPETEER_EXEC_PATH, // set by docker container
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto('https://www.saltswap.finance/pools');

  const title = await page.evaluate(() => document.title);

  await browser.close();

  console.log(title)
}

main();
